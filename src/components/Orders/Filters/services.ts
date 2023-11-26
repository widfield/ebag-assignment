import { pick } from "lodash";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { Order } from "../../../../types/order";
import { FilterType, Filters } from "./types";

dayjs.extend(isBetween);

// Filter functions
const filterBySearchTerm = (
  searchTerm: Filters[FilterType]["value"],
  data: Order,
  _: string
): boolean =>
  typeof searchTerm === "string" &&
  !!Object.values(pick(data, ["fullName", "orderId", "orderSum"])).find((val) =>
    val.toString().toLocaleLowerCase().includes(searchTerm?.toLocaleLowerCase())
  );

const filterByDate = (
  dates: Filters[FilterType]["value"],
  data: Order,
  dataField: string
): boolean => {
  const dataDate = data[dataField as keyof typeof data].toString();

  return dayjs(dataDate).isBetween(
    dates?.[0 as keyof typeof dates],
    dates?.[1 as keyof typeof dates]
  );
};

const filterByToggle = (
  toggle: Filters[FilterType]["value"],
  data: Order,
  dataField: string
): boolean => data[dataField as keyof typeof data] === toggle;

const filterByDropdown = (
  values: Filters[FilterType]["value"],
  data: Order,
  dataField: string
): boolean =>
  (values as string[])?.includes(
    data[dataField as keyof typeof data].toString()
  );

const filterFunctionsMap: {
  [key in FilterType]: (
    searchTerm: Filters[FilterType]["value"],
    data: Order,
    dataField: string
  ) => boolean;
} = {
  search: filterBySearchTerm,
  date: filterByDate,
  toggle: filterByToggle,
  dropdown: filterByDropdown,
};

// Filter applier

export const applyFilters = (filters: Filters, data: Order[]) => {
  let filteredData = [...data];
  Object.entries(filters).forEach(([key, filter]) => {
    if (!!filter?.value) {
      filteredData = filteredData.filter((order) =>
        filterFunctionsMap[filter.type](filter.value, order, key)
      );
    }
  });
  return filteredData;
};
