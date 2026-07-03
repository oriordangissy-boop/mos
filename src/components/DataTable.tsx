import type { ReactNode } from "react";

export interface Column<T> {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
}

export default function DataTable<T>({
  columns,
  data,
  empty = "暂无数据"
}: {
  columns: Column<T>[];
  data: T[];
  empty?: string;
}) {
  return (
    <div className="overflow-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-primary/15 bg-white/[0.035] text-xs uppercase tracking-[0.12em] text-textSoft">
            {columns.map((column) => (
              <th key={column.key} className="whitespace-nowrap px-4 py-3 font-semibold">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td className="px-4 py-8 text-center text-textSoft" colSpan={columns.length}>
                {empty}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index} className="border-b border-primary/10 transition hover:bg-cyan/5">
                {columns.map((column) => (
                  <td key={column.key} className="whitespace-nowrap px-4 py-3 text-textMain">
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
