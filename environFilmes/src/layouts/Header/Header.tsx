import logotipo from "../../assets/Logo.png"
import me from "../../assets/me.jpg"
import { HeaderContainer, Location, LocationContainer } from "./Headerstyles"
import { Coffee, MapPin, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { Link } from "react-router-dom"

export function Header() {


  return (
    <HeaderContainer>
      <a href="/"><img src={logotipo} alt="" /></a>
      <LocationContainer>
        <Location>
          <span> Jonathan Souza</span>
        </Location>
        <Link to="Checkout">
          <span><img src={me} alt="" /></span>
        </Link>
      </LocationContainer>
    </HeaderContainer>
  )
}