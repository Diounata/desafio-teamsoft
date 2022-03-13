import { useLayoutEffect, useState } from 'react';

import { MobileContainer, DesktopContainer, LogoContainer, Navbar } from './styles';
import Image from 'next/image';

import { Address } from './Address';
import { SearchInput } from './SearchInput';
import { UserData } from './UserData';

import arrowLeftSVG from '../../assets/arrow-left.svg';
import deliverizePNG from '../../assets/Deliverize.png';

export function Header() {
  const [deviceWidth, setDeviceWidth] = useState<number>();

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setDeviceWidth(document.body.clientWidth));
  }, []);

  if (deviceWidth > 1024) {
    return (
      <DesktopContainer>
        <Image src={deliverizePNG} alt="Deliverize" />

        <Navbar>
          <Address />
          <SearchInput />
          <UserData />
        </Navbar>
      </DesktopContainer>
    );
  }

  return (
    <MobileContainer>
      <Image src={arrowLeftSVG} alt="Voltar" />

      <LogoContainer>
        <Image src={deliverizePNG} alt="Deliverize" />
      </LogoContainer>
    </MobileContainer>
  );
}
