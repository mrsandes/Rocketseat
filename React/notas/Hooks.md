Hooks acoplam funcionalidades a variáveis normais do JavaScript.

UseState: retorna um dado (pode ser um objeto, array de qualquer tipo) e uma função que modifica esse dado. Quando o dado é modificado por qualquer origem, o react renderiza novamente o componente ao qual esse dado pertence, juntamente com os seus filhos.

```ts
import { useState } from "react";

const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
	if (activeCycle) {
		return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
	}
	
	return 0;
});
```

Nesse caso o useState é usado para monitorar o estado da variável amountSecondsPassed, e a arrow function que foi passada para o useState inicializa o valor da variável a partir de uma lógica.

Muda o valor da variável para 0.
```ts
setAmountSecondsPassed(0);
```

É possível ainda usar o useState com arrays.

```ts
const [comments, setComments] = useState([
	'Post bacana hein'
])

setComments(state => [...state, newCommentText]);
```

Para modificar/adicionar um novo valor é preciso copiar o array anterior e ao final adicionar o novo.

useEffect: Implementa um efeito colateral, permite monitorar mudanças em uma variável e dispara uma função sempre que ela muda independente de quem a alterou, executa também quando o componente é exibido em tela pela primeira vez.

```ts
useEffect(() => {
	let interval: number;
	
	if (activeCycle) {
		interval = setInterval(() => {
			const secondsDifference = differenceInSeconds(
				new Date(),
				new Date(activeCycle.startDate)
			);
	
			if (secondsDifference >= totalSeconds) {
				markCurrentCycleAsFinished();
				setSecondsPassed(totalSeconds);
				clearInterval(interval);
			} else {
				setSecondsPassed(secondsDifference);
			}
		}, 1000);
	}
	
	return () => {
		clearInterval(interval);
	};
}, [activeCycle, activeCycleId, totalSeconds, markCurrentCycleAsFinished]);
```

Nesse caso o useEffect cria um intervalo sempre que o ciclo ativo muda, na segunda vez que ele muda, o return é disparado e finaliza o intervalo que foi criado anteriormente.

useReducer: é um hook que pode monitorar e agrupar toda a logica por trás de vários useState
em um único lugar, ou seja, trata de todas as modificação que serão feitas em um estado. Rle recebe um estado e uma ação, o estado é definido ao final com o objeto ou o tipo do dado que esta sendo tratado, o retorno dele é o estado modificado da maneira que for precisa. o useReducer recebe um terceiro parâmetro que vai recuperar os dados da aplicação, esse terceiro parâmetro é uma função q é executada na criação do reducer a função de inicialização sempre tem q retornar algo, nesse caso se não tiver nada no storage ela vai retornar o valor inicial que é o segundo parâmetro do reducer.

```ts
const [cyclesState, dispatch] = useReducer(
	cyclesReducer,
	{
		cycles: [],
		activeCycleId: null,
	},
	(initialState) => {
		const storedStateAsJSON = localStorage.getItem(
			"@ignite-timer:cycles-state-1.0.0"
		);
		
		if (storedStateAsJSON) {
			return JSON.parse(storedStateAsJSON);
		}
	
		return initialState
	}
);
```

O useReducer sempre vai estar separado em arquivos. 

```ts
export interface Cycle {
	id: string;
	task: string;
	minutesAmount: number;
	startDate: Date;
	interruptedDate?: Date;
	finishedDate?: Date;
}

interface CyclesState {
	cycles: Cycle[];
	activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesState, action: any) {
	switch (action.type) {
		case ActionTypes.ADD_NEW_CYCLE: {
			return produce(state, draft => {
				draft.cycles.push(action.payload.newCycle);
				draft.activeCycleId = action.payload.newCycle.id;
			})
		}
		
		case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
			const currentCycleIndex = state.cycles.findIndex(cycle => {
				return cycle.id === state.activeCycleId;
			})
			
			if (currentCycleIndex < 0) {
				return state;
			}
			
			return produce(state, draft => {
				draft.cycles[currentCycleIndex].interruptedDate = new Date();
				draft.activeCycleId = null;
			})
		}     
		
		case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
			const currentCycleIndex = state.cycles.findIndex(cycle => {
				return cycle.id === state.activeCycleId;
			})
		
			if (currentCycleIndex < 0) {
				return state;
			}
			
			return produce(state, draft => {
				draft.cycles[currentCycleIndex].finishedDate = new Date();
				draft.activeCycleId = null;
			})
		}
		
		default:
			return state;
	}
}
```

```ts
import { Cycle } from "./cyclesReducer";

export enum ActionTypes {
	ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
	INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
	MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function addNewCycleAction(newCycle: Cycle) {
	return {
		type: ActionTypes.ADD_NEW_CYCLE,
		payload: {
			newCycle,
		}
	}
}

export function markCurrentCyclesAsFinishedAction() {
	return {
		type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
	}
}

export function interruptCurrentCycleAction() {
	return {
		type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
	}
}
```

---

useState retorna um array numerico e uma função que altera o array orginal e avisa para a aplicação que o array teve alteração, sendo possível atualizar a tela e mostrar os novos valores que foram adicionados 
![[Pasted image 20241226155051.png]]

... spread operator: le os valores existentes e copia
![[Pasted image 20241226155011.png]]

É possível passar funções por propriedade através dos componentes

onclick espera uma função 
![[Pasted image 20241227113523.png]]
da erro pois é uma execução de uma função
![[Pasted image 20241227113612.png]]
com arrow function se torna uma função

![[Pasted image 20241227114509.png]]
aumenta de 1 em 1

![[Pasted image 20241227114635.png]]
usa o valor antigo e aumenta de 1 em 1

![[Pasted image 20241227114934.png]]
aumenta de 2 em 2
usando uma função o state acessa o valor mais recente de likeCount, criando uma fila de atualizações

![[Pasted image 20241227115619.png]]

javaScript permite mudar o tipo das variáveis no decorrer do código

const constante
let let it change 


