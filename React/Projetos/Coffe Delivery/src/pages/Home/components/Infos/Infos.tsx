import { Clock, Coffee, Cube, ShoppingCart } from "phosphor-react";
import { InfosContainer, ListIcon } from "./styles";
import coffeHomeImage from "../../../../assets/CoffeHomeImage.svg";

export function Infos() {
  return (
    <InfosContainer>
      <div>
        <header>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>Com o Coffe Delivery Você recebe seu café onde estiver, a qualquer hora</p>
        </header>

        <footer>
          <ListIcon color="yellow-300">
            <ShoppingCart size={20} />
            Compra simples e segura
          </ListIcon>

          <ListIcon color="yellow-200">
            <Cube size={20} />
            Embalagem mantém o café intacto
          </ListIcon>

          <ListIcon color="gray-600">
            <Clock size={20} />
            Entrega rápida e rastreada
          </ListIcon>

          <ListIcon color="purple-200">
            <Coffee size={20} />
            O café chega fresquinho até você
          </ListIcon>
        </footer>
      </div>

      <img src={coffeHomeImage}/>
    </InfosContainer> 
  )
}