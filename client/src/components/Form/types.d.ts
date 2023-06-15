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
  label: string;
  value: string;
}

export interface SelectFieldProps {
  selectData: OptionProps[];
  handleSelect: any;
  selected: any;
}
