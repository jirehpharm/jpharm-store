import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Search({ setSearchText }: any) {
  return (
    <div className="flex items-center ">
      <input
        type="text"
        placeholder="Search"
        className="  w-full h-full  font-semibold text-sm mb-0 focus:ring-0 focus:border-borderColor focus-visible:outline-0 bg-sectionColor border-2 border-borderColor "
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setSearchText(e.currentTarget.value);
        }}
      />
      <div className="bg-secondary h-full flex items-center px-3 align-middle">
        <MagnifyingGlassIcon className="w-8 h-8 text-sectionColor " />
      </div>
    </div>
  );
}
