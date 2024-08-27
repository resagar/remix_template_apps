import { type MetaFunction } from "@remix-run/node";
import { Container } from "~/components/landingPage/Container";
import { Footer } from "~/components/landingPage/Footer";
import { Header } from "~/components/landingPage/Header";
import { MainContainer } from "~/components/landingPage/MainContainer";
import { ColorContainer } from "~/components/landingPage/sections/ColorContainer";
import { CtaSection } from "~/components/landingPage/sections/cta/CtaSection";
import { DemoSection } from "~/components/landingPage/sections/demo/DemoSection";
import { FeatureSection } from "~/components/landingPage/sections/features/FeatureSection";
import { HeroSection } from "~/components/landingPage/sections/hero/HeroSection";
import { PricingSection } from "~/components/landingPage/sections/pricing/PricingSection";
import { ProblemSection } from "~/components/landingPage/sections/problem/ProblemSection";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <MainContainer>
        <Container>
          <Header />
        </Container>
        <main>
          <ColorContainer>
            <HeroSection />
          </ColorContainer>
          <ColorContainer>
            <ProblemSection />
          </ColorContainer>
          <ColorContainer>
            <FeatureSection />
          </ColorContainer>
          <ColorContainer>
            <DemoSection />
          </ColorContainer>
          <ColorContainer>
            <PricingSection />
          </ColorContainer>
          <ColorContainer>
            <CtaSection />
          </ColorContainer>
        </main>
        <Container>
          <Footer />
        </Container>
      </MainContainer>
    </>
  );
}
