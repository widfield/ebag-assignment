import { Table } from "antd";
import { useSelectedRowsContext } from "../../context/SelectionContext";
import { FilterTableProps } from "./types";

const FilterTable = <T extends {}>({
  data,
  columns,
  loading,
}: FilterTableProps<T>) => {
  const { selectedRows, updateSelectedRows } = useSelectedRowsContext();
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    updateSelectedRows(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys: selectedRows,
    onChange: onSelectChange,
  };
  return (
    <Table
      rowSelection={rowSelection}
      dataSource={data}
      columns={columns}
      loading={loading}
    />
  );
};

export default FilterTable;
