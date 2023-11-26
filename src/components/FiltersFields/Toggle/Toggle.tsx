import { useState } from "react";
import { Space, Switch, Typography } from "antd";
import { FilterFieldProps } from "../types";

const Toggle = ({
  onFilterChange,
  filterName,
  title,
}: FilterFieldProps<boolean>) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleSwitchChange = (checked: boolean) => {
    setChecked(checked);
    onFilterChange(filterName, checked);
  };

  return (
    <Space direction="vertical" size="middle" >
      <Typography.Text>{title}</Typography.Text>
      <Switch defaultChecked={checked} onChange={handleSwitchChange} />
    </Space>
  );
};

export default Toggle;
