import { InvoiceItem } from "components/InvoiceTable";
import { OrderActivity } from "core/order-activities/types";

export interface Order {
  orderId: number;
  clientId: number;
  isClosed?: boolean;
  clientName?: string;
  responsibleDni: string | null;
  responsibleName: string | null;
  entryTime: string;
  estimatedDeparture: string;
  realDeparture: string | null;
  bookingId: number;
  employeeDni: string;
  createdAt: string;
  items: InvoiceItem[];
  orderActivities: OrderActivity[];
  orderProducts: any[];
}
