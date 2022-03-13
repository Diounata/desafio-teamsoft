import { useEffect, useState } from 'react';

import { MobileContainer, DesktopContainer, LogoContainer, Navbar } from './styles';
import Image from 'next/image';

import { Address } from './Address';
import { SearchInput } from './SearchInput';
import { UserData } from './UserData';

import arrowLeftSVG from '../../assets/arrow-left.svg';
import deliverizePNG from '../../assets/Deliverize.png';

export function Header() {
  const [deviceWidth, setDeviceWidth] = useState<number>();

  useEffect(() => window.addEventListener('resize', () => setDeviceWidth(window.innerWidth)), []);

  if (deviceWidth < 800) {
    return (
      <MobileContainer>
        <Image src={arrowLeftSVG} alt="Voltar" />

        <LogoContainer>
          <Image src={deliverizePNG} alt="Deliverize" />
        </LogoContainer>
      </MobileContainer>
    );
  }

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
