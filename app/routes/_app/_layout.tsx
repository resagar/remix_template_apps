import { Outlet } from "@remix-run/react";
import { HeaderApp } from "~/components/HeaderApp";
import { Container } from "~/components/landingPage/Container";
import { Footer } from "~/components/landingPage/Footer";
import { MainContainer } from "~/components/landingPage/MainContainer";

export default function LayoutAuth() {
  return (
    <>
      <MainContainer>
        <Container>
          <HeaderApp />
        </Container>
        <Container className="px-8">
          <main className="w-full h-full">
            <Outlet />
          </main>
        </Container>
        <Container>
          <Footer />
        </Container>
      </MainContainer>
    </>
  );
}
