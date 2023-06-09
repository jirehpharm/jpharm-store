import classNames from "classnames";
import { IButtonProps, ITheme } from "./types";

const theme: ITheme = {
  varient: {
    default: "btn",
    light: "btn-white",
    primary: "theme-btn-1",
    secondary: "theme-btn-2",
  },
};

/**
 * A button component.
 *
 * @param className - The class name for the button.
 * @param children - The children for the button.
 * @param onClick - The function to be called when the button is clicked.
 * @param isLoading - Whether the button is loading or not.
 * @param type - The type of the button.
 * @param varient - The varient of the button.
 *
 * @returns The button component.
 */
export default function Button(props: IButtonProps): JSX.Element {
  const cls = "btn";
  const {
    className,
    children,
    onClick,
    type = "button",
    varient = "default",
    isLoading = false,
  } = props;
  return (
    <button
      type={type}
      className={classNames(cls, className, theme.varient[varient])}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
