import { Order } from "../../../../types/order";
import { api } from "../../../fakeApi/fakeApi";
export const deleteItems = async (items: React.Key[], data: Order[]) =>
  await api(data.filter((e) => !items.includes(e.key))).then((res) => res);

export const declineItems = async (items: React.Key[], data: Order[]) =>
  await api(
    data.map((e) => (items.includes(e.key) ? { ...e, isDeclined: true } : e))
  ).then((res) => res);
