"use client";
import Table from "@/app/to-do/components/table";
import { Task } from "@/app/api/to-do/route";
import { useEffect, useState } from "react";

export default function ToDoOldPage({ data }: { data: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(data);


  const fetchTasks = async () => {
    const response = await fetch("/api/to-do?status=completed", { cache: "no-store" });
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="m-10">
      <h1 className="text-center my-3 text-3xl font-bold">Lista de tareas realizadas</h1>
      <Table data={tasks} fetchTasks={fetchTasks} old />
    </div>
  );
}
