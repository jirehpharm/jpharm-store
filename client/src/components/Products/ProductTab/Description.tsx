interface IContentProps {
  content: string;
}

export default function Description(props: IContentProps) {
  const { content } = props;
  return (
    <p
      className="text-light text-sm lg:text-base"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
