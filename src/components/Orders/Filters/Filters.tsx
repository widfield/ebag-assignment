import { useState, useEffect } from "react";
import Search from "../../FiltersFields/Search/Search";
import DateRange from "../../FiltersFields/DateRange/DateRange";
import type { RangeValue } from "../../../../types/dateRange";
import { applyFilters } from "./services";
import type { Filters, FiltersProps } from "./types";
import Toggle from "../../FiltersFields/Toggle/Toggle";
import Dropdown from "../../FiltersFields/Dropdown/Dropdown";
import { PAYMENT_TYPES_FILTER_OPTIONS } from "../constants";
import { Space } from "antd";

const Filters = ({
  setData,
  data,
  shouldTriggerFilter,
  resetTrigger,
}: FiltersProps) => {
  const [filters, setFilters] = useState<Filters>({
    searchTerm: { value: "", type: "search" },
    createdDate: { value: null, type: "date" },
    deliveredDate: { value: null, type: "date" },
    isPaid: { value: false, type: "toggle" },
    isNewClient: { value: false, type: "toggle" },
    isDeclined: { value: false, type: "toggle" },
    paymentType: { value: null, type: "dropdown" },
  });

  useEffect(() => {
    if (shouldTriggerFilter) {
      setData(applyFilters(filters, data));
      resetTrigger();
    }
  }, [shouldTriggerFilter, data]);

  const handleChangeFilters = (
    name: string,
    value: string | RangeValue | boolean | string[]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [name]: { ...prev[name], value },
    }));
  };

  useEffect(() => {
    setData(applyFilters(filters, data));
  }, [filters]);

  return (
    <Space size="large">
      <Search
        onFilterChange={handleChangeFilters}
        filterName="searchTerm"
        title="Search"
      />
      <DateRange
        onFilterChange={handleChangeFilters}
        filterName="createdDate"
        title="Date Created"
      />
      <DateRange
        onFilterChange={handleChangeFilters}
        filterName="deliveredDate"
        title="Date Delivered"
      />
      <Toggle
        onFilterChange={handleChangeFilters}
        filterName="isPaid"
        title="Paid"
      />
      <Toggle
        onFilterChange={handleChangeFilters}
        filterName="isNewClient"
        title="New Client"
      />
      <Toggle
        onFilterChange={handleChangeFilters}
        filterName="isDeclined"
        title="Declined"
      />
      <Dropdown
        onFilterChange={handleChangeFilters}
        filterName="paymentType"
        options={PAYMENT_TYPES_FILTER_OPTIONS}
        title="Payment Type"
      />
    </Space>
  );
};

export default Filters;
