"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const FormTask = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    description: "",
  });
  const router = useRouter(); // Hook para manejar la navegación

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/to-do", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      router.push("/to-do"); 
    } catch (error) {
      console.error("Error creando la tarea:", error);
    }
  };

  return (
    <form className="flex flex-col gap-5 m-10" onSubmit={handleSubmit}>
      <div className="w-50 flex flex-col">
        <label htmlFor="name">Nombre de la tarea</label>
        <input
          id="name"
          type="text"
          className="h-12 px-4 py-1 rounded border border-blue-500 text-gray-800 focus:outline-none"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div className="w-50 flex flex-col">
        <label htmlFor="date">Fecha de la tarea</label>
        <input
          id="date"
          type="datetime-local"
          className="h-12 px-4 py-1 rounded border border-blue-500 text-gray-800 focus:outline-none"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
      </div>

      <div className="w-50 flex flex-col">
        <label htmlFor="description">Descripción de la tarea</label>
        <textarea
          name="description"
          id="description"
          className="px-4 py-1 rounded border border-blue-500 text-gray-800 focus:outline-none"
          rows={5}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
      </div>

      <div className="w-100 flex justify-center">
        <button
          type="submit"
          className="w-2/6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Crear nueva tarea
        </button>
      </div>
    </form>
  );
};
