//import { min } from "lodash";
import { useEffect, useState } from "react";

export default function OfferBanner({ OfferEndDate = "2023-06-20", image="/placeholder/1920x623.png", heading="Todays Hot Offer",subHead1="Free Covid-19 Vaccine" ,subHead2="Campaign Ticket", description1="Cur tantas regiones barbarorum obiit, tot maria transmist", description2="summo bono fruitur id est voluptate barbarorum" }) {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
      const countdownDate = new Date(`${OfferEndDate}`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timer = countdownDate - now;

      const days = Math.floor(timer / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timer % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (timer < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section className={`mt-12 mb-14 bg-[url(${image})]`}>
        <div className=" max-w-6xl mx-auto grid grid-cols-2">
          <div className="pt-16 pb-16 relative px-4">
            <div>
              <h6 className="text-secondary font-rajdhani-sans">
                {heading}
              </h6>
              <h1 className="text-primary font-josefin-sans">
                {subHead1}
                <br />
                {subHead2}
              </h1>
              <p className="font-{'Josefin Sans'|sans-serif}">
                {description1}<br />
                {description2}
              </p>
            </div>
            <div
              className="inline-block shadow mt-7 pt-6 pb-1 px-2
              box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28) p-0;
              box-shadow: none"
              data-countdown="2023/06/09"
            >
              <div className="inline-block mr-7 last:mr-0">
                <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center bg-white text-secondary">
                  {days.toString().padStart(2, "0")}
                </h1>
                <p className="text-center text-lg text-primary">Days</p>
              </div>
               <div className="inline-block mr-7 last:mr-0">
                <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center bg-white text-secondary">
                  {hours.toString().padStart(2, "0")}
                </h1>
                <p className="text-center text-lg text-primary">Hrs</p>
              </div>
              <div className="inline-block mr-7 last:mr-0">
                <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center bg-white text-secondary">
                  {minutes.toString().padStart(2, "0")}
                </h1>
                <p className="text-center text-lg text-primary">Mins</p>
              </div>
              <div className="inline-block mr-7 last:mr-0">
                <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center bg-white text-secondary">
                  {seconds.toString().padStart(2, "0")}
                </h1>
                <p className="text-center text-lg text-primary">Secs</p>
              </div>
            </div>
            <div className="btn-wrapper mt-5">
              <a href="../contact" className="btn">
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
    </>
  );
}
