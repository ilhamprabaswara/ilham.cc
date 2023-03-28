import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import NowPlaying from "@/components/nowPlaying";
import StravaActivities from "@/components/stravaActivities";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <NavBar />
      <div className="grid mb-[50px] md:mb-[100px] md:items-center md:gap-20 md:grid-cols-[500px_1fr]">
        <div className="mb-5 md:mb-0">
          <img
            className="aspect-square md:h-[600px] object-cover rounded"
            src="/ilham-avatar-large.png"
          />
        </div>
        <div>
          <h1 className="text-slate-700 text-3xl font-semibold mb-6">
            <mark className="leading-[0em] inline-block pb-[0.5em] bg-blue-300 pr-1">
              {/* Tech. Bikes. Foods. Music. */}
              Hi! I'm Ilham.
            </mark>
          </h1>
          <p className="text-xl mb-5">
            A <span className="font-medium text-blue-600">front-end</span>{" "}
            enthusiast from Indonesia. I create and build websites to
            communicate a feeling of joy and comfort that shall invite the user
            to come back. One part here is the graphical work, but more
            interesting is the tech stack and the implementation behind it. My
            current tech stack looks roughly like this at the moment:{" "}
            <span className="font-medium text-blue-600">
              HTML, TailwindCSS, ReactJS, JavaScript
            </span>
            , it's pretty awesome and flexible and a joy to work with. The
            development part is really important to me because I thereby
            constantly improve my skills and stay up-to-date with new methods
            and technology. Moreover, it presents a good change to the design
            part. I often listen to music and do sports in my free time.
          </p>
          <div className="grid md:grid-cols-2 gap-[20px]">
            <Link
              href="#"
              className="group flex gap-3 hover:text-blue-600 transition"
            >
              <svg
                className="group-hover:fill-blue-600 transition"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#334155"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
              </svg>
              <span>Follow on Twitter</span>
            </Link>
            <Link
              href="#"
              className="group flex gap-3 hover:text-blue-600 transition"
            >
              <svg
                className="group-hover:fill-blue-600 transition"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#334155"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" />
              </svg>
              <span>Follow on GitHub</span>
            </Link>
            <Link
              href="#"
              className="group flex gap-3 hover:text-blue-600 transition"
            >
              <svg
                className="group-hover:fill-blue-600 transition"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#334155"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
              <span>Follow on LinkedIn</span>
            </Link>
          </div>
          <Link
            href="mailto:hello@ilham.xyz"
            className="group flex gap-3 hover:text-blue-600 mt-5 pt-5 border-t-[1px] transition"
          >
            <svg
              className="group-hover:fill-blue-600 transition"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#334155"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" />
            </svg>
            <span>hello@ilham.xyz</span>
          </Link>
        </div>
      </div>
      <div className="mb-[50px] md:mb-[100px]">
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
      </div>
    </Layout>
  );
}
