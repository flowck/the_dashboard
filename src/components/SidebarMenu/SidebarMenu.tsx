import {
  BookmarkIcon,
  ClipboardIcon,
  CodeIcon,
  GridIcon,
  LockOpen1Icon,
  MixerVerticalIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import {
  MenuItemProp,
  SidebarMenuItem,
  SidebarMenuItemIcon,
} from "./SidebarMenuItem";

interface Props {
  activeRoute: string;
}

export function SidebarMenu({ activeRoute }: Props) {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => {
          const isActive = item.path === activeRoute;
          return (
            <SidebarMenuItem
              key={item.path}
              css={{ backgroundColor: isActive ? "$shade800" : "" }}
            >
              <Link href={item.path} style={linkStyles}>
                <SidebarMenuItemIcon>{item.icon}</SidebarMenuItemIcon>
                {item.label}
              </Link>
            </SidebarMenuItem>
          );
        })}
      </ul>
    </nav>
  );
}

const linkStyles = {
  height: "100%",
  display: "flex",
  alignItems: "center",
};

const menuItems: MenuItemProp[] = [
  {
    label: "Overview",
    path: "/overview",
    icon: <BookmarkIcon width={18} height={18} />,
  },
  {
    label: "Organizations",
    path: "/organizations",
    icon: <GridIcon width={18} height={18} />,
  },
  {
    label: "Configuration",
    path: "/configuration",
    icon: <LockOpen1Icon width={18} height={18} />,
  },
  {
    label: "Webhooks",
    path: "/webhooks",
    icon: <MixerVerticalIcon width={18} height={18} />,
  },
  {
    label: "API Keys",
    path: "/api-keys",
    icon: <CodeIcon width={18} height={18} />,
  },
  {
    label: "Logs",
    path: "/logs",
    icon: <ClipboardIcon width={18} height={18} />,
  },
];
