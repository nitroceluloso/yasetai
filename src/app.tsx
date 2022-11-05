import React from 'react';
import { Theme } from './components/context/theme/default';
import { GoalForm } from './components/molecules/goal-form/GoalForm';

export const App = () => (
    <div>
        <Theme>
            <GoalForm />
        </Theme>
    </div>
);