import { NavLink } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import { HeaderContainer, PinContainer, CartContainer } from './styles';
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <nav>
        <PinContainer>
            <MapPin size={24} />

            <span>
              localização do cliente
            </span>
        </PinContainer>
        
        <NavLink to="/cart" title="Cart">
          <CartContainer>
            <ShoppingCart size={24} />
          </CartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}