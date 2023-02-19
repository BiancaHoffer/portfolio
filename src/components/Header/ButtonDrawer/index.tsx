import { CotainerButtonDrawer } from "./styled";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import { useState } from "react";
import { NavMobile } from "../NavMobile";

export function ButtonDrawer() {
  const [active, setActive] = useState(true);

  return (
    <>
      <CotainerButtonDrawer onClick={() => setActive(!active)} active={active}>
        {active === true ?
          <VscMenu size={18} color="#a1a0a0" />
          :
          <VscChromeClose size={18} color="#a1a0a0" />
        }
      </CotainerButtonDrawer>
      <NavMobile activeDrawer={active} />
    </>

  )
}