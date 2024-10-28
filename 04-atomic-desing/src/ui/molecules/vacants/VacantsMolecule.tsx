'use client'
import { Container } from "@/ui/atoms";
import React from "react";

function VacantsMolecule({ children }: { children: React.ReactNode }) {
  const POST_VACANT = async () => {
    try {
        
        const resp = await fetch("https://vacantsbackendgates-production.up.railway.app/api/v1/company", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: "COMANY A",
            location: "MEDELLIN",
            contact: "string",
          }),
        });
    
        console.log(resp)
    } catch (error) {
        console.error(error)
    }
  };
  return (
    <Container>
      <h1 className="text-primary f-20">Administracion de Vacantes</h1>
      <button onClick={POST_VACANT}>Crear Vacante </button>

      <div className="">{children}</div>
    </Container>
  );
}

export default VacantsMolecule;
