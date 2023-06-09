import classNames from "classnames";
const theme: any = {
  color: {
    base: "btn",
    white: "btn-white",
    primary: "theme-btn-1",
    secondary: "theme-btn-2",
  },
};
export default function Button(props: any) {
  const cls = "btn";
  const { className, children, onClick, type = "button", color = "btn" } = props;
  return (
    <button type={type} className={classNames(cls, className, theme.color[color])} onClick={onClick}>
      {children}
    </button>
  );
}
