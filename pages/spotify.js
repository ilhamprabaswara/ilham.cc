import Layout from "@/components/layout"
import NavBar from "@/components/navbar"
import useSWR from "swr"

export default function Contact() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data: nowPlaying } = useSWR('/api/now-playing', fetcher);
    const { data: recentlyPlayed } = useSWR('/api/recently-played', fetcher);
    const checkPlay = () => {
        if (recentlyPlayed === undefined) {
            return "Undefined"
        } else {
            return recentlyPlayed
        }
    }
    return (
        <Layout>
            <NavBar />
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex gap-2 mb-3">
                    {nowPlaying?.isPlaying ?
                        <div className="flex gap-[5px]">
                            <div class="wave0" />
                            <div class="wave1" />
                            <div class="wave2" />
                        </div>
                        :
                        null
                    }
                    <h1 className="text-green-500">{nowPlaying?.isPlaying ? 'Now Playing' : 'Offline. Last Played'}</h1>
                </div>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{nowPlaying?.isPlaying ? nowPlaying.title : checkPlay().title}</h5>
                <p class="font-normal text-gray-700">{nowPlaying?.isPlaying ? nowPlaying.artist : checkPlay().artist}</p>
            </div>

        </Layout>
    )
}