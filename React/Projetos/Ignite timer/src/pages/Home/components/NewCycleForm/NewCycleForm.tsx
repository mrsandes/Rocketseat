import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
	const { register } = useFormContext()
  const { activeCycle } = useContext(CyclesContext);

  return (
    <FormContainer>
      {!activeCycle ? (
        <>
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
        </>
      ) : (
        <span>Trabalhando em {activeCycle.task}</span>
      )}
    </FormContainer>
  );
}
