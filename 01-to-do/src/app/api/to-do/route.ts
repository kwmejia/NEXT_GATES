// app/api/tasks/route.ts

import { NextResponse } from "next/server";

export type Task = {
  id: number;
  name: string;
  date: string;
  description: string;
  completed: boolean;
};

let tasks: Task[] = [
  {
    id: 1,
    name: "Comprar comida",
    date: "2024-08-20T14:00:00",
    description: "Comprar frutas y verduras en el supermercado.",
    completed: false,
  },
  {
    id: 2,
    name: "Estudiar Next.js",
    date: "2024-08-21T09:00:00",
    description: "Repasar los conceptos de la nueva versión de Next.js.",
    completed: false,
  },
  {
    id: 3,
    name: "Hacer ejercicio",
    date: "2024-08-22T07:00:00",
    description: "Realizar una rutina de ejercicios de 30 minutos.",
    completed: false,
  },
];

// GET
export async function GET(req: Request) {
  const url = new URL(req.url);
  const status = url.searchParams.get("status");

  let filteredTasks = tasks;

  if (status === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  } else {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  const sortedTasks = filteredTasks.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return NextResponse.json(sortedTasks);
}

// POST
export async function POST(req: Request) {
  const body = await req.json();
  const newTask = { id: Date.now(), ...body };
  tasks.push(newTask);
  return NextResponse.json(newTask, { status: 201 });
}

// PUT:
export async function PUT(req: Request) {
  const body = await req.json();
  const { id } = body;
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], completed: true };
    return NextResponse.json(tasks[index]);
  } else {
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  }
}
