import { Infos } from "./components/Infos/Infos";
import { Coffe } from "./components/Coffe/Coffe";
import { HomeContainer, CoffesContainer } from "./styles";
import { CoffeInfos, CoffeType} from '../../contexts/CoffeInfos';
import { useEffect, useState } from "react";

interface CoffeOnCart {
  coffe: CoffeType,
  units: number
}

export function Home() {
  const [coffes, setCoffes] = useState<CoffeOnCart[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let newTotalPrice = 0

    coffes.map(coffe => {
      newTotalPrice += coffe.coffe.price * coffe.units
    })

    setTotalPrice(newTotalPrice)
  }, [coffes, setTotalPrice])

  function addCoffe(coffe: CoffeType, units: number, event: React.FormEvent) {
    const newCoffe: CoffeOnCart = {
      coffe,
      units
    }  
    
    setCoffes(state => [...state, newCoffe])
    event.preventDefault()
  }

  return (
    <>
      <HomeContainer>
        <Infos />

        <h1>
          Nossos Cafés 
          {/* {totalPrice} {JSON.stringify(coffes, null, 2)} */}
        </h1>

        <CoffesContainer>
          {CoffeInfos.map((coffe) => {
            return (
              <Coffe
                key={coffe.name}
                coffe={coffe}
                addCoffe={addCoffe}
              />
            );
          })}
        </CoffesContainer>
      </HomeContainer>
    </>
  );
}
