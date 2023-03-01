import { styled } from "stitches.config";

export const TextField = styled("input", {
  padding: "$1",
  color: "$white",
  borderRadius: "$medium",
  backgroundColor: "$shade900",
  border: "1px solid $shade800",

  "&:hover": {
    outline: "2px solid $shade700",
  },

  "&:focus": {
    outline: "2px solid $shade600",
  },

  "&:active": {
    outline: "2px solid $shade600",
  },

  "&:disabled": {
    opacity: "0.5",
    cursor: "not-allowed",
  },

  variants: {
    state: {
      invalid: {
        border: "1px solid $secondaryAlert",
      },
    },
    size: {
      "1": {
        height: "30px",
        padding: "0 $1",
      },
      "2": {
        height: "40px",
        padding: "0 $2",
      },
      "3": {
        height: "50px",
        padding: "0 $2",
      },
    },
  },
});
