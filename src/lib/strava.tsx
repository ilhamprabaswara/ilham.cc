const client_id = process.env.STRAVA_CLIENT_ID as string
const client_secret = process.env.STRAVA_CLIENT_SECRET as string
const refresh_token = process.env.STRAVA_REFRESH_TOKEN as string

const getAccessToken = async () => {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    body: new URLSearchParams({
      client_id,
      client_secret,
      refresh_token,
      grant_type: 'refresh_token',
    }),
  })
  return response.json()
}

export const getActivities = async () => {
  const { access_token } = await getAccessToken()
  const response = await fetch(
    'https://www.strava.com/api/v3/athlete/activities?' +
      new URLSearchParams({
        page: '1',
        per_page: '45',
      }),
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )
  return response.json()
}
