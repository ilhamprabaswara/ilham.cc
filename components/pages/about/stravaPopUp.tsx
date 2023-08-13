import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

export default function StravaPopUp() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/workout-activity", fetcher);

  const card = useRouter()?.query?.id;
  const router = useRouter();
  const removeQuery = () => {
    const { pathname } = router;
    router.push({ pathname }, undefined, { scroll: false });
  };
  data.activity = data.activities.filter((i) => {
    if (i.id === Number(card)) {
      return i;
    }
  });
  console.log(data.activity);
  return (
    <>
      {card && (
        <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-secondary60 bg-opacity-50 z-[9999] overflow-hidden">
          <div className="relative bg-[#FFFFFF] h-[200px] w-[200px]">
            <button onClick={removeQuery}>Close</button>
            <h1 className=" text-[#212121]">{data.activity[0].name}</h1>
            <h1 className=" text-[#212121]">{data.activity[0].distance}</h1>
          </div>
        </div>
      )}
    </>
  );
}
