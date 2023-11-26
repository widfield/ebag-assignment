import type { RangeValue } from "../../../../types/dateRange";
import { Order } from "../../../../types/order";

export type FilterType = "search" | "date" | "toggle" | "dropdown";

export interface Filters {
  [key: string]: {
    value: string | boolean | RangeValue | string[];
    type: FilterType;
  };
}

export interface FiltersProps {
  setData: (data: Order[]) => void;
  data: Order[];
  shouldTriggerFilter: boolean;
  resetTrigger: () => void;
}
