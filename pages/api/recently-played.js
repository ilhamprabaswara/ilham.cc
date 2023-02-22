import { recentlyPlayed } from "@/lib/spotify";
export default async (_, res) => {
    const response = await recentlyPlayed();
    const songs = await response.json();
    const title = songs.items[0].track.name
    const artist = songs.items[0].track.artists.map((_artist) => _artist.name).join(", ");
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=60, stale-while-revalidate=30"
    );

    return res.status(200).json({
        artist,
        title,
    })
}