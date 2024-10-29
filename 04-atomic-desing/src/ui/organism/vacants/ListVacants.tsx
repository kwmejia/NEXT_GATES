import './card.scss'
import VacantsMolecule from "@/ui/molecules/vacants/VacantsMolecule";
import React from "react";
import Pagination from "./Pagination";
import { IGetCompaniesRespone } from '@/app/model/company.model';

interface IProps {
  data: IGetCompaniesRespone;
}
export default function ListVacants({ data }: IProps) {
  return (
    <VacantsMolecule>
      <div className="center">
      {data.content.map((company, index) => (
        <div className="card" key={index}>
          <p>{company.name}</p>
          <p>{company.location}</p>
          <p>{company.contact}</p>
        </div>
      ))}

      </div>
      <Pagination data={data} />

    </VacantsMolecule>
  );
}
