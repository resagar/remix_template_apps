import { prisma } from "../prisma";
import bcrypt from "bcrypt";

export const newUser = async ({
  id,
  email,
  password,
}: {
  id: string;
  email: string;
  password: string;
}) => {
  const hashPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: { id, email, password: hashPassword },
  });
};

export const confirmEmail = async (email?: string) => {
  await prisma.user.update({ where: { email }, data: { emailVerified: true } });
};
