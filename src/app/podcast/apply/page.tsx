'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { FormEvent, useEffect, useState } from 'react'
import { NotionRecord, addRecordToNotion } from './actions'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z.string().email({ message: 'Invalid email' }),
  twitter: z.string().optional(),
  productName: z.string().min(1, { message: 'Required' }),
  productUrl: z.string().url({ message: 'Invalid URL' }),
  webapp: z.boolean().optional(),
  mobileapp: z.boolean().optional(),
  desktopapp: z.boolean().optional(),
  devtools: z.boolean().optional(),
  productDescription: z.string().min(1, { message: 'Required' }),
});

function Page() {
  const router = useRouter()
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });



  useEffect(() => {
    console.log(form.formState.errors)
  }, [form.formState.errors])



  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: z.infer<typeof schema>) {
    try {
      setIsLoading(true)
      let record: NotionRecord = {
        yourName: data.name,
        email: data.email,
        twitter: data.twitter,
        productName: data.productName,
        productUrl: data.productUrl,
        productType:[],
        productDescription: data.productDescription,
      }
      if (data.webapp) {
        record.productType?.push('webapp')
      }
      if (data.mobileapp) {
        record.productType?.push('mobileapp')
      }
      if (data.desktopapp) {
        record.productType?.push('desktopapp')
      }
      if (data.devtools) {
        record.productType?.push('devtools')
      }
      await addRecordToNotion(record)
      router.push('/podcast/apply/success')
    } catch(err) {
      console.error(err)
      toast.error("Something went wrong! Reach out to @brianmmdev on Twitter or in the Discord for help.")
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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="twitter" render={({ field }) => (
              <FormItem>
                <FormLabel>X/Twitter handle</FormLabel>
                <FormControl>
                  <Input placeholder="@fullstackchat" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="productName" render={({ field }) => (
              <FormItem>
                <FormLabel>Product name</FormLabel>
                <FormControl>
                  <Input placeholder="Product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="productUrl" render={({ field }) => (
              <FormItem>
                <FormLabel>Product name</FormLabel>
                <FormControl>
                  <Input placeholder="Product URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="productDescription" render={({ field }) => (
              <FormItem>
                <FormLabel>Product description</FormLabel>
                <FormControl>
                  <Textarea placeholder="What does your product do? What problem does it solve?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='border rounded p-4 flex flex-col'>
            <Label>Product type</Label>
            <FormField control={form.control} name="webapp" render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                  <FormControl>
                    <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} defaultChecked={false} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Web
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="mobileapp" render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                  <FormControl>
                    <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} defaultChecked={false}  />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Mobile
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="desktopapp" render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                  <FormControl>
                    <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} defaultChecked={false}  />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Desktop
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="devtools" render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                  <FormControl>
                    <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} defaultChecked={false}  />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Dev tools
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Form>

    </section>
  )
}

export default Page