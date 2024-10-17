// src/app/(sections)/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
        Contacto
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        {/* Información de Contacto */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Ponte en Contacto</h2>
          <p className="text-lg text-gray-700 mb-4">
            Si tienes alguna pregunta o deseas ponerte en contacto, no dudes en
            enviarme un mensaje a través del formulario o en mis redes sociales.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Correo electrónico:{" "}
            <span className="font-semibold">kevin.mejia@riwi.io</span>
          </p>
          <p className="text-lg text-gray-700">
            También puedes encontrarme en:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Formulario de Contacto */}
        <div className="w-full md:w-1/2">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Tu nombre"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="tuemail@example.com"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={4}
                placeholder="Tu mensaje"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
