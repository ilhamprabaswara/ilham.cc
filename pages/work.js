import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Work() {
  return (
    <Layout>
      <h1 className="leading[1.4em] text-xl font-medium">
        These are some things that I’ve recently built, enjoy.
      </h1>
      <div className="grid gap-10 mt-[30px] md:grid-cols-3 md:gap-6">
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[10px]">
            <img src="/img/work/movie-list.png" />
            <p className="font-semibold text-[#004DEB]">Featured Project</p>
          </div>
          <div>
            <h1 className="font-semibold text-[28px]">Movie List</h1>
            <p className="text-sm leading-[1.6em]">
              Lorem ipsum dolor sit amet consectetur. Lacus ornare blandit urna
              ut sed. Aliquam lorem commodo augue dignissim arcu nulla tellus
              donec.
            </p>
          </div>
          <div className="flex gap-[30px] font-semibold">
            <p>React</p>
            <p>Next.js</p>
            <p>Vercel</p>
          </div>
          <div className="flex gap-5">
            <Link target="_blank" href={`https://github.com/ilhamprabaswara`}>
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
            <Link target="_blank" href={`https://react-movies21.netlify.app/`}>
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
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[10px]">
            <img className="rounded-lg" src="/img/work/vakanzie.png" />
            <p className="font-semibold text-[#004DEB]">Featured Project</p>
          </div>
          <div>
            <h1 className="font-semibold text-[28px]">Vakanzie</h1>
            <p className="text-sm leading-[1.6em]">
              Lorem ipsum dolor sit amet consectetur. Lacus ornare blandit urna
              ut sed. Aliquam lorem commodo augue dignissim arcu nulla tellus
              donec.
            </p>
          </div>
          <div className="flex gap-[30px] font-semibold">
            <p>React</p>
            <p>Next.js</p>
            <p>Vercel</p>
          </div>
          <div className="flex gap-5">
            <Link target="_blank" href={`https://github.com/ilhamprabaswara`}>
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
            <Link target="_blank" href={`https://vakanzie.vercel.app`}>
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
      </div>
    </Layout>
  );
}
