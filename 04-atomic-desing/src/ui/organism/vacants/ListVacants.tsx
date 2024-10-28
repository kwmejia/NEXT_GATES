import './card.scss'
import VacantsMolecule from "@/ui/molecules/vacants/VacantsMolecule";
import React from "react";
import Pagination from "./Pagination";

interface IProps {
  data: { title: string; company: string }[];
}
export default function ListVacants({ data }: IProps) {
  return (
    <VacantsMolecule>
      {data.map((vacant, index) => (
        <div className="card" key={index}>
          <p>{vacant.title}</p>
          <p>{vacant.company}</p>
        </div>
      ))}
      <Pagination />

    </VacantsMolecule>
  );
}
