"use client";

import { ICoder } from "@/models/coders/coder.model";
import { CoderService } from "@/services/coders.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IProps {
  data: ICoder[];
}

function CodersTable({ data }: IProps) {
  const [isEditing, setIsEditingMode] = useState<ICoder | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const useCoderService = new CoderService();
  const router = useRouter();

  const handleEdit = (coder: ICoder) => {
    setIsEditingMode(coder);
    setEditValue(coder.name); // Establecemos el valor actual para editar
  };

  const handleDelete = async (id: string) => {
    await useCoderService.destroy(id);
    router.refresh();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleSave = async (coder: ICoder) => {
    if (isEditing) {
      //   await useCoderService.update(coder.id, { ...coder, name: editValue });
      setIsEditingMode(null);
      router.refresh();
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    coder: ICoder
  ) => {
    if (e.key === "Enter") {
      handleSave(coder);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Avatar</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coder, index) => (
          <tr key={index}>
            <td>{coder.id}</td>
            <td>
              {isEditing?.id === coder.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => handleKeyPress(e, coder)}
                  autoFocus
                />
              ) : (
                <span onDoubleClick={() => handleEdit(coder)}>
                  {coder.name}
                </span>
              )}
            </td>
            <td>{coder.avatar}</td>
            <td>
              <button onClick={() => handleEdit(coder)}>Editar</button>
              <button onClick={() => handleDelete(coder.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CodersTable;
