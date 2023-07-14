interface IHeadingProps {
  title: string;
  subtitle: string;
  children: React.ReactElement<any>;
}

export default function Layout(props: IHeadingProps) {
  const { title, subtitle, children } = props;
  return (
    <>
      <p className="text-xl lg:text-[32px] text-[#232323] m-0">{title}</p>
      {subtitle && (
        <p className="text-center text-[#546375] text-sm lg:text-lg">
          {subtitle}
        </p>
      )}
      {children}
    </>
  );
}
