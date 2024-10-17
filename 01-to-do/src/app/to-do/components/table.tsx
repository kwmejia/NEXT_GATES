// src/app/(views)/to-do/page.tsx
import { Task } from "@/app/api/to-do/route";
import { ButtonUpdate } from "./button-update";
import formatDate from "@/helper/format-date";

interface TaskProps {
  data: Task[];
  fetchTasks: () => Promise<void>;
  old?: boolean;
}
export default function Table({ data, fetchTasks, old }: TaskProps) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Nombre
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Fecha
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">
                Descripción
              </th>
              {!old && (
                <th className="py-2 px-4 text-left font-semibold text-gray-700">
                  Acciones
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {data.map((task) => (
              <tr
                key={task.id}
                className="border-t border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-4">{task.name}</td>
                <td className="py-2 px-4">{formatDate(task.date)}</td>
                <td className="py-2 px-4">{task.description}</td>
                {!old && (
                  <td className="flex">
                    <ButtonUpdate idTask={task.id} fetchTasks={fetchTasks} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
