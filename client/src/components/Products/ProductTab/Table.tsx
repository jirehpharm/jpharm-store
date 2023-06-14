const people = [
  {
    name: "Weight",
    value: "	1.5 kg",
  },
  {
    name: "Dimensions",
    value: "10 × 8 × 3 cm",
  },
  {
    name: "Logo",
    value: "Yes, No",
  },
];

export default function Table() {
  return (
    <div className="inline-block min-w-full py-2 align-middle">
      <table className="min-w-full">
        <tbody>
          {people.map((person, idx) => (
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
