"use client";
import { IGetCompaniesRespone } from "@/app/model/company.model";
import { Button } from "@/ui/atoms";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface IProps {
  data: IGetCompaniesRespone;
}
function Pagination({ data }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    router.push(`?${params.toString()}`);
  };
  const currentPage = data.pageable.pageNumber + 1;
  return (
    <div>
      <span>Pagina </span>
      <span>{currentPage}</span>
      <span> - de - </span>
      <span>{data.totalPages}</span>
      <div className="center gap-5">
        <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</Button>
        <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === data.totalPages}>Next</Button>
      </div>
    </div>
  );
}

export default Pagination;
