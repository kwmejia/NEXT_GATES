"use client";
import { VacantsTemplate } from "@/ui/template";
import { useEffect } from "react";

export default function Home() {
  const arr = [{ title: "Fr developer", company: "Riwi" }];

  useEffect(() => {
    onMounted();
  }, []);

  const onMounted = async () => {
    const resp = await fetch(
      "http://vacantsbackendgates-production.up.railway.app/api/v1/vacants?page=1&size=7"
    );
    console.log(resp);
  };

  return <VacantsTemplate data={arr} />;
}
