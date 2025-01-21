O [date-fns](https://date-fns.org/) é uma biblioteca JavaScript usada para manipulação de datas de forma mais simplificada, ela possui funções muito úteis no desenvolvimento que podem ser usadas em diversas situações.

```ts
import { differenceInSeconds } from "date-fns";

const secondsDifference = differenceInSeconds(
	new Date(),
	new Date(activeCycle.startDate)
);
```

```ts
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

formatDistanceToNow(new Date(cycle.startDate), {
	addSuffix: true,
	locale: ptBR
})
```

Esses são alguns usos da date-fns para cálculo e formatação de data.

Para usar o date-fns no projeto basta rodar no terminal:
```
npm i date-fns
```


