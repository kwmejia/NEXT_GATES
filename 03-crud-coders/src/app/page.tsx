import { CoderService } from "@/services/coders.service";
import CodersTable from "./coders/CodersTable";

const useCoderService = new CoderService()

export default async function Home() {
  const data = await useCoderService.findAll()
  return <CodersTable data={data}/>
}
