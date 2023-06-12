interface ISocialLink {
  url: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
interface ISocialData {
  socialData: ISocialLink[];
}

/**
 * Renders a list of social links with their respective icons.
 * @param props - The props object containing an array of social links.
 * @returns A JSX element representing the list of social links.
 */

export default function SocialLinks(props: ISocialData): JSX.Element {
  const { socialData } = props;
  return (
    <div className="flex gap-3 text-light">
      {socialData?.map((socialLink, idx: number) => (
        <a href={socialLink.url} key={idx}>
          <socialLink.icon
            className={`h-4 w-4 inline text-light hover:text-secondary`}
          />
        </a>
      ))}
    </div>
  );
}
