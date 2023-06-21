export default function Table({ thList = [], children }: { thList: string[]; children: React.ReactElement }) {
  return (
    <>
      <div className="overflow-x-auto max-w-[290px] sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto border-t border-gray-200 ">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50 ">
            <tr>
              {thList.map((thItem: any) => (
                <th key={thItem} scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-600 capitalize">
                  {thItem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="rounded-lg bg-white ">{children}</tbody>
        </table>
      </div>
    </>
  );
}
