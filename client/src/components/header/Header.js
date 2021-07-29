import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  //OptionDiv,
  OptionLink,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/original.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to='/add-new-staff'>ADD NEW STAFF</OptionLink>
        <OptionLink to='contact'>CONTACT</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
