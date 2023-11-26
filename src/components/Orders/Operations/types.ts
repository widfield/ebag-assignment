import { Order } from "../../../../types/order";

export interface OperationsInterface {
  data: Order[];
  updateData: (data: Order[]) => void;
}

export type Loading = "decline" | "delete" | null;
