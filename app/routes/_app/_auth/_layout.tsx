import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <Outlet />
      </section>
    </>
  );
}
