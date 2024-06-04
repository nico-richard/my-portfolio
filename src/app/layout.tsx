"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
