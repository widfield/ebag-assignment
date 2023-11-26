export interface Order {
  orderId: number;
  fullName: string;
  orderSum: string;
  paymentType: string;
  isPaid: boolean;
  isNewClient: boolean;
  createdDate: string;
  deliveredDate: string;
  key: string;
  isDeclined: boolean;
}
