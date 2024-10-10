const Table = ({
    columns,
    renderRow,
    data,
  }: {
    columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item: any) => React.ReactNode;
    data: any[];
  }) => {
    return (
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-secondary-content   text-sm">
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="">{data.map((item) => renderRow(item))}</tbody>
      </table>
    );
  };
  
  export default Table;