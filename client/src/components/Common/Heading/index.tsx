import { IHeadingProps } from "./types";

/**
 * Renders a heading and a subheading.
 * @param {object} props - The props object.
 * @param {string} [props.title="Heading"] - The title of the heading.
 * @param {string} [props.subtitle="Sub Heading"] - The subtitle of the heading.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Index({ title, subtitle }: IHeadingProps): JSX.Element {
  return (
    <div className="flex justify-center flex-col items-center ">
      <h1 className="text-center text-2xl sm:text-3xl xl:text-[44px]">{title}</h1>
      {subtitle && <p className="text-center text-light text-sm lg:text-lg">{subtitle}</p>}
      <br />
    </div>
  );
}
