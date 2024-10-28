// import { HeaderComponent } from '@/components/header.component';
import { HeaderComponent } from '@/components/header.component';

// src/app/(sections)/layout.tsx
export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
   
      <HeaderComponent/>

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
