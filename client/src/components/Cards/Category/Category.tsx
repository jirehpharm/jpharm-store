interface ICategory {
  Icon: React.ElementType;
  title: string
}

export default function Category(props: ICategory) {
  const { Icon, title } = props;
  return (
    <div className=" flex justify-between items-center mb-8">
      <div className="p-3  flex flex-col justify-center items-center my-0">
        <a href="#">
          <div className="bg-secondary p-3 rounded-full w-[45px] mb-4">
            <Icon className="text-white" size={20} />
          </div>
        </a >
        <a href="#">
          <h5>{title}</h5>
        </a >
      </div>
    </div >
  )
}
