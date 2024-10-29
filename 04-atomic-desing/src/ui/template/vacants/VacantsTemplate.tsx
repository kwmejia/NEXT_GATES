import { IGetCompaniesRespone } from "@/app/model/company.model";
import { ListVacants } from "@/ui/organism";
import React from "react";

interface IProps {
  data: IGetCompaniesRespone;
}
function VacantsTemplate({ data }: IProps) {
  return (
    <>
      <ListVacants data={data} />
    </>
  );
}

export default VacantsTemplate;
