import Link from "next/link";
import { useRouter } from "next/router"
import { NavLinkActive, NavLinkInactive } from "./styles";

interface ActiveLinkProps {
  href: string;
  name: string;
}

export function ActiveLink({ href, name }: ActiveLinkProps) {
  const { asPath } = useRouter();

  if (asPath === href) {
    return (
      <NavLinkActive href={href} >
        {name}
      </NavLinkActive>
    )
  }

  return (
    <NavLinkInactive href={href}>
      {name}
    </NavLinkInactive>
  )
}