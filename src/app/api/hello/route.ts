import { NextResponse } from "next/server";
import { clerkClient } from '@clerk/nextjs';

export async function GET(req: Request) {
  const authStatus = await clerkClient.authenticateRequest({ request: req });
  const auth = authStatus.toAuth()
  const userid = auth?.sessionClaims?.sub
  var user = await clerkClient.users.getUser(userid as string);
  console.log(user)
  // console.log(req.headers)
  // Your code logic here
  return NextResponse.json({
    "message": "Hello, world!"
  })
}