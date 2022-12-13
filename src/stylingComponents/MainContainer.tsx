import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";

export const MainContainer: React.FC<{ children: JSX.Element }> = ({
  children,
}) => (
  <main className="flex min-h-screen w-screen flex-col shadow-lg bg-gray-100 text-gray-700 align-center">
    {children}
  </main>
);
