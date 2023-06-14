interface ICategory {
  Icon: React.ElementType;
  title: string
}

export default function Category(props: ICategory) {
  const { Icon, title } = props;
  return (
    <div className="group flex justify-center items-center mb-8 border-b-2">
      <div className="p-3 flex flex-col justify-center items-center my-0">
        <a href="#">
          <div className="bg-light group-hover:bg-secondary p-3 rounded-full w-[45px] mb-4">
            <Icon className="text-white" size={20} />
          </div>
        </a >
        <a href="#">
          <p className="text-black group-hover:text-secondary font-bold">{title}</p>
        </a >
      </div>
    </div >
  )
}
