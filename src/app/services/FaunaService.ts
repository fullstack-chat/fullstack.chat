import * as faunadb from 'faunadb'

const q = faunadb.query;

export default class FaunaService {
  serverClient: faunadb.Client

  constructor(faunaSecret: string, domain?: string) {
    let opts: any = {
      secret: faunaSecret
    }
    if(domain) {
      opts.domain = domain
    }
    this.serverClient = new faunadb.Client(opts)
  }

  async createRecord(collectionName: string, data: any) {
    let record: any = await this.serverClient.query(
      q.Create(
        q.Collection(collectionName),
        { data }
      )
    )
    let recordData = record.data
    recordData.id = record.ref.id
    return recordData
  }

  async listRecords(collectionName: string): Promise<any[]> {
    try {
      let records: any = await this.serverClient.query(
        q.Map(
          q.Paginate(
            q.Documents(q.Collection(collectionName))),
            q.Lambda("X", q.Get(q.Var("X")))
        )
      )
      let recordsData = []
      if(records && records.data && records.data.length > 0) {
        recordsData = records.data.map((el: any) => {
          return {
            id: el.ref.id,
            ...el.data
          }
        })
      }
      return recordsData
    } catch (err: any) {
      console.error('FaunaService.listRecords:', err.toString())
      throw err
    }
  }

  async getRecordById(collectionName: string, recordId: string) {
    try {
      const record: any = await this.serverClient.query(
        q.Get(
          q.Ref(
            q.Collection(collectionName),
            recordId
          )
        )
      )

      let recordData = record.data
      recordData.id = record.ref.id
      return recordData
    } catch (err: any) {
      console.error('FaunaService.getRecordById:', err.toString())
      throw err
    }
  }

  async deleteRecord(collectionName: string, recordId: string) {
    try {
      await this.serverClient.query(
        q.Delete(
          q.Ref(
            q.Collection(collectionName),
            recordId
          )
        )
      )
    } catch (err: any) {
      console.error('FaunaService.deleteRecord:', err.toString())
      throw err
    }
  }

  async updateRecord(collectionName: string, recordId: string, updates: any) {
    try {
      let updated: any = await this.serverClient.query(
        q.Update(
          q.Ref(
            q.Collection(collectionName),
            recordId,
          ),
          {
            data: updates
          }
        )
      )
      let recordData = updated.data
      recordData.id = updated.ref.id
      return recordData
    } catch (err: any) {
      console.error('FaunaService.updateRecord:', err.toString())
      throw err
    }
  }

  async getRecordByIndex(indexName: string, value: any) {
    try {
      let record: any = await this.serverClient.query(
        q.Get(
          q.Match(
            q.Index(indexName),
            value
          )
        )
      )
      let recordData = record.data
      recordData.id = record.ref.id
      return recordData
    } catch (err: any) {
      console.error('FaunaService.getRecordByIndex:', err.toString())
      throw err
    }
  }

  async fetchRecordsInIndex(indexName: string, value: any) {
    try {
      let records: any, recordsData: any
      if(value) {
        records = await this.serverClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index(indexName), value)),
            q.Lambda("X", q.Get(q.Var("X")))
          )
        )
      } else {
        records = await this.serverClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index(indexName))),
            q.Lambda("X", q.Get(q.Var("X")))
          )
        )
      }
      if(records && records.data && records.data.length > 0) {
        recordsData = records.data.map((el: any) => {
          return {
            id: el.ref.id,
            ...el.data
          }
        })
      }
      return recordsData
    } catch (err: any) {
      console.error('FaunaService.fetchRecordsInIndex:', err.toString())
      throw err
    }
  }
}