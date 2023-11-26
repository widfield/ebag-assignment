import { ReactNode } from "react";

export interface FilterTableProps<T extends Record<string, any>> {
  data: T[];
  columns: {
    title: string;
    dataIndex: string;
    key?: string;
    render?: (_: string, row: T) => ReactNode;
  }[];
  loading?: boolean;
}
