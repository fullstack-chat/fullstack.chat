'use server'

import { Client } from '@notionhq/client'
import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'

export type NotionRecord = {
  yourName: string
  email?: string
  twitter?: string
  productName?: string
  productType?: string[]
  productUrl?: string
  productDescription?: string
}

export async function addRecordToNotion(record: NotionRecord) {
  const notion = new Client({
    auth: process.env.NOTION_KEY
  })

  const databaseId = process.env.NOTION_PODAPPS_DBID

  const types = []
  if(record.productType?.includes("webapp")) {
    types.push("Web app")
  }
  if(record.productType?.includes("mobileapp")) {
    types.push("Mobile app")
  }
  if(record.productType?.includes("desktopapp")) {
    types.push("Desktop app")
  }
  if(record.productType?.includes("devtools")) {
    types.push("Dev tools")
  }

  const props: CreatePageParameters = {
    parent: {
      database_id: databaseId as string
    },
    properties: {
      "Name": {
        title: [
          {
            text: {
              content: record.yourName as string
            }
          }
        ]
      },
    }
  }

  if(record.email) {
    props.properties["Email"] = {
      email: record.email
    }
  }

  if (record.twitter) {
    props.properties["Twitter"] = {
      rich_text: [
        {
          text: {
            content: record.twitter
          }
        }
      ]
    }
  }

  if (record.productName) {
    props.properties["Product name"] = {
      rich_text: [
        {
          text: {
            content: record.productName
          }
        }
      ]
    }
  }

  if (record.productDescription) {
    props.properties["Product description"] = {
      rich_text: [
        {
          text: {
            content: record.productDescription
          }
        }
      ]
    }
  }

  if (record.productUrl) {
    props.properties["Product URL"] = {
      url: record.productUrl
    }
  }

  if (types.length > 0) {
    props.properties["Product type"] = {
      multi_select: types.map(type => ({ name: type }))
    }
  }


  let res = await notion.pages.create(props)
}