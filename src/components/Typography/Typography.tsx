import { styled } from "stitches.config";

export const Typography = styled("span", {
  variants: {
    variant: {
      "1": {
        fontSize: "$3",
      },
      "2": {
        fontSize: "$4",
      },
      "3": {
        fontSize: "$5",
      },
      "4": {
        fontSize: "$6",
      },
    },
    as: {
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
    },
  },
});
