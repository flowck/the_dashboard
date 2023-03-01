import { ReactNode } from "react";
import { styled } from "stitches.config";

interface Props {
  children?: ReactNode | ReactNode[];
}

export function AuthLayout({ children }: Props) {
  return (
    <Container>
      <Section>{children}</Section>
    </Container>
  );
}

const Container = styled("section", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Section = styled("section", {
  width: "90%",
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  "@bp2": {
    width: "400px",
  },
});
