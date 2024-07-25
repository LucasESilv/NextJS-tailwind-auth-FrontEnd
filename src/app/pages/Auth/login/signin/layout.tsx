import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import React, { Children } from "react";

export const metadata: Metadata = {
  title: "Sign In | NextTailwindLogin",
  description: "Lucas Silva Project",
};

export const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextTopLoader color="#000" showSpinner={false} />
      {children}
    </>
  );
};

export default SignInLayout;
