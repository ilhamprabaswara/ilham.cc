/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAVA_CLIENT_ID: process.env.STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET: process.env.STRAVA_CLIENT_SECRET,
    STRAVA_REFRESH_TOKEN: process.env.STRAVA_REFRESH_TOKEN,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mapbox.com',
        port: '',
        pathname: '/styles/**',
      },
    ],
  },
}

module.exports = nextConfig
