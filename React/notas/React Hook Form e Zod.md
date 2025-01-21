O [React Hook Form](https://www.react-hook-form.com/) é uma biblioteca que implementa uma nova funcionalidade aos formulários react, trazendo mais simplicidade e novas ferramentas.

O [Zod](https://zod.dev/) é uma biblioteca que implementa validações de formulários que possui integração com o React Hook Form.

```ts
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
```

Criação de um esquema de validação com Zod:
```ts
const newCycleFormValidationSchema = zod.object({
	task: zod.string().min(1, "Informe a tarefa"),
	minutesAmount: zod
		.number()
		.min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
		.max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;
```

Criação do formulário com React Hook Form:
```ts
const newCycleForm = useForm<NewCycleFormData>({
resolver: zodResolver(newCycleFormValidationSchema),
	defaultValues: {
		task: "",
		minutesAmount: 0,
	},
});

const { handleSubmit, watch, reset } = newCycleForm;

const task = watch("task");
const isSubmitDisabled = !task;

function handleCreateNewCycle(data: NewCycleFormData) {
	createNewCycle(data);
	reset();
}

<form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
	<FormProvider {...newCycleForm}>
		<NewCycleForm />
	</FormProvider>
	
	
	<StartCountdownButton disabled={isSubmitDisabled} type="submit">
		<Play size={24} />
		Começar
	</StartCountdownButton>
</form>
```

O React Hook Form fornece diversas ferramentas para manipulação do formulário.

handleSubmit: função que é chamada ao enviar o formulário, retorna as informações do formulário no data, as informações são relativas aos inputs que foram anteriormente registrados no newCycleForm com a função register.

```ts
<label htmlFor="task">Vou Trabalhar em</label>

<TaskInput
	id="task"
	list="task-suggestions"
	placeholder="Dê um nome para o seu projeto"
	{...register("task")}
/>

<label htmlFor="minutesAmount">Durante</label>

<MinutesAmountInput
	type="number"
	id="minutesAmount"
	placeholder="00"
	step={5}
	min={5}
	max={60}
	{...register("minutesAmount", { valueAsNumber: true })}
/>

<span>minutos.</span>
```

register: função que nomeia o input e passa para o formulário o campo registrado para que os valores que foram enviados possam ser acessados posteriormente.

watch: função que transforma o formulário em um controlled form, ou seja, possibilita que o app possa realizar mudanças em tela conforme as variáveis são modificas, por exemplo um disabled.

```ts
<StartCountdownButton disabled={isSubmitDisabled} type="submit">
		<Play size={24} />
		Começar
	</StartCountdownButton>
```

reset: função que zera os valores dos campos registrados no formulário para o valor padrão.

O React Hook Form já possui um Context Provider, sendo possível acessar o formulário e suas funções em vários arquivos a partir do componente pai. Como é o caso acima, onde o form está em um arquivo separado do restante da lógica por trás dos dados enviados pelo formulário.

formState: retorna os erros relativos ao envio do formulário.

```ts
	const { formState } = newCycleForm;
	console.log(formState.errors);
```

Para usá-los no projeto basta rodar no terminal:
```
npm i react-hook-form
npm i @hookform/resolvers 

npm i zod 
```