import { useEffect, useState } from "react";
import { map } from "lodash";
import { IOfferBannerProps } from "./types";

const initialCountDown = {
  days: 0,
  hrs: 0,
  mins: 0,
  secs: 0,
};

export default function OfferBanner({
  offerEndDate,
  title,
  subtitle,
  description,
  image,
}: IOfferBannerProps) {
  const [countDownObj, setCountDownObj] = useState<{ [key: string]: number }>(
    initialCountDown
  );

  useEffect(() => {
    const countdownDate = new Date(`${offerEndDate}`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timer = countdownDate - now;

      setCountDownObj({
        days: Math.floor(timer / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((timer % (1000 * 60)) / 1000),
      });

      if (timer < 0) {
        clearInterval(interval);
        setCountDownObj(initialCountDown);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [offerEndDate]);

  return (
    <section className="mt-12 mb-14">
      <div
        className="py-16 lg:py-28 px-3 bg-auto"
        style={{
          background: `url(${image})`,
          backgroundSize: `auto 100%`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className=" lg:max-w-6xl mx-auto lg:grid grid-cols-2 px-3">
          <div>
            <div>
              <h6 className="text-secondary font-nunito text-sm lg:text-base">
                {title}
              </h6>
              <h1 className="max-w-xs md:max-w-xs text-primary text-2xl lg:text-3xl font-josefin">
                {subtitle}
              </h1>
              <p className="max-w-md md:max-w-md text-light text-sm lg:text-base font-josefin">
                {description}
              </p>
            </div>
            <div
              className="flex flex-wrap mt-2 pt-6 pb-1 lg:px-2"
              data-countdown={offerEndDate}
            >
              {map(countDownObj, (value: number, key: string) => (
                <div className=" mr-7 last:mr-0 " key={key}>
                  <h1 className="h-12 w-14 py-2 text-2xl leading-10 mb-1 text-center bg-white text-secondary shadow">
                    {value.toString().padStart(2, "0")}
                  </h1>
                  <p className="text-center text-sm lg:text-lg text-light capitalize ">
                    {key}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <a href="/contact" className="btn block">
                Book Now
              </a>
              <a href="#" className="text-md block pt-6 sm:pt-0 sm:inline">
                Deal of The Day
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
