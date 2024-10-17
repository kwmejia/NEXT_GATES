// import { HeaderComponent } from '@/components/header.component';
import Link from 'next/link';

// src/app/(sections)/layout.tsx
export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:text-gray-300">Mi Portafolio</Link>
          </div>

          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/about" className="hover:text-gray-300">Acerca de Mí</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-300">Proyectos</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <HeaderComponent/> */}

      <main className="flex-grow container mx-auto p-6">
        {children} {/* Aquí se renderizan las páginas dentro de las secciones */}
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Mi Portafolio | Secciones Especiales</p>
        </div>
      </footer>
    </div>
  );
}
