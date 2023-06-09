export default function OfferBanner() {
  return (
    <>
      <section className="mt-12 mb-14 bg-[url(/placeholder/1920x623.png)] p-20">
        <div className=" max-w-6xl mx-auto grid grid-cols-2">
          <div className="pt-16 pb-16">
            <div>
              <h6>Todays Hot Offer</h6>
              <h1>
                Free Covid-19 Vaccine
                <br />
                Campaign Ticket
              </h1>
              <p>
                Cur tantas regiones barbarorum obiit, tot maria transmist <br />
                summo bono fruitur id est voluptate barbarorum{" "}
              </p>
            </div>
            <div
              className="grid-cols-4 inline-block shadow mt-7 pt-6 pb-1 px-2;
              -webkit-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28) p-0;
              -webkit-box-shadow: none bg-white"
              data-countdown="2023/06/09"
            >
                <div className="inline-block mr-7 last:mr-0">
                    <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center">00</h1>
                    <p className="text-center text-lg">Days</p>
                </div>
                <div className="inline-block mr-7 last:mr-0">
                    <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center">00</h1>
                    <p className="text-center text-lg">Hrs</p>
                </div>
                <div className="inline-block mr-7 last:mr-0">
                    <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center">00</h1>
                    <p className="text-center text-lg">Mins</p>
                </div>
                <div className="inline-block mr-7 last:mr-0">
                    <h1 className="h-12 w-14 text-2xl leading-10 mb-1 text-center">00</h1>
                    <p className="text-center text-lg">Secs</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
