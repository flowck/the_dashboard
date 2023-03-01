import { ReactNode } from "react";
import { styled } from "stitches.config";

export const SidebarMenuItem = styled("li", {
  margin: "$1 0",
  padding: "3px",
  display: "block",
  fontSize: "small",
  listStyle: "none",
  alignItems: "center",
  borderRadius: "$small",
  "&:hover": {
    backgroundColor: "$shade800",
  },
});

export const SidebarMenuItemIcon = styled("div", {
  width: "24px",
  height: "24px",
  display: "flex",
  marginRight: "$1",
  alignItems: "center",
  justifyContent: "center",
});

export interface MenuItemProp {
  path: string;
  label: string;
  icon: ReactNode;
}
