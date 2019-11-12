import React from 'react';
import TaskComponent, { ITask } from './Task';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';

import Button from './Button';

const StyledBoard = styled.div<{}>`
    h3 {
        margin-bottom: 32px;
        padding-bottom: 5px;
        border-bottom: 2px solid #FF7043;
    }
    .grid-v {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1em;
        grid-auto-rows: minmax(150px, auto);
        grid-auto-columns: 250px;
    }
`;

export interface IBoard {
    userName: string;
    tasks: Array<ITask>;
}

export interface Board {
    userName: string;
    tasks: Array<ITask>;
    onBoardAdd: (userName: string, task: ITask) => void;
}

const Board: React.FC<Board> = ({ userName, tasks, onBoardAdd }) => {
    const getTask = () => {
        const title = window.prompt('Enter Task Title');
        if (!title) {
            window.alert('Task Title Cannot be Empty');
            return;
        }

        const task = window.prompt('Enter Task Description');
        if (!task) {
            window.alert('Task Details Cannot be Empty');
            return;
        }

        onBoardAdd(userName, { title, task });
    }

    return (
        <StyledBoard>
            <h3>{userName}</h3>
            <div className="grid-v">
                {tasks && tasks.length > 0 && tasks.map((task, idx) => <TaskComponent key={idx} {...task} />)}
            </div>
            <Button onClick={() => getTask()}>
                <IoIosAddCircle color='#1976D2' size={35} />
                <span>Add New Task</span>
            </Button>
        </StyledBoard>
    );
};

export default Board;