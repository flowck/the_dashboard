import { styled } from "@stitches/react";
import { Sidebar } from "components/Sidebar/Sidebar";
import { SidebarMenu } from "components/SidebarMenu/SidebarMenu";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode | ReactNode[];
}

export function Dashboard({ children }: Props) {
  const router = useRouter();

  return (
    <main>
      <Sidebar css={{ width: sidebarWidth }}>
        <SidebarMenu activeRoute={router.pathname} />
      </Sidebar>
      <Content>{children}</Content>
    </main>
  );
}

const sidebarWidth = "240px";

const Content = styled("main", {
  padding: "$6 $5",
  minHeight: "100vh",
  marginLeft: sidebarWidth,
  width: `calc(100% - ${sidebarWidth})`,
});
