import { Button, Space } from "antd";
import { declineItems, deleteItems } from "./services";
import { useSelectedRowsContext } from "../../../context/SelectionContext";
import { useState } from "react";
import { Loading, OperationsInterface } from "./types";

const Operations = ({ data, updateData }: OperationsInterface) => {
  const { selectedRows, updateSelectedRows } = useSelectedRowsContext();
  const [currentLoading, setCurrentLoading] = useState<Loading>(null);

  const handleDeleteItems = async () => {
    setCurrentLoading("delete");
    updateData(await deleteItems(selectedRows, data));
    updateSelectedRows([]);
    setCurrentLoading(null);
  };

  const handleDeclineItems = async () => {
    setCurrentLoading("decline");
    updateData(await declineItems(selectedRows, data));
    updateSelectedRows([]);
    setCurrentLoading(null);
  };
  return (
    selectedRows.length > 0 && (
      <Space size="large">
        <Button
          loading={currentLoading === "delete"}
          type="primary"
          danger
          onClick={handleDeleteItems}
        >
          Delete Items
        </Button>
        <Button
          loading={currentLoading === "decline"}
          danger
          onClick={handleDeclineItems}
        >
          Decline Items
        </Button>
      </Space>
    )
  );
};

export default Operations;
