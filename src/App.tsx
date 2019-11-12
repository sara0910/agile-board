import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import AgileBoard from './AgileBoard';
import './App.css';
import { IBoard } from './components/Board';

const StyledApp = styled.div<{}>`
    padding: 1em;
`;

const boards: Array<IBoard> = [
    {
        userName: 'user1',
        tasks: [
            {
                title: 'Title 1',
                task: 'Create a agile board to create and manage stories and tasks which enables people to get clear view on what they needs to do for each sprint and each day'
            }
        ]
    }
];

const App: React.FC = () => {
    return (
        <StyledApp>
            <Header />
            <AgileBoard boards={boards} />
        </StyledApp>
    );
}

export default App;
