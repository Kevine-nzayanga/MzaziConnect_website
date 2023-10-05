import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';

interface Column {
  key: string;
  label: string;
}

interface DynamicTableProps {
  data: any[]; 
  columns: Column[];
  onEdit?: (index: number) => void;
  onDelete?: (index: number) => void;
}

function DynamicTable({ data, columns, onEdit, onDelete }: DynamicTableProps) {
  return (
    <table className="w-full border border-collapse mt-20 mx-40 text-left">
      <thead>
        <tr className="bg-gray-100">
          {columns.map((column) => (
            <th key={column.key} className="px-2 py-2">
              {column.label}
            </th>
          ))}
          {onEdit && <th className="px-2 py-2 w-16"></th>}
          {onDelete && <th className="px-2 py-2 w-16"></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-collapse text-left text-gray-500 text-sm">
            {columns.map((column) => (
              <td key={column.key} className="px-2 py-2">
                {item[column.key]}
              </td>
            ))}
            {onEdit && (
              <td className="px-2 py-2">
                <button onClick={() => onEdit(index)} className="text-bgblue">
                  <TbEdit className="text-lg" /> 
                </button>
              </td>
            )}
            {onDelete && (
              <td className="px-2 py-2">
                <button onClick={() => onDelete(index)} className="text-grey-500">
                  <AiOutlineDelete className="text-lg" /> 
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
