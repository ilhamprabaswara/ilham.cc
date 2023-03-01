import React, { useRef, useEffect, useState } from 'react';
import useSWR from "swr"
import Map from './map';

export default function StravaActivities() {
    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

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
            var ll = [0, 0]
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
                ll[j] = previous[j] + (ll[j] & 1 ? ~(ll[j] >> 1) : (ll[j] >> 1));
                previous[j] = ll[j];
            }
            //scale by precision and chop off long coords also flip the positions so
            //its the far more standard lon,lat instead of lat,lon
            decoded.push([ll[1] * inv, ll[0] * inv]);
        }
        //hand back the list of coordinates
        return decoded;
    };
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data, error, isLoading } = useSWR('/api/workout-activity', fetcher);
    if (error) return <div>Failed to load users</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    return (
        data.activities.slice(0, 5).map((activity) => (
            <div key={activity.id} className="mb-5 pb-6 overflow-hidden block max-w-sm bg-white border border-gray-200 rounded-lg shadow text-center">
                <Map coordinate={decode(activity.map.summary_polyline, 100000)} />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{activity.name}</h5>
                <p className="text-slate-400 text-sm mb-5">{activity.start_date.substring(0, 10)}</p>
                <h5 className=" text-xl font-bold tracking-tight text-gray-900">{`${(activity.distance / 1000).toFixed(2)} km`}</h5>
                <p className="text-slate-400 text-sm mb-5">DISTANCE</p>
                <h5 className="text-xl font-bold tracking-tight text-gray-900">{secondsToHms(activity.moving_time)}</h5>
                <p className="text-slate-400 text-sm">MOVING TIME</p>
            </div>
        ))
    )

}