import Image from "next/image";

// src/app/(sections)/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Acerca de Mí</h1>

      <div className="flex flex-col md:flex-row items-center">
        {/* Imagen de perfil */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Image
            src="https://cdn3d.iconscout.com/3d/premium/thumb/desarrollador-de-software-10961397-8772473.png?f=webp"
            alt="Foto de Perfil"
            className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg"
            width={200}
            height={200}
          />
        </div>

        {/* Información personal */}
        <div className="w-full md:w-2/3 md:pl-6 text-center md:text-left">
          <p className="text-lg text-gray-700 mb-4">
            Soy un desarrollador web especializado en <span className="font-semibold text-gray-900">[Next, Vue, Angular, SpringBoot y Nest]</span>. Tengo varios años de experiencia trabajando con tecnologías modernas como <span className="font-semibold text-gray-900">React, Next.js, Tailwind CSS</span> y más.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Me apasiona crear aplicaciones web intuitivas, rápidas y bien diseñadas que brinden una gran experiencia de usuario. Constantemente me esfuerzo por aprender y mejorar mis habilidades, manteniéndome al día con las últimas tendencias y herramientas de desarrollo.
          </p>

          <p className="text-lg text-gray-700">
            Aquí algunas de mis habilidades clave:
          </p>

          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Desarrollo frontend con React y Next.js</li>
            <li>Diseño responsivo con Tailwind CSS</li>
            <li>Integración de APIs y servicios REST</li>
            <li>Optimización de rendimiento web</li>
            <li>Git y control de versiones</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
