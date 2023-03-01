const client_id = process.env.STRAVA_CLIENT_ID;
const client_secret = process.env.STRAVA_CLIENT_SECRET;
const refresh_token = process.env.STRAVA_REFRESH_TOKEN;

const getAccessToken = async () => {
  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    body: new URLSearchParams({
      client_id,
      client_secret,
      refresh_token,
      grant_type: "refresh_token"
    })
  });
  return response.json();
};

export const getActivities = async () => {
  const { access_token } = await getAccessToken();
  return fetch("https://www.strava.com/api/v3/athlete/activities", {
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  });
};