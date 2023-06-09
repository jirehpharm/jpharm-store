export default function SocialLinks({ socialData }: any) {
  return (
    <div className="flex gap-3 text-light">
      {socialData?.map((socialLink:any, idx: number) => (
        <a href={socialLink.url} key={idx}>
          <socialLink.icon className={`h-4 w-4 inline text-light hover:text-secondary`} />
        </a>
      ))}
    </div>
  );
}
