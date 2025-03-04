import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (!code) {
    return NextResponse.json({ error: "Authorization code is missing" }, { status: 400 });
  }

  // Exchange the authorization code for an access token
  const tokenResponse = await fetch("https://api.manychat.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.MANYCHAT_CLIENT_ID,
      client_secret: process.env.MANYCHAT_CLIENT_SECRET,
      redirect_uri: `${origin}/auth/callback`,
      code,
      grant_type: "authorization_code",
    }),
  });

  const tokenData = await tokenResponse.json();
  console.log("Access Token Response:", tokenData);

  if (!tokenResponse.ok) {
    return NextResponse.json({ error: "Failed to get access token", details: tokenData }, { status: 400 });
  }

  // Store the access token securely in your database
  // Example: Store it in Supabase (Assuming you have a 'users' table)
  // const supabase = await createClient();
  // const { data, error } = await supabase
  //   .from("users")
  //   .update({ manychat_access_token: tokenData.access_token })
  //   .match({ user_id: YOUR_USER_ID }); // Replace with the actual user ID

  // if (error) {
  //   return NextResponse.json({ error: "Failed to save access token", details: error }, { status: 500 });
  // }

  return NextResponse.redirect(`${origin}/dashboard`); // Redirect user after authentication
}
