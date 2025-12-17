"use client";

import { Chip as CHIP } from "@nextui-org/react";
import { Navbar as NAVBAR } from "@nextui-org/react";
import { NavbarBrand as NAVBARBRAND } from "@nextui-org/react";
import { NavbarContent as NAVBARCONTENT } from "@nextui-org/react";
import { NavbarItem as NAVBARITEM } from "@nextui-org/react";

export const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <CHIP color="warning" variant="shadow">
      {children}
    </CHIP>
  );
};
export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <NAVBAR className={className}>{children}</NAVBAR>;
};
export const NavbarBrand = ({ children }: { children: React.ReactNode }) => {
  return <NAVBARBRAND>{children}</NAVBARBRAND>;
};
export const NavbarContent = ({
  children,
  justify,
}: {
  children: React.ReactNode;
  justify: string;
}) => {
  return <NAVBARCONTENT justify={justify}>{children}</NAVBARCONTENT>;
};
export const NavbarItem = ({ children }: { children: React.ReactNode }) => {
  return <NAVBARITEM>{children}</NAVBARITEM>;
};
