import Table from "../Common/Table";

interface IDataProps {
  [key: string]: string; // Add index signature to allow any string key
}

export default function Download({ downloadData }: { downloadData: IDataProps[] }): JSX.Element {
  const keys = Object.keys(downloadData[0]);
  return (
    <div>
      <Table thList={keys}>
        <>
          {downloadData.map((data: IDataProps, index: number) => (
            <tr key={index}>
              {keys.map((key: string) => (
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-600" key={key}>
                  {key == "download" ? <a href={data[key]}>Download File</a> : data[key]}
                </td>
              ))}
            </tr>
          ))}
        </>
      </Table>
    </div>
  );
}
