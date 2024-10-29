import { VacantsTemplate } from "@/ui/template";
import { IGetCompaniesRespone } from "./model/company.model";

interface IProps {
  searchParams: {
    page: string;
    size: string;
    name: string;
  }
}

export const generateMetadata = async ({ searchParams}: IProps)=> {
  const page = searchParams.page ?? 1;
  return {
    title: `Clientes - Página ${page}`,
    description: 'Gestion de compañias'
  }
}

export default async function Home({ searchParams }: IProps) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 5;

  const resp = await fetch(
    `https://vacantsbackendgates-production.up.railway.app/api/v1/company?page=${page}&size=${size}`
  );
  const data: IGetCompaniesRespone = await resp.json()

  return <VacantsTemplate data={data} />;
}
