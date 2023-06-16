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
  className?: string;
}

export interface TextareaProps {
  placeholder: string;
  Icon?: React.ReactSVGElement | any;
  id?: string;
  className?: string;
  required?: boolean;
  name: string;
}

export interface CheckboxProps {
  id?: string;
  className?: string;
  required?: boolean;
  name: string;
}
