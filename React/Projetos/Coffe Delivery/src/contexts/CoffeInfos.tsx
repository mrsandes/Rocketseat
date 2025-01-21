import Americano from "../assets/coffes/Americano.png";
import Arabe from "../assets/coffes/Arabe.png";
import CafeComLeite from "../assets/coffes/CafeComLeite.png";
import CafeGelado from "../assets/coffes/CafeGelado.png";
import Capuccino from "../assets/coffes/Capuccino.png";
import ChocolateQuente from "../assets/coffes/ChocolateQuente.png";
import Cubano from "../assets/coffes/Cubano.png";
import Expresso from "../assets/coffes/Expresso.png";
import ExpressoCremoso from "../assets/coffes/ExpressoCremoso.png";
import Havaiano from "../assets/coffes/Havaiano.png";
import Irlandes from "../assets/coffes/Irlandes.png";
import Latte from "../assets/coffes/Latte.png";
import Macchiato from "../assets/coffes/Macchiato.png";
import Mochaccino from "../assets/coffes/Mochaccino.png";

export interface CoffeType {
  image: string;
  name: string;
  types: string[];
  description: string;
  price: number;
}

export const CoffeInfos: CoffeType[] = [
  {
    image: Americano,
    name: "Expresso Americano",
    types: ["TRADICIONAL"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.99,
  },
  {
    image: Arabe,
    name: "Árabe",
    types: ["ESPECIAL"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.99,
  },
  {
    image: CafeComLeite,
    name: "Café com Leite",
    types: ["TRADICIONAL", "COM LEITE"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.99,
  },
  {
    image: CafeGelado,
    name: "Expresso Gelado",
    types: ["TRADICIONAL", "GELADO"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.99,
  },
  {
    image: Capuccino,
    name: "Capuccino",
    types: ["TRADICIONAL", "COM LEITE"],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.99,
  },
  {
    image: ChocolateQuente,
    name: "Chocolate Quente",
    types: ["ESPECIAL", "COM LEITE"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.99,
  },
  {
    image: Cubano,
    name: "Cubano",
    types: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.99,
  },
  {
    image: Expresso,
    name: "Expresso Tradicional",
    types: ["TRADICIONAL"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.99,
  },
  {
    image: ExpressoCremoso,
    name: "Expresso Cremoso",
    types: ["TRADICIONAL"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.99,
  },
  {
    image: Havaiano,
    name: "Havaiano",
    types: ["ESPECIAL"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.99,
  },
  {
    image: Irlandes,
    name: "Irlandês",
    types: ["ESPECIAL", "ALCOÓLICO"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.99,
  },
  {
    image: Latte,
    name: "Latte",
    types: ["TRADICIONAL", "COM LEITE"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.99,
  },
  {
    image: Macchiato,
    name: "Macchiato",
    types: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.99,
  },
  {
    image: Mochaccino,
    name: "Mochaccino",
    types: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.99,
  }
]