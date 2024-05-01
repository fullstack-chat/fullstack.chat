import { createWebhooksHandler } from "@brianmmdev/clerk-webhooks-handler";

const handler = createWebhooksHandler({
  onUserUpdated: async (payload) => {
    // Update a user in the database
    console.log("user updated!", payload)
  },
  onSessionCreated: async (payload) => {
    // Create a session in the database
    console.log("session created!", payload)
  }
})

export const POST = handler.POST
