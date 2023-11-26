import { Order } from "../../../types/order";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../../constants/common";
import { getIcon, getSpecificsArray } from "./services";
import { Space } from "antd";

export const columns = [
  {
    title: "Order #",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "Client Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Paid Sum",
    dataIndex: "orderSum",
    key: "orderSum",
  },
  {
    title: "Payment Type",
    dataIndex: "paymentType",
    key: "paymentType",
  },
  {
    title: "Date Created",
    dataIndex: "createdDate",
    key: "createdDate",
    render: (_: string, { createdDate }: Order) => (
      <>{dayjs(new Date(createdDate)).format(DATE_FORMAT)}</>
    ),
  },
  {
    title: "Date Delivered",
    dataIndex: "deliveredDate",
    key: "deliveredDate",
    render: (_: string, { deliveredDate }: Order) => (
      <>{dayjs(new Date(deliveredDate)).format(DATE_FORMAT)}</>
    ),
  },
  {
    title: "Characteristics",
    dataIndex: "isPaid",
    render: (_: string, item: Order) => (
      <Space size="small">
        {getSpecificsArray(item).map((char, index) =>
          getIcon(char, `${item.orderId}-${char}-${index}`)
        )}
      </Space>
    ),
  },
];
