import React from "react";
import useSWR from "swr";
import Map from "./map";
import Date from "./date";

export default function StravaActivities() {
  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }
  function decode(encoded, mul) {
    //precision
    var inv = 1.0 / mul;
    var decoded = [];
    var previous = [0, 0];
    var i = 0;
    //for each byte
    while (i < encoded.length) {
      //for each coord (lat, lon)
      var ll = [0, 0];
      for (var j = 0; j < 2; j++) {
        var shift = 0;
        var byte = 0x20;
        //keep decoding bytes until you have this coord
        while (byte >= 0x20) {
          byte = encoded.charCodeAt(i++) - 63;
          ll[j] |= (byte & 0x1f) << shift;
          shift += 5;
        }
        //add previous offset to get final value and remember for next one
        ll[j] = previous[j] + (ll[j] & 1 ? ~(ll[j] >> 1) : ll[j] >> 1);
        previous[j] = ll[j];
      }
      //scale by precision and chop off long coords also flip the positions so
      //its the far more standard lon,lat instead of lat,lon
      decoded.push([ll[1] * inv, ll[0] * inv]);
    }
    //hand back the list of coordinates
    return decoded;
  }
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR("/api/workout-activity", fetcher);
  if (error) return <div>Failed to load users</div>;
  if (isLoading)
    return (
      <div
        role="status"
        className="max-w-sm p-6 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-4"></div>
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-12 h-12 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mx-auto"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mb-6 mx-auto"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mx-auto"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mx-auto"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  if (!data) return null;

  return (
    <div className="grid md:grid-cols-3 md:gap-3">
      {data.activities.slice(0, 6).map((activity) => (
        <div
          key={activity.id}
          className="mb-5 py-6 overflow-hidden block max-w-sm bg-white border border-gray-200 rounded-lg shadow text-center"
        >
          <h5 className="text-left ml-6 text-2xl font-bold tracking-tight text-gray-900">
            {activity.name}
          </h5>
          <div className="text-left ml-6 mb-5">
            <Date dateString={activity.start_date.substring(0, 10)} />
          </div>
          <Map coordinate={decode(activity.map.summary_polyline, 100000)} />
          <h5 className=" text-xl font-bold tracking-tight text-gray-900">{`${(
            activity.distance / 1000
          ).toFixed(2)} km`}</h5>
          <p className="text-slate-400 text-sm mb-5">DISTANCE</p>
          <h5 className="text-xl font-bold tracking-tight text-gray-900">
            {secondsToHms(activity.moving_time)}
          </h5>
          <p className="text-slate-400 text-sm">MOVING TIME</p>
        </div>
      ))}
    </div>
  );
}
