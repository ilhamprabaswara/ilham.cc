import { getActivities } from '@/lib/strava'
import ActivityCard from './_components/card'

const ActivitiesPage = async () => {
  const activityList = await getActivities()

  return (
    <div className="mx-auto flex max-w-[1128px] flex-col justify-center">
      <h1 className="mb-[30px] text-[20px] font-bold">Activities</h1>
      <ul className="grid gap-[25px] md:grid-cols-3">
        {activityList.map((res: IStravaActivity) => {
          return (
            <li
              key={res.id}
              className="overflow-clip rounded-xl bg-white dark:bg-sys-dark-surface-container"
            >
              <ActivityCard data={res} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ActivitiesPage
