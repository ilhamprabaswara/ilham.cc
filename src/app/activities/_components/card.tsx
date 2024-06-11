import { ExternalLinkIcon } from '@/components/ui/icons/externalLinkIcon'
import { decodePolyline, encodeCoords } from '@/utils/decodePolyline'
import Image from 'next/image'
import Link from 'next/link'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN as string

const ActivityCard = ({ data }: { data: IStravaActivity }) => {
  const pathImage = (polyline: string): string => {
    return `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/path-3+ff9500(${encodeURIComponent(
      encodeCoords(decodePolyline(polyline, 100000))
    )})/auto/360x360@2x?padding=50&access_token=${mapboxToken}`
  }

  const MapImage = ({ polyline }: { polyline: string }) => {
    if (polyline) {
      return (
        <Image
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="image"
          src={pathImage(polyline)}
          fill
          style={{ objectFit: 'cover' }}
        />
      )
    } else {
      return <Image alt="" src={'/images/wave.png'} fill />
    }
  }
  const ActivityCard = ({ sport_type }: any) => {
    const calculateRidingSpeed = (
      distanceInMeters: number,
      timeInSeconds: number
    ) => {
      // {(data.average_speed * 3.6).toFixed(1)} km/h
      const distanceInKilometers = distanceInMeters / 1000
      const timeInHours = timeInSeconds / 3600
      const avgSpeed = distanceInKilometers / timeInHours
      return avgSpeed.toFixed(1) + ' km/h'
    }
    function calculateRunningPace(
      distanceInMeters: number,
      timeInSeconds: number
    ): string {
      if (distanceInMeters <= 0 || timeInSeconds <= 0) {
        throw new Error('Distance and time must be greater than zero')
      }

      const timeInMinutes = timeInSeconds / 60
      const distanceInKilometers = distanceInMeters / 1000

      const paceInMinutesPerKm = timeInMinutes / distanceInKilometers

      const minutes = Math.floor(paceInMinutesPerKm)
      const seconds = Math.round((paceInMinutesPerKm - minutes) * 60)

      const formattedPace = `${minutes}:${seconds
        .toString()
        .padStart(2, '0')} /km`

      return formattedPace
    }

    function calculateSwimmingPace(
      distanceInMeters: number,
      timeInSeconds: number
    ): string {
      if (distanceInMeters <= 0 || timeInSeconds <= 0) {
        throw new Error('Distance and time must be greater than zero')
      }

      const timeInMinutes = timeInSeconds / 60
      const pacePer100MetersInMinutes = (timeInMinutes / distanceInMeters) * 100

      const minutes = Math.floor(pacePer100MetersInMinutes)
      const seconds = Math.round((pacePer100MetersInMinutes - minutes) * 60)

      const formattedPace = `${minutes}:${seconds
        .toString()
        .padStart(2, '0')} /100m`

      return formattedPace
    }
    const col2Label = (
      sport_type: 'Run' | 'Ride' | 'Walk' | 'VirtualRide' | 'Swim'
    ) => {
      if (sport_type === 'Ride') {
        return 'Avg Speed'
      } else {
        return 'Avg Pace'
      }
    }
    const col2Value = (
      sport_type: 'Run' | 'Ride' | 'Walk' | 'VirtualRide' | 'Swim',
      distance: number,
      moving_time: number
    ) => {
      if (sport_type === 'Run') {
        return calculateRunningPace(distance, moving_time)
      } else if (sport_type === 'Swim') {
        return calculateSwimmingPace(distance, moving_time)
      } else if (sport_type === 'Ride' || sport_type === 'VirtualRide') {
        return calculateRidingSpeed(distance, moving_time)
      }
    }
    return (
      <div>
        <div className="relative h-[300px] w-full">
          <MapImage polyline={data.map.summary_polyline} />
        </div>
        <div className="px-4 py-[15px]">
          <div className="flex justify-between gap-2">
            <h2 className="mb-2.5 font-bold">{data.name}</h2>
            <Link href={`https://www.strava.com/activities/${data.id}`}>
              <ExternalLinkIcon className="fill-black dark:fill-white" />
            </Link>
          </div>
          <div className="flex gap-[25px]">
            <div>
              <h3 className="text-[11px]">Distance</h3>
              <h4 className="font-semibold">
                {(data.distance / 1000).toFixed(2)} km
              </h4>
            </div>
            {data.sport_type !== 'Walk' && (
              <div>
                <h3 className="text-[11px]">{col2Label(data.sport_type)}</h3>
                <h4 className="font-semibold">
                  {col2Value(data.sport_type, data.distance, data.moving_time)}
                </h4>
              </div>
            )}
            <div>
              <h3 className="text-[11px]">Elev Gain</h3>
              <h4 className="font-semibold">{data.total_elevation_gain} m</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <ActivityCard />
}

export default ActivityCard
