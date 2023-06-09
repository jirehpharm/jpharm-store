interface ICategory {
  Icon: React.ElementType;
  title: string
}

export default function Category(props: ICategory) {
  const { Icon, title } = props;
  return (
    <div className=" flex justify-between items-center">
      <div className="p-10  flex flex-col justify-center items-center my-0">
        <div className="bg-secondary p-3 rounded-full w-[45px]">
          <Icon className="text-white" size={20} />
        </div>
        <h5>{title}</h5>
      </div>
    </div>
  )
}
