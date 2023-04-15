import { useRouter } from "next/router"
import { NavLinkActive, NavLinkInactive } from "./styles";

interface ActiveLinkProps {
  href: string;
  name: string;
  onClick?: () => void;
}

export function ActiveLink({ href, name, onClick }: ActiveLinkProps) {
  const { asPath } = useRouter();

  if (asPath === href) {
    return (
      <NavLinkActive href={href} >
        {name}
      </NavLinkActive>
    )
  }

  return (
    <NavLinkInactive href={href} onClick={onClick}>
      {name}
    </NavLinkInactive>
  )
}