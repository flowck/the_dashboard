import { config } from "config";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  title: string;
  noBaseTitle?: boolean;
  children?: ReactNode | ReactNode[];
}

export function Meta({ title, noBaseTitle = false }: Props) {
  return (
    <Head>
      <title>
        {!noBaseTitle ? `${title} - ${config.site.baseTitle}` : title}
      </title>
    </Head>
  );
}
