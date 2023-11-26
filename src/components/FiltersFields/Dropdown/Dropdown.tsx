import { useState } from "react";
import { Select, Space, Typography } from "antd";
import { FilterFieldProps } from "../types";

interface DropdownProps extends FilterFieldProps<string[] | null> {
  options: { label: string; value: string }[];
}

export const Dropdown = ({
  onFilterChange,
  filterName,
  title,
  options,
}: DropdownProps) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (value: string[]) => {
    setValue(value);
    onFilterChange(filterName, value.length > 0 ? value : null);
  };

  return (
    <Space direction="vertical">
      <Typography.Text>{title}</Typography.Text>
      <Select
        mode="multiple"
        allowClear
        onChange={handleChange}
        options={options}
        style={{ width: 120 }}
        value={value}
        placeholder="Select"
      />
    </Space>
  );
};

export default Dropdown;
