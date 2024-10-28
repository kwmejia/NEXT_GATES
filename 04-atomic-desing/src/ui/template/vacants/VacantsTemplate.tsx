import { ListVacants } from "@/ui/organism";
import React from "react";

interface IProps {
  data: { title: string; company: string }[];
}
function VacantsTemplate({ data }: IProps) {
  return (
    <>
      <ListVacants data={data} />
    </>
  );
}

export default VacantsTemplate;
