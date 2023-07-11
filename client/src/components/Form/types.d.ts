export interface IInputProps {
  placeholder: string;
  type?: string | "text";
  Icon?: React.ReactSVGElement | any;
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
}

export interface IOptionProps {
  id: number;
  label: string;
  value: string;
}

export interface ISelectFieldProps {
  selectData: IOptionProps[];
  handleSelect: any;
  selected: any;
  className?: string;
}

export interface ITextareaProps {
  placeholder: string;
  Icon?: React.ReactSVGElement | any;
  id?: string;
  className?: string;
  required?: boolean;
  name: string;
}

export interface ICheckboxProps {
  id?: string;
  className?: string;
  required?: boolean;
  name: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
