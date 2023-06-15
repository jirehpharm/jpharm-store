export interface InputProps {
  placeholder: string;
  type?: string | "text";
  Icon?: React.ReactSVGElement | any;
}

export interface OptionProps {
  id: number
  name: string
}

export interface SelectFieldProps {
  selectData: OptionProps[]
}