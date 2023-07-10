import classNames from "classnames";
import { IButtonProps, ITheme } from "./types";

const theme: ITheme = {
  variant: {
    default: "btn",
    light: "btn-white",
    primary: "theme-btn-1",
    secondary: "theme-btn-2",
    danger: "theme-btn-3",
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
 * @param variant - The variant of the button.
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
    variant = "default",
    isLoading = false,
  } = props;
  return (
    <button
      type={type}
      className={classNames(cls, className, theme.variant[variant])}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
