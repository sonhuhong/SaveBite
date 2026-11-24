export type UserRole = "CUSTOMER" | "MERCHANT" | "ADMIN";

export interface MysteryBoxSummary {
  id: string;
  merchantId: string;
  title: string;
  priceInVnd: number;
  quantity: number;
  pickupEndsAt: string;
}