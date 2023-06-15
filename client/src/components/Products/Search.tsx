import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Search({ setSearchText }: any) {
  return (
    <div className="flex items-center bg-sectionColor border-2 border-borderColor pl-5 pr-2">
      <input
        type="text"
        placeholder="Search"
        className="h-[60px] w-full  font-semibold text-sm mb-0 focus-visible:outline-0 bg-sectionColor "
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setSearchText(e.currentTarget.value);
        }}
      />
      <MagnifyingGlassIcon className="w-10 h-10 text-light" />
    </div>
  );
}
