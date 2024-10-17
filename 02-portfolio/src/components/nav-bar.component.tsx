import React from "react";
import { NavBarItemComponent } from "./nav-bar-item.component";

const navBarItems = [
  { path: "/about", title: " Acerca de Mí" },
  { path: "/projects", title: "Proyectos" },
  { path: "/contact", title: "Contacto" },
];

export const NavBarComponent = () => {
  return (
    <nav>
      <div className="flex space-x-6">
        {navBarItems.map((item, key) => (
          <NavBarItemComponent path={item.path} title={item.title} key={key} />
        ))}
      </div>
    </nav>
  );
};
