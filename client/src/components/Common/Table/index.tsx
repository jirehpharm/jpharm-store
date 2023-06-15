export default function Table({ thList = [], children }: { thList: string[]; children: React.ReactElement }) {
  return (
    <>
      <div className="overflow-hidden border-t border-gray-200 ">
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
