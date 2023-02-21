import Layout from "@/components/layout"
import NavBar from "@/components/navbar"
import useSWR from "swr"

export default function Contact() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/now-playing', fetcher);
    return (
        <Layout>
            <NavBar />
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                {console.log(data)}
                <h1 className="mb-2 text-green-500">{data?.isPlaying ? 'Now Playing' : 'Offline. Last Played'}</h1>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{data?.isPlaying ? data.title : 'Stop This Train'}</h5>
                <p class="font-normal text-gray-700">{data?.isPlaying ? data.artist : 'John Mayer'}</p>
            </div>

        </Layout>
    )
}