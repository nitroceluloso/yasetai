import React from 'react';
import { Theme } from './components/context/theme/default';
import GoalForm from './components/organisms/GoalForm';

export const App = () => (
    <div>
        <Theme>
            <GoalForm />
        </Theme>
    </div>
);