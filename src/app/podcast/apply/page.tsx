'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { FormEvent, useState } from 'react'
import { NotionRecord, addRecordToNotion } from './actions'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Textarea } from '@/components/ui/textarea'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

function Page() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      setIsLoading(true)
      const formData = new FormData(event.currentTarget)
      let data: NotionRecord = {
        yourName: formData.get('name') as string,
        email: formData.get('email') as string,
        twitter: formData.get('twitter') as string,
        productName: formData.get('productName') as string,
        productUrl: formData.get('productUrl') as string,
        productType: ['webapp', 'mobileapp', 'desktopapp', 'devtools'].filter((type) => formData.get(type) === 'on'),
        productDescription: formData.get('productDescription') as string,
      }
      await addRecordToNotion(data)
      router.push('/podcast/apply/success')
    } catch(err) {
      console.error(err)
      toast.error("Something went wrong! Reach out to @brianmmdev on Twitter for help.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-2">
        <h1>Apply to be on the podcast</h1>
        <p className="lg:text-lg text-balance md:max-w-prose">
          The goal of the fullstack.chat podcast is to share the stories of developers building amazing web, desktop, or mobile applications. We want to hear about your journey, the challenges you've faced, and the lessons you've learned along the way.
        </p>
      </header>

      <form onSubmit={onSubmit} className='flex flex-col gap-2' >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Your full name</Label>
          <Input type="text" id="name" name="name" placeholder="Your full name" disabled={isLoading} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Email" disabled={isLoading} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="twitter">Twitter/X handle</Label>
          <Input type="text" id="twitter" name="twitter" placeholder="@fullstackchat" disabled={isLoading} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="mb-1">Type of product</Label>
          <div className="items-top flex space-x-2">
            <Checkbox disabled={isLoading} id="webapp" name='webapp' />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="webapp" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >
                Web
              </Label>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox disabled={isLoading} id="mobileapp" name='mobileapp' />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="mobileapp" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >
                Mobile
              </Label>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox disabled={isLoading} id="desktopapp" name='desktopapp' />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="desktopapp" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >
                Desktop
              </Label>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox disabled={isLoading} id="devtools" name='devtools' />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="devtools" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >
                Dev tools
              </Label>
            </div>
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="productName">Product name</Label>
          <Input type="text" id="productName" name="productName" placeholder="Product name" disabled={isLoading} />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="productUrl">Product URL</Label>
          <Input type="text" id="productUrl" name="productUrl" placeholder="Product URL" disabled={isLoading} />
        </div>

        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
          <RadioGroup defaultValue="planning" name='phase'>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="planning" id="planning" />
              <Label htmlFor="planning">Planing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="indev" id="indev" />
              <Label htmlFor="indev">In development</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="launched" id="launched" />
              <Label htmlFor="launched">Launched</Label>
            </div>
          </RadioGroup>
        </div> */}

        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
          tech used (make this a multiselect and save to tags)
        </div> */}

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="productDescription">Product description</Label>
          <Textarea placeholder="Product description" id="productDescription" name="productDescription" disabled={isLoading} />
          <p className="text-sm text-muted-foreground">
            What does your product do? What problem does it solve?
          </p>

        </div>

        <div className='flex'>
          <Button type='submit' disabled={isLoading}>
            { isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </section>
  )
}

export default Page