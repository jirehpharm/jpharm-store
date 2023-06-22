export interface IContactCardDetailsProps {
  src: string;
  title: string;
  description1: string;
  description2: string;
}

export interface IContactMessageFormProps {
  name: string;
  type: string;
  placeholder: string;
  icon?: React.ReactSVGElement | any;
}
