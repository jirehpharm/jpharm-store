interface IContentProps {
  description: string;
}
export default function ContentCard(props: IContentProps) {
  const { description } = props;
  return (
    <div className="px-6 py-4 mt-4 mx-2 shadow shadow-light relative outline-none before:content[''] before:absolute before:-top-1 before:left-6 before:w-2 before:h-2 before:rotate-45 before:bg-white ">
      <p className="mb-0">{description}</p>
    </div>
  );
}
