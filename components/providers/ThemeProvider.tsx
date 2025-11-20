"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<typeof NextThemeProvider>>) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
