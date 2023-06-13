import { IoAlertOutline } from "react-icons/io5";

interface IWidgetLayoutProps {
  title: string;
  children: React.ReactElement;
}

export default function WidgetLayout(props: IWidgetLayoutProps) {
  const { title, children } = props;

  return (
    <div className="border-2 p-8 mb-5">
      <h6><IoAlertOutline className="inline -rotate-90 text-secondary h-9 w-9 mr-3" />{title}</h6>
      {children}
    </div>
  )
}
