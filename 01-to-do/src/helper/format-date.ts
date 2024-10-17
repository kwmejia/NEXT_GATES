import { format } from "date-fns";

const formatDate = (date: string | undefined = ""): string => {
  return format(new Date(date), "MM/dd/yyyy 'a las' HH:mm");
}

export default formatDate;