import {
  FileTextOutlined,
  DollarCircleOutlined,
  UserAddOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

export const CHARACTERISTICS = {
  HAS_INVOICE: "HAS_INVOICE",
  IS_PAID: "IS_PAID",
  IS_NEW_CLIENT: "IS_NEW_CLIENT",
  IS_DECLINED: "IS_DECLINED",
};

export const CHARACTERISTICS_DISPLAY_VALUES = {
  [CHARACTERISTICS.HAS_INVOICE]: "Has Invoice",
  [CHARACTERISTICS.IS_NEW_CLIENT]: "New Client",
  [CHARACTERISTICS.IS_PAID]: "Paid",
  [CHARACTERISTICS.IS_DECLINED]: "Declined",
};

export const CHAR_ICONS = {
  [CHARACTERISTICS.HAS_INVOICE]: (
    <FileTextOutlined style={{ fontSize: "24px", color: "#1677ff" }} />
  ),
  [CHARACTERISTICS.IS_PAID]: (
    <DollarCircleOutlined style={{ fontSize: "24px", color: "#389e0d" }} />
  ),
  [CHARACTERISTICS.IS_NEW_CLIENT]: (
    <UserAddOutlined style={{ fontSize: "24px", color: "#389e0d" }} />
  ),
  [CHARACTERISTICS.IS_DECLINED]: (
    <CloseCircleOutlined style={{ fontSize: "24px", color: "#f5222d" }} />
  ),
};

export const PAYMENT_TYPES = {
  INVOICE: "invoice",
  CARD: "card",
  CASH: "cash",
};

export const PAYMENT_TYPES_FILTER_OPTIONS = [
  {
    label: "Invoice",
    value: PAYMENT_TYPES.INVOICE,
  },
  {
    label: "Cash",
    value: PAYMENT_TYPES.CASH,
  },
  {
    label: "Card",
    value: PAYMENT_TYPES.CARD,
  },
];
