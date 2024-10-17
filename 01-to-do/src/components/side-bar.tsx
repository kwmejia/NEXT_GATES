import Image from "next/image";
import Link from "next/link";
import { IoCreate, IoDocument, IoList } from "react-icons/io5";
import { MenuItem, type IPropsSidebarMenuItem } from "@/components/menu-item";

const menuItems: IPropsSidebarMenuItem[] = [
  {
    icon: <IoList size={20} />,
    title: "Lista de tareas",
    subtitle: "Lista",
    path: "/to-do",
  },
  {
    icon: <IoCreate size={20}  />,
    title: "Nueva tarea",
    subtitle: "Crear",
    path: "/to-do/create",
  },
  {
    icon: <IoDocument size={20}  />,
    title: "Tareas realizadas",
    subtitle: "realizadas",
    path: "/to-do/done",
  },
];

export const Sidebar = () => {
  return (
    <div className="w-100 flex flex-col">
      <h2 className="text-2xl font-bold text-center p-4">
        App <span className="text-blue-700">to-do</span>
      </h2>

      <div className="flex flex-col justify-center items-center w-100 mt-3">
        <Image
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1724332789~exp=1724333389~hmac=9e0160d44ddf15ba964d103134da53f5a1b342acac915a70f1ed70a6b64817a3"
          alt="User"
          width={100}
          height={100}
          className="rounded-full"
        />
        <p className="font-semibold">Kevin Mejia</p>
      </div>
      <div className="mt-5 flex flex-col justify-start">
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};
