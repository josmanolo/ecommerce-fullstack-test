
import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer, Logo, UserInfo, Icons, Icon, CartIconContainer, Badge } from './styled';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <HeaderContainer>
      <Logo>MyStore</Logo>
      <Icons>
        <Link to="/cart">
          <CartIconContainer>
            <FaShoppingCart color='#fff'/>
            {cartItemsCount > 0 && <Badge>{cartItemsCount}</Badge>}
          </CartIconContainer>
        </Link>
        <UserInfo>
          <Icon>
            <FaUser />
          </Icon>
          {user && <span>{user.email}</span>}
        </UserInfo>
      </Icons>
    </HeaderContainer>
  );
};

export default Header;
