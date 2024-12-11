
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  span {
    margin-left: 0.5rem;
  }
`;

export const Icon = styled.div`
  font-size: 1.3rem;
  margin-left: 1rem;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`;

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`;

export const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
`;
