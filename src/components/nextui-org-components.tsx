"use client";

import {
  Divider as DIVIDER,
  Skeleton as SKELETON,
  NavbarContent as NAVBARCONTENT,
  NavbarItem as NAVBARITEM,
  NavbarBrand as NAVBARBRAND,
  Navbar as NAVBAR,
  Chip as CHIP,
} from "@nextui-org/react";

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
  justify: "center" | "start" | "end" | undefined;
}) => {
  return <NAVBARCONTENT justify={justify}>{children}</NAVBARCONTENT>;
};
export const NavbarItem = ({ children }: { children: React.ReactNode }) => {
  return <NAVBARITEM>{children}</NAVBARITEM>;
};
export const Skeleton = ({ className }: { className: string }) => {
  return <SKELETON className={className} />;
};
export const Divider = ({ className }: { className: string }) => {
  return <DIVIDER className={className} />;
};
