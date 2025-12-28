"use client";
import React from "react";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";
import Cookie from "js-cookie";
import TitleLink from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";
import styles from "./Header.module.css";
import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  COLOR_THEME_COOKIE_NAME, BLOG_SUBTITLE,
} from "@/constants";

function Header({ initialTheme, className, ...delegated }) {

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <TitleLink />
      {BLOG_SUBTITLE}
    </header>
  );
}

export default Header;
