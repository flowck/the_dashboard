import { styled } from "@stitches/react";
import { Avatar } from "components/Avatar/Avatar";
import { Box } from "components/Box/Box";
import { Header } from "components/Header/Header";
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
      <ContentArea>
        <Header>
          <Box css={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
            <Avatar src="" initials="FC" size="medium" />
          </Box>
        </Header>
        <Content>{children}</Content>
      </ContentArea>
    </main>
  );
}

const sidebarWidth = "240px";

const Content = styled("section", {
  width: "100%",
  padding: "$6 $5",
  minHeight: "100vh",
});

const ContentArea = styled("section", {
  isDebug: "red",
  minHeight: "100vh",
  marginLeft: sidebarWidth,
  width: `calc(100% - ${sidebarWidth})`,
});
