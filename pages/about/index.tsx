import Layout from '@/components/layout';
import { projectItems } from '@/constants/projectItems';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <div className="mb-[50px] grid md:mb-[100px] md:items-center md:gap-20">
        <div className="max-w-[744px]">
          <h1 className="mb-[15px] text-2xl font-semibold text-slate-700 md:text-3xl">
            {/* <mark className="leading-[0em] inline-block pb-[0.5em] bg-blue-300 pr-1"> */}
            {/* Tech. Bikes. Foods. Music. */}
            Hi! I&apos;m Ilham.
            {/* </mark> */}
          </h1>
          <div className="mb-[30px] flex flex-col gap-[10px] md:mb-[50px]">
            <p className="text-sm leading-[1.6em] md:text-base">
              A <span className="text-blue-600">front-end</span> enthusiast from
              Indonesia. I create and build websites to communicate a feeling of
              joy and comfort that shall invite the user to come back.{' '}
            </p>
            <p className="text-sm leading-[1.6em] md:text-base">
              My current tech stack looks roughly like this at the moment:{' '}
              <span className="text-blue-600">
                HTML, TailwindCSS, ReactJS, JavaScript
              </span>
              , it&apos;s pretty awesome and flexible and a joy to work with.
              The development part is really important to me because I thereby
              constantly improve my skills and stay up-to-date with new methods
              and technology.
            </p>
            <p className="text-sm leading-[1.6em] md:text-base">
              When AFK, I often listen to music and do sports.
            </p>
          </div>

          <div className="social max-w-[192px]">
            <div className="grid gap-[15px]">
              <Link
                href="#"
                className="group flex items-center gap-[10px] transition hover:text-blue-600"
              >
                <svg
                  className="transition group-hover:fill-blue-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#334155"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                </svg>
                <span className="text-sm">Follow on Twitter</span>
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-[10px] transition hover:text-blue-600"
              >
                <svg
                  className="transition group-hover:fill-blue-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#334155"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" />
                </svg>
                <span className="text-sm">Follow on GitHub</span>
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-[10px] transition hover:text-blue-600"
              >
                <svg
                  className="transition group-hover:fill-blue-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#334155"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
                <span className="text-sm">Follow on LinkedIn</span>
              </Link>
            </div>
            <Link
              href="mailto:hello@ilham.xyz"
              className="group mt-[15px] flex items-center gap-[10px] border-t-[1px] pt-[15px] transition hover:text-blue-600"
            >
              <svg
                className="transition group-hover:fill-blue-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#334155"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" />
              </svg>
              <span className="text-sm">hello@ilham.xyz</span>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mb-[50px] md:mb-[100px]">
        <p className="mb-[30px] uppercase text-[11px] tracking-[2px] font-semibold">
          Strava
        </p>
        <StravaActivities />
      </div>
      <div className="mb-5">
        <p className="mb-[30px] uppercase text-[11px] tracking-[2px] font-semibold">
          Spotify
        </p>
        <NowPlaying />
      </div> */}
      <h1 className="leading[1.4em] text-xl font-medium">
        These are some things that I’ve recently built, enjoy.
      </h1>
      <div className="mt-[30px] mb-5 grid gap-10 md:grid-cols-3 md:gap-6">
        {projectItems.map(
          ({ imageSource, projectName, description, github, demo }, index) => (
            <div key={index} className="flex flex-col gap-[15px]">
              <div className="flex flex-col gap-[10px]">
                <Image
                  width={311}
                  height={208}
                  alt="featured-project"
                  className="rounded-lg"
                  src={imageSource}
                />
                <p className="font-semibold text-[#004DEB]">Featured Project</p>
              </div>
              <div>
                <h1 className="text-[28px] font-semibold">{projectName}</h1>
                <p className="text-sm leading-[1.6em]">{description}</p>
              </div>
              <div className="flex gap-[30px] font-semibold">
                <p>React</p>
                <p>Next.js</p>
                <p>Vercel</p>
              </div>
              <div className="flex gap-5">
                <Link target="_blank" href={github}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
                      fill="black"
                    />
                  </svg>
                </Link>
                <Link target="_blank" href={demo}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 3.75V6.25H21.9875L9.7 18.5375L11.4625 20.3L23.75 8.0125V12.5H26.25V3.75M23.75 23.75H6.25V6.25H15V3.75H6.25C5.58696 3.75 4.95107 4.01339 4.48223 4.48223C4.01339 4.95107 3.75 5.58696 3.75 6.25V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V15H23.75V23.75Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </Layout>
  );
}
