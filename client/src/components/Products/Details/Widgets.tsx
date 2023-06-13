import { WidgetsProps } from "./types";

export default function Widgets(props: WidgetsProps) {
  const { Icon, tittle } = props;
  
  return (
    <div className="text-light hover:text-secondary font-medium cursor-pointer text-sm flex items-center">
      <Icon className="h-4 w-4 inline mr-1" />
      <span>{tittle}</span>
    </div>
  );
}
