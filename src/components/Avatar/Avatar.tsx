import { blackA, violet } from "@radix-ui/colors";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";
import { styled } from "stitches.config";

interface Props {
  src?: string;
  name?: string;
  initials: string;
  size?: "small" | "medium" | "large";
}

export const Avatar = ({ src, initials, name, size = "small" }: Props) => (
  <Flex css={{ gap: 20 }}>
    <AvatarRoot size={size}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback delayMs={600}>{initials.toUpperCase()}</AvatarFallback>
    </AvatarRoot>
  </Flex>
);

const AvatarRoot = styled(AvatarPrimitive.Root, {
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "100%",
  alignItems: "center",
  display: "inline-flex",
  verticalAlign: "middle",
  justifyContent: "center",
  backgroundColor: blackA.blackA3,
  variants: {
    size: {
      small: {
        width: 24,
        height: 24,
      },
      medium: {
        width: 32,
        height: 32,
      },
      large: {
        width: 48,
        height: 48,
      },
    },
  },
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const Flex = styled("div", { display: "flex" });
