import { IContactCardDetailsProps } from "./types";

interface IContactCardDetails {
  contact: IContactCardDetailsProps[];
}

export default function ContactCards(props: IContactCardDetails) {
  const { contact } = props;
  return (
    <>
      <section className="grid grid-row-1 grid-flow-row lg:grid-row-3 lg:grid-flow-col max-w-md md:max-w-xl lg:max-w-6xl mx-auto mt-20 gap-9 mb-20 p-3">
        {contact?.map((con, index) => (
          <div
            key={index}
            className="text-center mb-7 pt-12 px-7 pb-7 shadow-lg"
          >
            <div className="mb-9 w-20 block mx-auto">
              <img src={con.src} alt="Icon Image" className="text-lg" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-xl">{con.title}</h3>
            <p className="text-sm lg:text-base">
              {con.description1} <br />
              {con.description2}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
