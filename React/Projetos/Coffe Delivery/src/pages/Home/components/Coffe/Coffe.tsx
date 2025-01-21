import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeContainer, FormContainer, TypesContainer } from "./styles";
import { CoffeType } from "../../../../contexts/CoffeInfos";
import { useState } from "react";

interface CoffeProps {
  coffe: CoffeType,
  addCoffe: (coffe: CoffeType, units: number, event: React.FormEvent) => void
}

export function Coffe({ coffe, addCoffe }: CoffeProps) {
  const [units, setUnits] = useState(0);

  const { image, types, name, price, description} = coffe

  function handleAddingCoffe() {
    setUnits(units + 1);
  }

  function handleDeletingCoffe() {
    setUnits((state) => {
      if (state !== 0) {
        return state - 1;
      } else {
        return 0;
      }
    });
  }

  function handleSubmit(event: React.FormEvent) {
    addCoffe(coffe, units, event)
    setUnits(0)
    event.preventDefault(); 
  }

  return (
    <CoffeContainer>
      <img src={image} width={120} />

      <TypesContainer>
        {types.map((type) => {
          return <span key={type}>{type}</span>;
        })}
      </TypesContainer>

      <h1>{name}</h1>

      <p>{description}</p>

      <FormContainer action="" onSubmit={handleSubmit}>
        <h2>{price}</h2>

        <div>
          <span>
            <button type="button" onClick={handleDeletingCoffe}>
              <Minus size={12} weight="bold" />
            </button>
            {units}
            <button type="button" onClick={handleAddingCoffe}>
              <Plus size={12} weight="bold" />
            </button>
          </span>

          <button type="submit">
            <ShoppingCart size={24} />
          </button>
        </div>
      </FormContainer>
    </CoffeContainer>
  );
}
