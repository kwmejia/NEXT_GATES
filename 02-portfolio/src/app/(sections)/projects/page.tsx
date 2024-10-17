import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Este es un proyecto de ejemplo usando React y Tailwind CSS.",
      link: "https://github.com/tuusuario/proyecto-1",
      image: "https://res.cloudinary.com/peiscof/image/upload/v1637175666/november-2021/servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web-parte-I-imagen_m3djl2.png", // Ruta de la imagen del proyecto
    },
    {
      title: "Proyecto 2",
      description: "Un proyecto avanzado con Next.js y optimización de rendimiento.",
      link: "https://github.com/tuusuario/proyecto-2",
      image: "https://res.cloudinary.com/peiscof/image/upload/v1637175666/november-2021/servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web-parte-I-imagen_m3djl2.png", // Ruta de la imagen del proyecto
    },
    {
      title: "Proyecto 3",
      description: "Aplicación full-stack con integración de APIs y autenticación.",
      link: "https://github.com/tuusuario/proyecto-3",
      image: "https://res.cloudinary.com/peiscof/image/upload/v1637175666/november-2021/servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web-parte-I-imagen_m3djl2.png", // Ruta de la imagen del proyecto
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Mis Proyectos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Imagen del proyecto usando el componente Image de Next.js */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={`Imagen de ${project.title}`}
                layout="fill" // Esto asegura que la imagen ocupe todo el contenedor
                objectFit="cover" // Esto recorta y ajusta la imagen para que se vea correctamente
                className="rounded-t-lg"
              />
            </div>

            {/* Contenido del proyecto */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
