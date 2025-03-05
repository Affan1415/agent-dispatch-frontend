import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (!code) {
    return NextResponse.json({ error: "Authorization code is missing" }, { status: 400 });
  }

  // Exchange the authorization code for an access token
  

  return NextResponse.redirect(`${origin}/dashboard`); // Redirect user after authentication
}
