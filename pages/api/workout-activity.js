import { getActivities } from "lib/strava";

export default async (_, res) => {
    const response = await getActivities();
    const activities = await response.json()
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=60, stale-while-revalidate=30"
    );
    return res.status(200).json({
        activities
    })
}