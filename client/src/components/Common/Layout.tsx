import Heading from "./Heading";

interface IHeadingProps {
  title: string;
  subtitle: string;
  children: React.ReactElement<any>;
}

export default function Layout(props: IHeadingProps) {
  const { title, subtitle, children } = props;
  return (
    <section className="mx-auto max-w-2xl sm:max-w-md lg:max-w-6xl flex flex-col items-center p-4 mt-4 lg:mt-0 lg:py-10">
      <a href="/" className="cursor-pointer">
        <img
          src="full_logo.png"
          alt="logo"
          className="w-[150px] sm:w-[250px] h-full object-contain mb-8"
        />
      </a>
      <Heading title={title} subtitle={subtitle} />
      {children}
    </section>
  );
}
