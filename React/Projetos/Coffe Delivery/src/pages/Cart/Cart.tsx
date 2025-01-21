import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { FormContainer, LocalContainer, PaymentContainer } from "./styles";
import { useState } from "react";

const newCoffeFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(9, "O CEP deve conter 8 números e 1 '-'")
    .max(9, "O CEP deve conter 8 números e 1 '-'"),
  street: zod.string().min(1, "Digite o nome da rua"),
  number: zod.string().min(1, "Digite o número do endereço"),
  complement: zod.string(),
  neighborhood: zod.string().min(1, "Digite o nome do bairro"),
  city: zod.string().min(1, "Digite o nome da cidade"),
  state: zod
    .string()
    .min(2, "Digite a sigla do estado")
    .max(2, "A sigla deve possuir 2 letras"),
  payment: zod.enum(["creditCard", "debitCard", "cash", "none"], {
    invalid_type_error: "Selecione um método de pagamento válido",
  }),
});

type NewCoffeFormData = zod.infer<typeof newCoffeFormValidationSchema>;

interface Order {
  orderInfo: NewCoffeFormData;
  date: Date;
  id: number;
}

export function Cart() {
  const CoffeForm = useForm<NewCoffeFormData>({
    resolver: zodResolver(newCoffeFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      payment: "none",
    },
  });

  const { register, handleSubmit, setValue, reset, watch } = CoffeForm;
  const [orders, setOrders] = useState<Order[]>([]);

  const payment = watch("payment");

  function handleClick(payment: NewCoffeFormData["payment"]) {
    setValue("payment", payment);
  }

  function finishOrder(data: NewCoffeFormData) {
    const newOrder: Order = {
      orderInfo: data,
      date: new Date(),
      id: new Date().getTime(),
    };

    console.log(newOrder);

    setOrders((state) => [...state, newOrder]);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(finishOrder)}>
        <FormContainer>
          <div>
            <h2>Complete seu pedido</h2>

            <LocalContainer>
              <div>
                <MapPinLine size={24} />
                <div>

                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>
              <div className="input-area">
                <input
                  type="text"
                  {...register("cep")}
                  placeholder="CEP"
                  required
                />
                <input
                  type="text"
                  {...register("street")}
                  placeholder="Rua"
                  required
                />
                <input
                  type="text"
                  {...register("number")}
                  placeholder="Número"
                  required
                />
                <input
                  type="text"
                  {...register("complement")}
                  placeholder="Complemento opcional"
                />
                <input
                  type="text"
                  {...register("neighborhood")}
                  placeholder="Bairro"
                  required
                />
                <input
                  type="text"
                  {...register("city")}
                  placeholder="Cidade"
                  required
                />
                <input
                  type="text"
                  {...register("state")}
                  placeholder="UF"
                  required
                />
              </div>
            </LocalContainer>

            <PaymentContainer>
              <div>
                <CurrencyDollar size={24} />

                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>

              <div className="button-area">
                <button
                  type="button"
                  onClick={() => handleClick("creditCard")}
                  className={payment === "creditCard" ? "selected" : ""}
                >
                  <div className="button-content">
                    <CreditCard size={16} />
                    <span>CARTÃO DE CRÉDITO</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleClick("debitCard")}
                  className={payment === "debitCard" ? "selected" : ""}
                >
                  <div className="button-content">
                    <Bank size={16} />
                    <span>CARTÃO DE DÉBITO</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleClick("cash")}
                  className={payment === "cash" ? "selected" : ""}
                >
                  <div className="button-content">
                    <Money size={16} />
                    <span>DINHEIRO</span>
                  </div>
                </button>
              </div>
            </PaymentContainer>
          </div>

          <div>
            <h2>Cafés Selecionados</h2>
            <button type="submit">Finalizar Pedido</button>

            <OrderContainer>
              {coffe ? (
                coffes.map(coffe => {
                  return (
                    <ItemContainer coffe={coffe}/>
                  )
                })
              ) : (
                <p>adicone itens ao carrinho</p>
              )}
            </OrderContainer>
          </div>
        </FormContainer>
      </form>
    </>
  );
}
