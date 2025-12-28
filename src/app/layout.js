import React from "react";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import clsx from "clsx";
import RespectMotionPreferences from "../components/RespectMotionPreferences";
import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  BLOG_TITLE,
  COLOR_THEME_COOKIE_NAME,
} from "@/constants";
import { cookies } from "next/headers";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles.css";
import {StarsBackground} from "@/components/Stars/StarsBackground";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about iterating ideas through different media.",
  icons: {
    icon: '/favicon.svg',
  }
};

function RootLayout({ children }) {
  return (
    <RespectMotionPreferences>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        style={DARK_TOKENS}
      >
        <body>
          <Header />
        <StarsBackground />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </RespectMotionPreferences>
  );
}

export default RootLayout;
