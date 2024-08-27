import { json, type ActionFunctionArgs } from "@remix-run/node";
import { newPayment } from "~/.server/repositories/payments";

export async function action({ request }: ActionFunctionArgs) {
  const sellerIdENV = process.env.GUMROAD_SELLER_ID;
  const formData = await request.formData();
  const sellerId = String(formData.get("seller_id"));
  const email = String(formData.get("email"));
  const productName = String(formData.get("product_name"));
  const price = Number(formData.get("price"));

  if (sellerId !== sellerIdENV) {
    console.log(
      "los sellers id no coinciden",
      `sellerId enviado: ${sellerId}, sellerId guardado: ${sellerIdENV}`
    );
    return json({ message: "sellerId not found" }, { status: 401 });
  }

  await newPayment(email, productName, price);
  return json({}, { status: 200 });
}
