// import React, { useEffect } from 'react';
// import useSWR from 'swr';
// import Map from '../../map';
// import Date from '../../date';
// import StravaPopUp from './stravaPopUp';
// import { useRouter } from 'next/router';
// import { decodePolyline } from '@/utils/decodePolyline';

// export default function StravaActivities() {
//   const router = useRouter();
//   const id = useRouter()?.query?.id;
//   useEffect(() => {
//     if (id !== undefined) {
//       document.body.style.overflow = 'hidden';
//       document.body.style.paddingRight = '17px';
//     } else {
//       document.body.style.overflow = 'scroll';
//       document.body.style.paddingRight = '0';
//     }
//   }, [id]);
//   function secondsToHms(d) {
//     d = Number(d);
//     var h = Math.floor(d / 3600);
//     var m = Math.floor((d % 3600) / 60);
//     var s = Math.floor((d % 3600) % 60);

//     var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
//     var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
//     var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
//     return hDisplay + mDisplay + sDisplay;
//   }

//   const fetcher = (url) => fetch(url).then((r) => r.json());
//   const { data, error, isLoading } = useSWR('/api/workout-activity', fetcher);
//   if (error) return <div>Failed to load users</div>;
//   if (isLoading)
//     return (
//       <div
//         role="status"
//         className="max-w-sm animate-pulse rounded border border-gray-200 p-6 shadow dark:border-gray-700 md:p-6"
//       >
//         <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//         <div className="mb-4 h-2.5 w-36 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//         <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
//           <svg
//             className="h-12 w-12 text-gray-200 dark:text-gray-600"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 640 512"
//           >
//             <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
//           </svg>
//         </div>
//         <div className="mx-auto mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//         <div className="mx-auto mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//         <div className="mx-auto mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//         <div className="mx-auto h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//         <span className="sr-only">Loading...</span>
//       </div>
//     );
//   if (!data) return null;

//   return (
//     <>
//       <section>
//         <h2 className="mb-5 text-[11px] font-semibold uppercase leading-[1.6em] tracking-[2px]">
//           Strava
//         </h2>
//         <div className="grid md:grid-cols-3 md:gap-3">
//           {data.activities.slice(0, 6).map((activity) => (
//             <button
//               key={activity.id}
//               onClick={() =>
//                 // setShowModal(true)
//                 router.push(
//                   {
//                     query: { ...router.query, id: activity.id },
//                   },
//                   undefined,
//                   { scroll: false }
//                 )
//               }
//             >
//               <div className="mb-5 block max-w-sm overflow-hidden rounded-xl bg-[#FFFFFF] py-6 text-center shadow">
//                 <h5 className="ml-6 text-left text-2xl font-bold tracking-tight text-gray-900">
//                   {activity.name}
//                 </h5>
//                 <div className="ml-6 mb-5 text-left">
//                   <Date dateString={activity.start_date.substring(0, 10)} />
//                 </div>
//                 <Map
//                   coordinate={decodePolyline(
//                     activity.map.summary_polyline,
//                     100000
//                   )}
//                 />
//                 <div className="px-4">
//                   <h5 className=" text-xl font-bold tracking-tight text-gray-900">{`${(
//                     activity.distance / 1000
//                   ).toFixed(2)} km`}</h5>
//                   <p className="mb-5 text-sm text-slate-400">DISTANCE</p>
//                   <h5 className="text-xl font-bold tracking-tight text-gray-900">
//                     {secondsToHms(activity.moving_time)}
//                   </h5>
//                   <p className="text-sm text-slate-400">MOVING TIME</p>
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>
//       </section>
//       <StravaPopUp />
//     </>
//   );
// }
