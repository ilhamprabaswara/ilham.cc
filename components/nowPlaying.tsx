import Link from "next/link";
import useSWR from "swr";

export default function NowPlaying() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data: nowPlaying } = useSWR("/api/now-playing", fetcher);
  const { data: recentlyPlayed } = useSWR("/api/recently-played", fetcher);
  const checkPlay = () => {
    if (recentlyPlayed === undefined) {
      return "Undefined";
    } else {
      return recentlyPlayed;
    }
  };
  return (
    <div className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="mb-16">
        <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.6667 30.3334C43 24 25.1667 23.3334 15 26.5C13.3334 27 11.6667 26 11.1667 24.5C10.6667 22.8334 11.6667 21.1667 13.1667 20.6667C25 17.1667 44.5 17.8334 56.8334 25.1667C58.3334 26 58.8334 28 58 29.5C57.1667 30.6667 55.1667 31.1667 53.6667 30.3334ZM53.3333 39.6667C52.5 40.8334 51 41.3334 49.8334 40.5C40.8334 35 27.1667 33.3334 16.6667 36.6667C15.3334 37 13.8334 36.3334 13.5 35C13.1667 33.6667 13.8334 32.1667 15.1667 31.8334C27.3334 28.1667 42.3334 30 52.6667 36.3334C53.6667 36.8334 54.1667 38.5 53.3333 39.6667ZM49.3334 48.8334C48.6667 49.8334 47.5 50.1667 46.5 49.5C38.6667 44.6667 28.8334 43.6667 17.1667 46.3334C16 46.6667 15 45.8334 14.6667 44.8334C14.3334 43.6667 15.1667 42.6667 16.1667 42.3334C28.8334 39.5 39.8334 40.6667 48.5 46C49.6667 46.5 49.8334 47.8334 49.3334 48.8334ZM34 0.666687C29.6226 0.666687 25.2881 1.52888 21.2439 3.20404C17.1997 4.87919 13.5251 7.33451 10.4298 10.4298C4.17858 16.681 0.666687 25.1595 0.666687 34C0.666687 42.8406 4.17858 51.319 10.4298 57.5702C13.5251 60.6655 17.1997 63.1208 21.2439 64.796C25.2881 66.4712 29.6226 67.3334 34 67.3334C42.8406 67.3334 51.319 63.8215 57.5702 57.5702C63.8215 51.319 67.3334 42.8406 67.3334 34C67.3334 29.6226 66.4712 25.2881 64.796 21.2439C63.1208 17.1997 60.6655 13.5251 57.5702 10.4298C54.475 7.33451 50.8003 4.87919 46.7561 3.20404C42.7119 1.52888 38.3774 0.666687 34 0.666687Z"
            fill="#1ED760"
          />
        </svg>
      </div>

      <div className="flex gap-2 mb-3">
        {nowPlaying?.isPlaying ? (
          <div className="flex gap-[5px]">
            <div className="wave0" />
            <div className="wave1" />
            <div className="wave2" />
          </div>
        ) : null}
        <h1 className="text-green-500">
          {nowPlaying?.isPlaying ? "Now Playing" : "Offline. Last Played"}
        </h1>
      </div>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
        {nowPlaying?.isPlaying ? (
          <Link
            className="hover:text-[#1ed760] transition"
            href={nowPlaying.songUrl}
          >
            {nowPlaying.title}
          </Link>
        ) : (
          checkPlay().title
        )}
      </h5>
      <p className="font-normal text-gray-700">
        {nowPlaying?.isPlaying ? nowPlaying.artist : checkPlay().artist}
      </p>
    </div>
  );
}
