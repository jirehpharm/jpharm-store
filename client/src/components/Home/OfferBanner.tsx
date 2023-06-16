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
  subtitle1,
  subtitle2,
  description1,
  description2,
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
    <section className=" mt-12 mb-14 bg-[url(img/Banner/offerbanner.png)] p-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2">
        <div>
          <div>
            <h6 className="text-secondary font-rajdhani-sans">{title}</h6>
            <h1 className="text-primary text-5xl font-josefin-sans">
              {subtitle1}
              <br />
              {subtitle2}
            </h1>
            <p className=" text-light">
              {description1}
              <br />
              {description2}
            </p>
          </div>
          <div
            className="inline-block mt-2 pt-6 pb-1 px-2"
            data-countdown={offerEndDate}
          >
            {map(countDownObj, (value: number, key: string) => (
              <div className="inline-block mr-7 last:mr-0 " key={key}>
                <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center bg-white text-secondary shadow">
                  {value.toString().padStart(2, "0")}
                </h1>
                <p className="text-center text-lg text-light capitalize ">
                  {key}
                </p>
              </div>
            ))}
          </div>
          <div className="btn-wrapper mt-5">
            <a href="/contact" className="btn">
              Book Now
            </a>
            <a href="#" className="">
              Deal of The Day
            </a>
          </div>
          <div className="relative px-4"></div>
        </div>
      </div>
    </section>
  );
}
