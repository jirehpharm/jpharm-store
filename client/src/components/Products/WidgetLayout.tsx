import { IoAlertOutline } from "react-icons/io5";

interface IWidgetLayoutProps {
  title: string;
  children: React.ReactElement;
}

export default function WidgetLayout(props: IWidgetLayoutProps) {
  const { title, children } = props;

  return (
    <div className="border-2 p-8 mb-5 mx-auto max-w-xs md:max-w-xl">
      <h6>
        <IoAlertOutline className="inline -rotate-90 text-secondary h-9 lg:w-9 lg:mr-3 md:text-lg sm:text-lg" />
        {title}
      </h6>
      {children}
    </div>
  );
}
