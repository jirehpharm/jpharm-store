export interface ITheme {
  variant: {
    primary?: string;
    secondary?: string;
    success?: string;
    danger?: string;
    warning?: string;
    info?: string;
    light?: string;
    dark?: string;
    [key: string]: string;
  };
}

export type TButtonVariants =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  isLoading?: true | false;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: TButtonVariants;
}
