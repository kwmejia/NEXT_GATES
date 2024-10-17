"use client";


interface ButtonUpdateProps { 
  idTask: number
  fetchTasks: () => Promise<void>
}
export const ButtonUpdate = ({ idTask, fetchTasks }: ButtonUpdateProps) => {

  const handleUpdate = async () => {

    await fetch("http://localhost:3000/api/to-do", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idTask }),
    })
    fetchTasks()
  };
  return (
    <button
      onClick={handleUpdate}
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Hecho
    </button>
  );
};
