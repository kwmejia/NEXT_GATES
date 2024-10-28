import { Button } from "@/ui/atoms";
import React from "react";

function Pagination() {
  return (
    <div>
      <span>Pagina</span>
      <span>1</span>
      <span>de</span>
      <span>10</span>
      <div className="center gap-5">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
}

export default Pagination;
