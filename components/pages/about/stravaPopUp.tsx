import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function StravaPopUp() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/workout-activity", fetcher);

  const card = useRouter()?.query?.id;
  const router = useRouter();
  const removeQuery = () => {
    const { pathname } = router;
    router.push({ pathname }, undefined, { scroll: false });
  };
  console.log(data)
  useEffect(() => {
    if (data && card) {
      const index = data.activities.findIndex(
        (activity) => activity.id === Number(card)
      );
      setCurrentIndex(index !== -1 ? index : null);
    }
  }, [data, card]);
  useEffect(() => {
    if (currentIndex !== null) {
      router.push(
        {
          query: { ...router.query, id: currentActivity.id },
        },
        undefined,
        { scroll: false }
      );
    }
  }, [currentIndex]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.activities.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + data.activities.length) % data.activities.length
    );
  };
  const currentActivity = data.activities[currentIndex];
  return (
    <>
      {card && currentActivity && (
        <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-secondary60 bg-opacity-50 z-[9999] overflow-hidden">
          <div className="relative transition-all duration-1000 bg-[#FFFFFF] h-[200px] w-[200px]">
            <button onClick={removeQuery}>Close</button>
            <h1 className=" text-[#212121]">{currentActivity.name}</h1>
            <h1 className=" text-[#212121]">{currentActivity.distance}</h1>
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
