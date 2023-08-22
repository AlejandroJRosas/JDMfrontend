export interface Client {
  clientId: string;
  name: string;
  mainPhone: string;
  secondaryPhone: string;
  createdAt: string;
}

export type ClientPayload = Omit<Client, 'clientId' | 'createdAt'>;
