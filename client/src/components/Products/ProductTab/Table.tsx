import { ITableProp } from "./types";

interface ITable {
  tableData: ITableProp[];
}
export default function Table(props: ITable) {
  const { tableData } = props;

  return (
    <div className="inline-block min-w-full py-2 align-middle">
      <table className="min-w-full">
        <tbody>
          {tableData?.map((person, idx) => (
            <tr key={idx} className="border-b border-dotted border-gray-200">
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-base font-semibold text-light sm:pl-0 w-20">
                {person.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-base text-light italic">
                {person.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
