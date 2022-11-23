import React from 'react';
import { useForm } from 'react-hook-form';
import InputStyl from '../../atoms/Input';
import Label from '../../atoms/Label';
import {
    GoalFormContainer,
    GoalFormStyl,
    RowStyl,
    SubmitInput
} from './GoalForm.style';

type FormType = {
    currentWeight: number;
    desireWeight: number;
    weeklyGoal: number;
}

const weeklyOptions = [
    { text: '500 gr', value: "500" },
    { text: '600 gr', value: "600" },
    { text: '700 gr', value: "700" },
    { text: '800 gr', value: "800" },
    { text: '900 gr', value: "900" },
    { text: '1 Kg', value: "1000" },
];

export const GoalForm = () => {
    const { register, handleSubmit, formState } = useForm<FormType>();
    const onSubmit = data => console.log(data);

    const restriction = {
        required: true,
        min: 50,
        max: 120,
        valueAsNumber: true
    }

    return (
        <GoalFormContainer>
            <GoalFormStyl onSubmit={handleSubmit(onSubmit)}>
                <RowStyl>
                    <Label htmlFor="currentWeightInput">Peso actual</Label>
                    <InputStyl
                        id="currentWeight"
                        type="number"
                        { ...register('currentWeight', restriction) }
                    />
                    <span>{formState.errors.currentWeight?.type === 'required' ? 'This field is required' : ''}</span>
                </RowStyl>
                <RowStyl>
                    <Label htmlFor="">Peso deseado</Label>
                    <InputStyl
                        id='desireWeight'
                        type="number"
                        { ...register('desireWeight', restriction) }
                    />
                    <span>{formState.errors.desireWeight?.type  === 'required' ? 'This field is required' : ''}</span>
                </RowStyl>
                <RowStyl>
                    <Label htmlFor="weeklyGoal">Objetivo semanal</Label>
                    <select
                        id="weeklyGoal"
                        { ...register('weeklyGoal', { required: true }) }
                    >
                        {weeklyOptions.map( el => (
                            <option value={el.value} key={el.value}>{el.text}</option>
                        ))}
                    </select>
                </RowStyl>
                <RowStyl>
                    <SubmitInput type="submit" value="Continuar" />
                </RowStyl>
            </GoalFormStyl>
        </GoalFormContainer>
    )
}
