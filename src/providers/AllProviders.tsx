import { FC } from "react";

import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./TRPCProviders";

interface AllProvidersProps {
  children: React.ReactNode;
}

const AllProviders: FC<AllProvidersProps> = ({ children }) => {
  return (
    <QueryProvider>
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      > */}
      {children}
      {/* </ThemeProvider> */}
    </QueryProvider>
  );
};

export default AllProviders;
