import React from "react";
import Button from "./Button";

const Footer = () => {
  const ResourceList = [
    {
      label: "Learn Center",
    },
    {
      label: "Support",
    },
    {
      label: "Slack Community",
    },
    {
      label: "Events",
    },
    {
      label: "Cookies",
    },
    {
      label: "Terms of Service",
    },
    {
      label: "Privacy Policy",
    },
  ];

  const ProductList = [
    {
      label: "How it works",
    },
    {
      label: "Features",
    },
    {
      label: "Pricing",
    },
    {
      label: "Tools & Integration",
    },
    {
      label: "Start for Free",
    },
    {
      label: "Sign In",
    },
  ];

  const AboutList = [
    {
      label: "Our Story",
    },
    {
      label: "Media Kit",
    },
    {
      label: "Blog",
    },
    {
      label: "Email us",
    },
  ];
  return (
    <footer className="bg-white pb-2 mt-24">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-10 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className="flex flex-col justify-center gap-3 items-start list pe-8">
            <h2 className="">Eatly</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Gain new customers with our brand new aquisition funnels.
            </p>
            <button className="text-[#670127] font-semibold ">Read more</button>
          </div>

          <div className="list">
            <h2 className="">Resources</h2>
            <ul className="text-gray-500 dark:text-gray-400">
              {ResourceList.map((link, index) => (
                <li key={index} className="mb-4">
                  <a href="#" className=" hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="list">
            <h2 className="">Product</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {ProductList.map((link, index) => (
                <li key={index} className="mb-4">
                  <a href="#" className=" hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="list">
            <h2 className="">About</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {AboutList.map((link, index) => (
                <li key={index} className="mb-4">
                  <a href="#" className=" hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <div className="inline-flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a
              href="#"
              className="text-[#670127] inline-flex"
            >
              <svg
                width="23"
                height="25"
                viewBox="0 0 47 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.179984 24.0794C-2.03627 42.2998 16.6832 54.7232 31.6668 48.2741C31.3008 48.1188 26.6331 47.298 24.388 46.5725C18.7331 44.7467 11.3345 40.2698 8.77214 35.753C9.37778 36.0437 10.5092 37.0797 11.1503 37.5744C16.2639 41.5188 25.3042 45.2925 31.5514 46.1244C30.7794 38.342 25.6547 32.1103 21.5084 28.9867C15.4764 24.4388 9.54195 22.8837 0.179984 24.0794ZM38.9212 30.7703C39.498 30.6683 39.1719 30.6505 39.305 30.9301C38.3311 32.8845 33.4083 36.5273 31.0834 37.9848C31.3584 39.2028 32.1682 40.7779 32.603 42.3086C33.0068 43.7373 33.1865 45.8116 33.5814 47.0362C34.1471 47.2802 34.4288 47.0539 35.2208 46.5637C42.5928 41.9825 47.2494 33.4347 46.118 24.1881C39.0521 21.8365 28.4012 25.619 24.683 29.1531C25.2133 30.1847 28.0751 32.4852 30.1627 36.3742C32.3878 35.7619 37.2285 31.7731 38.9212 30.7703ZM26.7351 9.02262C26.8372 7.3632 28.6408 1.85472 28.1527 0.823132C26.0585 1.31342 22.5045 12.9227 27.5471 15.0169C27.5027 16.7185 26.6375 19.0967 26.2382 20.856C25.8766 22.4466 25.0558 24.8093 24.9581 26.3267L28.2836 24.5386L29.821 15.6159C32.6807 15.1057 33.8897 13.1823 34.6884 10.5977C35.2386 8.8163 35.6845 6.07205 35.6667 4.05545C35.6578 2.98171 35.7599 2.67112 35.0056 2.34722C34.2802 3.5807 33.6945 8.60554 33.0267 10.5112L32.0417 10.3116C31.933 9.46409 32.3989 8.01099 32.583 7.10585C32.8981 5.55958 33.6568 2.8486 33.3839 1.71274C32.0528 1.46427 32.1194 2.06326 31.9308 3.19246L30.8903 8.08198C30.6308 9.27109 30.8637 9.66376 29.9253 9.99431C28.9869 9.49737 29.4439 9.06699 29.6569 7.9755C30.0407 6.00327 31.5869 1.22911 30.3313 1.02058C29.3463 0.856409 28.9359 4.40597 28.7961 5.14472C28.5454 6.4625 28.3435 8.70981 27.4517 9.53508L26.7329 9.02484L26.7351 9.02262ZM19.0858 14.6243C19.8068 13.7324 21.0758 13.3087 21.7702 10.8684C23.3741 5.22681 19.2345 -1.2578 14.1941 0.208614C11.2701 1.05829 9.67728 4.95615 10.5026 8.71647C11.3012 12.3592 13.1558 14.3159 16.8097 14.9859L18.478 24.7605C19.605 25.2175 20.712 26.0938 21.9565 26.3378L19.0836 14.6265L19.0858 14.6243Z"
                  fill="currentColor"
                />
              </svg>
              <span>
                <h1 className="uppercase font-extrabold text-xs">enkqaay</h1>
                <svg
                  width="61"
                  height="7"
                  viewBox="0 0 124 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M10.4131 2.94974V0.771195H0.201477V14.7587H2.79931V9.40328H9.55235V7.20477H2.79931V2.94974H10.4131ZM32.0743 14.9583C36.4092 14.9583 39.6083 11.9213 39.6083 7.76605C39.6083 3.60862 36.4114 0.57375 32.0743 0.57375C27.7394 0.57375 24.5404 3.63081 24.5404 7.76605C24.5404 11.9013 27.7372 14.9583 32.0743 14.9583ZM32.0743 12.68C29.2569 12.68 27.1582 10.6212 27.1582 7.76383C27.1582 4.90643 29.2569 2.84769 32.0743 2.84769C34.8918 2.84769 36.9905 4.90643 36.9905 7.76383C36.9905 10.6212 34.8918 12.68 32.0743 12.68ZM61.6688 14.9583C66.0037 14.9583 69.2027 11.9213 69.2027 7.76605C69.2027 3.60862 66.0059 0.57375 61.6688 0.57375C57.3339 0.57375 54.1348 3.63081 54.1348 7.76605C54.1348 11.9013 57.3316 14.9583 61.6688 14.9583ZM61.6688 12.68C58.8513 12.68 56.7526 10.6212 56.7526 7.76383C56.7526 4.90643 58.8513 2.84769 61.6688 2.84769C64.4862 2.84769 66.5849 4.90643 66.5849 7.76383C66.5849 10.6212 64.4862 12.68 61.6688 12.68ZM84.7298 14.7587H90.8439C95.3785 14.7587 98.4777 11.9612 98.4777 7.76605C98.4777 3.56869 95.3807 0.773412 90.8439 0.773412H84.7298V14.7609V14.7587ZM87.3277 12.5602V2.9697H90.7241C93.8411 2.9697 95.8599 4.86872 95.8599 7.76605C95.8599 10.6634 93.8411 12.5624 90.7241 12.5624H87.3277V12.5602ZM118.342 14.9583C122.178 14.9583 123.997 13.0394 123.997 10.7987C123.997 5.66959 115.704 7.60853 115.704 4.63134C115.704 3.56869 116.583 2.73011 118.741 2.73011C119.959 2.73011 121.339 3.0895 122.597 3.82825L123.416 1.80944C122.198 1.01079 120.438 0.571533 118.759 0.571533C114.923 0.571533 113.124 2.49051 113.124 4.75114C113.124 9.94015 121.437 7.96571 121.437 10.9828C121.437 12.0211 120.518 12.802 118.34 12.802C116.62 12.802 114.843 12.1631 113.725 11.2646L112.827 13.2834C113.985 14.2817 116.163 14.9628 118.342 14.9628V14.9583Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
          </div>

          <ul className="flex md:flex-row flex-col gap-5 text-sm text-gray-500 ">
            <li>
              <a href="#">Terms of Services </a>
            </li>
            <li>
              <a href="#">Privacy Policy </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
