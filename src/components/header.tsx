"use client"; //1111
import Link from "next/link";
import { Suspense } from "react";

import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from "./nextui-org-components";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
