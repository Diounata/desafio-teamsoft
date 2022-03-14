import { MobileContainer, DesktopContainer, LogoContainer, Navbar } from './styles';
import Image from 'next/image';

import { Address } from './Address';
import { SearchInput } from './SearchInput';
import { UserData } from './UserData';

import arrowLeftSVG from '../../assets/arrow-left.svg';
import deliverizePNG from '../../assets/Deliverize.png';
import { useDeviceWidth } from '../../services/useDeviceWidth';

export function Header() {
  const { deviceWidth } = useDeviceWidth();

  if (deviceWidth > 1024) {
    return (
      <DesktopContainer>
        <Image src={deliverizePNG} width={225} height={48} alt="Deliverize" />

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
