import { Task } from "@/app/api/to-do/route";
import ToDoOldPage from "@/app/to-do/components/view-old";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App To-do - Tareas realizadas",
  description: "Generated by create next app",
};

export default async function DonePage() {
  const response = await fetch(
    "http://localhost:3000/api/to-do?status=completed",
    {
      cache: "no-cache",
      next: { revalidate: 10 },
    }
  );
  const data: Task[] = await response.json();

  // Pasar los datos al componente cliente (Index)
  return <ToDoOldPage data={data} />;
}
