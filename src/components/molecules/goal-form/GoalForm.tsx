import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
    GoalFormContainer,
    GoalFormStyl,
    InputStyl,
    LabelStyl,
    RowStyl,
    SubmitInput
} from './GoalForm.style';
import * as yup from 'yup';

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

const schema = yup.object({
    currentWeight: yup.number().positive().required(),
    desireWeight: yup.number().positive().required(),
    weeklyGoal: yup.number().positive().required(),
}).required();

export const GoalForm = () => {
    const { register, handleSubmit, watch, formState } = useForm<FormType>({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    // console.log(watch('currentWeight'))
    // console.log(formState.errors)

    return (
        <GoalFormContainer>
            <GoalFormStyl onSubmit={handleSubmit(onSubmit)}>
                <RowStyl>
                    <LabelStyl htmlFor="currentWeightInput">Peso actual</LabelStyl>
                    <InputStyl
                        id="currentWeight"
                        type="number"
                        { ...register('currentWeight') }
                    />
                </RowStyl>
                <RowStyl>
                    <LabelStyl htmlFor="">Peso deseado</LabelStyl>
                    <InputStyl
                        id='desireWeight'
                        type="number"
                        { ...register('desireWeight') }
                    />
                </RowStyl>
                <RowStyl>
                    <LabelStyl htmlFor="weeklyGoal">Objetivo semanal</LabelStyl>
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
