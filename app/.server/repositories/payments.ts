import { prisma } from "../prisma";

export const newPayment = async (
  email?: string,
  productName?: string,
  price?: number
) => {
  if (email && productName && price !== undefined) {
    await prisma.payment.create({ data: { email, productName, price } });
  }
};
