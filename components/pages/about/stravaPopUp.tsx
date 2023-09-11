import Map from '@/components/map';
import { decodePolyline } from '@/utils/decodePolyline';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function StravaPopUp() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR('/api/workout-activity', fetcher);

  const cardId = useRouter()?.query?.id;
  const router = useRouter();
  const removeQuery = () => {
    const { pathname } = router;
    router.push({ pathname }, undefined, { scroll: false });
  };
  useEffect(() => {
    if (data && cardId) {
      const index = data.activities.findIndex(
        (activity) => activity.id === Number(cardId)
      );
      setCurrentIndex(index !== -1 ? index : null);
    }
  }, [data, cardId]);
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
      {cardId && currentActivity && (
        <div className="bg-secondary60 fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden bg-opacity-50">
          <div className="relative w-96 animate-[append-animate_.2s_linear] bg-[#FFFFFF]">
            <button onClick={removeQuery}>Close</button>
            <h1 className=" text-[#212121]">{currentActivity.name}</h1>
            {/* <Map
              coordinate={decodePolyline(
                currentActivity?.map.summary_polyline,
                100000
              )}
            /> */}
            <h1 className="text-[#212121]">
              {(currentActivity.distance / 1000).toFixed(2)} km
            </h1>
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
