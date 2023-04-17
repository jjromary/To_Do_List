import moment from "moment";

export default function useFormatDate(newDate: string) {
  newDate = moment().locale("pt-br").format("DD/MM/YYYY ");

  return newDate;
}

