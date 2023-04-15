import Link from 'next/link';
import { Link as LinkReactScroll } from "react-scroll";
import * as Popover from '@radix-ui/react-popover';

import { Content, Trigger } from './styled';

import {
  IoMdArrowDropdown,
  IoLogoGithub,
  IoIosMail,
  IoLogoLinkedin
} from "react-icons/io";

import { useRouter } from 'next/router';

interface ContactsPopoverProps {
  setIsOpen?: any;
}

export function ContactsPopover({ setIsOpen }: ContactsPopoverProps) {
  const { asPath } = useRouter();

  return (
    <Popover.Root>
      <Trigger>
        Contato
        <IoMdArrowDropdown
          size={16}
          color='#db2090'
        />
      </Trigger>
      <Popover.Portal>
        <Content>
          <Link style={{ fontSize: '18px' }} href={String(process.env.NEXT_PUBLIC_URL_GITHUB)} target="_blank">
            <IoLogoGithub
              size={24}
              color='#db2090'
            />
            GitHub
          </Link>
          <Link style={{ fontSize: '18px' }} href={String(process.env.NEXT_PUBLIC_URL_LINKEDIN)} target="_blank">
            <IoLogoLinkedin
              size={24}
              color='#db2090'
            />
            Linkedin
          </Link>
          <Popover.Arrow
            height={8}
            width={16}
            className='fill-zinc-900'
          />
        </Content>
      </Popover.Portal>
    </Popover.Root>
  )
}