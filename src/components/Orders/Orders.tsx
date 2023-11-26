import FilterTable from "../Table/Table";
import MOCK_DATA from "../../mock/MOCK_DATA.json";
import { columns } from "./columns";
import Filters from "./Filters/Filters";
import { useEffect, useState } from "react";
import Operations from "./Operations/Operations";
import { Space } from "antd";
import { Order } from "../../../types/order";
import { RowSelectionContextProvider } from "../../context/SelectionContext";
import { api } from "../../fakeApi/fakeApi";

const Orders = () => {
  const [data, setData] = useState<Order[]>([]);
  const [initialData, setInitialData] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldTriggerFilter, setShouldTriggerFilter] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    (async () =>
      api(MOCK_DATA).then((res) => {
        setIsLoading(false);
        setInitialData(res);
        setData(res);
      }))();
  }, []);

  const handleUpdateAllData = (data: Order[]) => {
    setInitialData(data);
    setData(data);
    setShouldTriggerFilter(true);
  };

  return (
    <Space style={{ width: "100%" }} size="middle" direction="vertical">
      <Filters
        data={initialData}
        setData={setData}
        shouldTriggerFilter={shouldTriggerFilter}
        resetTrigger={() => setShouldTriggerFilter(false)}
      />
      <RowSelectionContextProvider>
        <Operations data={initialData} updateData={handleUpdateAllData} />
        <FilterTable data={data} columns={columns} loading={isLoading} />
      </RowSelectionContextProvider>
    </Space>
  );
};

export default Orders;
