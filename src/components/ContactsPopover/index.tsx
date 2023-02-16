import * as Popover from '@radix-ui/react-popover';
import { Content, Trigger } from './styled';
import { IoMdArrowDropdown, IoLogoGithub, IoIosMail, IoLogoLinkedin } from "react-icons/io";

export function ContactsPopover() {
  return (
    <Popover.Root>
      <Trigger>
        Contato
        <IoMdArrowDropdown
          size={24}
          color='#db2090'
        />
      </Trigger>
      <Popover.Portal>
        <Content>
          <a href='#'>
            <IoLogoGithub
              size={24}
              color='#db2090'
            />
            GitHub
          </a>
          <a href='#'>
            <IoLogoLinkedin
              size={24}
              color='#db2090'
            />
            Linkedin
          </a>

          <button id="email">
            <IoIosMail
              size={24}
              color='#db2090'
            />
            E-mail
          </button>
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