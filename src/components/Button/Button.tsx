import { styled } from "stitches.config";

export const Button = styled("button", {
  gap: "$1",
  padding: "$1",
  border: "none",
  color: "$black",
  display: "flex",
  cursor: "pointer",
  textAlign: "center",
  fontWeight: "600",
  alignItems: "center",
  borderRadius: "$small",
  letterSpacing: "0.5px",
  backgroundColor: "$white",
  "&:hover": {
    outline: "2px solid rgba(255, 255, 255, 0.5)",
  },

  variants: {
    fullWidth: {
      yes: {
        width: "100%",
        display: "block",
      },
    },
    size: {
      "1": {
        height: "30px",
        padding: "0 $3",
      },
      "2": {
        height: "35px",
        padding: "0 $5",
      },
      "3": {
        height: "50px",
        padding: "0 $7",
      },
    },
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$secondaryInformation",
        "&:hover": {
          outline: "2px solid rgba(75, 163, 193, 0.5)",
        },
      },
      secondary: {
        color: "$white",
        border: "1px solid $shade500",
        backgroundColor: "transparent",
      },
    },
  },
});
