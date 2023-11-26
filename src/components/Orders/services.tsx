import { Tooltip } from "antd";
import { Order } from "../../../types/order";
import {
  CHARACTERISTICS,
  CHAR_ICONS,
  PAYMENT_TYPES,
  CHARACTERISTICS_DISPLAY_VALUES,
} from "./constants";

export const getSpecificsArray = (order: Order) => {
  const specifics: string[] = [];

  if (order.isPaid) {
    specifics.push(CHARACTERISTICS.IS_PAID);
  }
  if (order.isNewClient) {
    specifics.push(CHARACTERISTICS.IS_NEW_CLIENT);
  }
  if (order.isDeclined) {
    specifics.push(CHARACTERISTICS.IS_DECLINED);
  }
  if (order.paymentType === PAYMENT_TYPES.INVOICE) {
    specifics.push(CHARACTERISTICS.HAS_INVOICE);
  }

  return specifics;
};

export const getIcon = (type: string, key: string) => (
  <Tooltip title={CHARACTERISTICS_DISPLAY_VALUES[type]} key={key}>
    {CHAR_ICONS[type]}
  </Tooltip>
);
