import { useEffect, useState } from "react";
import { map } from "lodash";
import { IOfferBannerProps } from "./types";

const initialCountDown = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
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
        hours: Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timer % (1000 * 60)) / 1000),
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
    <section className=" mt-12 mb-14 bg-[url(/placeholder/1920x623.png)] p-20">
      <div className=" max-w-6xl mx-auto grid grid-cols-2">
        <div className="pt-16 pb-16 relative px-4">
          <div>
            <h6 className="text-secondary font-rajdhani-sans">{title}</h6>
            <h1 className="text-primary font-josefin-sans">
              {subtitle1}
              <br />
              {subtitle2}
            </h1>
            <p className="font-{'Josefin Sans'|sans-serif}">
              {description1}
              <br />
              {description2}
            </p>
          </div>
          <div
            className="inline-block shadow mt-7 pt-6 pb-1 px-2
              box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28) p-0;
              box-shadow: none"
            data-countdown={offerEndDate}
          >
            {map(countDownObj, (value: number, key: string) => (
              <div className="inline-block mr-7 last:mr-0" key={key}>
                <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center bg-white text-secondary">
                  {value.toString().padStart(2, "0")}
                </h1>
                <p className="text-center text-lg text-primary capitalize">
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
