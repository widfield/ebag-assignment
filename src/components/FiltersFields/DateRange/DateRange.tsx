import { useState } from "react";
import { DatePicker, Space, Typography } from "antd";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { FilterFieldProps } from "../types";
import { RangeValue } from "../../../../types/dateRange";
import { DATE_FORMAT } from "../../../constants/common";

dayjs.extend(isBetween);

const DateRange = ({
  onFilterChange,
  filterName,
  title,
}: FilterFieldProps<RangeValue>) => {
  const [dateRange, setDateRange] = useState<RangeValue>([null, null]);

  const handleDateChange = (dates: RangeValue) => {
    setDateRange(dates);

    onFilterChange(filterName, dates);
  };

  return (
    <Space direction="vertical">
      <Typography.Text>{title}</Typography.Text>
      <DatePicker.RangePicker
        onChange={(e) => handleDateChange(e)}
        value={dateRange}
        format={DATE_FORMAT}
      />
    </Space>
  );
};

export default DateRange;
