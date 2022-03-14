import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;

  padding: 0.75rem 1rem;

  background-color: #f4f4f4;

  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;

const MobileContainer = styled(Container)``;

const DesktopContainer = styled(Container)`
  justify-content: space-between;

  padding: 1rem 2.5rem;
`;

const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export { MobileContainer, DesktopContainer, LogoContainer, Navbar };
