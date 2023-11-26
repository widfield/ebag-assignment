import { useState, useEffect } from "react";
import { Input, Space, Typography } from "antd";
import { useDebounce } from "../../../hooks/useDebounce";
import { FilterFieldProps } from "../types";

const Search = ({
  onFilterChange,
  filterName,
  title,
}: FilterFieldProps<string>) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(searchTerm, 300);

  const handleSearchTermChange = (searchTerm: string) => {
    setIsLoading(true);
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    setIsLoading(false);
    onFilterChange(filterName, debouncedValue);
  }, [debouncedValue]);

  return (
    <Space direction="vertical">
      <Typography.Text>{title}</Typography.Text>
      <Input.Search
        value={searchTerm}
        onChange={(e) => handleSearchTermChange(e.target.value)}
        loading={isLoading}
      />
    </Space>
  );
};

export default Search;
