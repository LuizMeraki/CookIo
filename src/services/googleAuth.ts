export function redirectUserToGoogleAuth() {
  const scopes = {
    profile: 'https://www.googleapis.com/auth/userinfo.profile',
    email: 'https://www.googleapis.com/auth/userinfo.email',
  };

  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    redirect_uri: 'http://localhost:3000/redirect',
    response_type: 'token',
    scope: `${scopes.profile} ${scopes.email}`,
  });

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}
