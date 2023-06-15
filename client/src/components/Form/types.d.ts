export interface InputProps {
  placeholder: string;
  type?: string | "text";
  Icon?: React.ReactSVGElement | any;
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
}

export interface OptionProps {
  id: number;
  name: string;
}

export interface SelectFieldProps {
  selectData: OptionProps[];
}
