import React, { useState } from 'react';
import styled from 'styled-components';

import Board, { IBoard } from './components/Board';
import { ITask } from './components/Task';
import Button from './components/Button';
import { IoIosAddCircle } from 'react-icons/io';

const StyledAgileBoard = styled.div<{}>`
    display: flex;
    align-items: start;
    overflow-x: scroll;
    .grid-h {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 3em;
        padding: 12px 0;
        grid-auto-rows: minmax(150px, auto);
        grid-auto-columns: 250px;
    }
`;

interface IAgileBoard extends React.HTMLAttributes<HTMLDivElement> {
    boards: Array<IBoard>;
}

const AgileBoard: React.FC<IAgileBoard> = ({ boards: boardsList }) => {
    const [boards, setBoards] = useState<Array<IBoard>>(boardsList);

    const handleAddBoard = (userName: string, task: ITask) => {
        const fBoard = boards.find(board => board.userName === userName) || { userName, tasks: [] };
        setBoards(boards.map(board => board.userName === userName ? { ...fBoard, tasks: [...board.tasks, task] } : board));
    }

    const handleAddUser = (userName: string) => {
        setBoards([...boards, { userName, tasks: [] }]);
    }

    const addUser = () => {
        const userName = window.prompt('Enter Username');
        if (!userName) {
            window.alert('Username cannot be empty!');
            return;
        }
        if (boards.find(board => board.userName === userName)) {
            window.alert('Username already exists!');
            return;
        }
        handleAddUser(userName);
    }

    return (
        <StyledAgileBoard>
            <div className="grid-h">
                {boards && boards.map((board, idx) => <Board key={idx} onBoardAdd={handleAddBoard} {...board} />)}
            </div>
            <Button onClick={() => addUser()}>
                <IoIosAddCircle color='#F4511E' size={35} />
                <span>Add New User</span>
            </Button>
        </StyledAgileBoard>
    );
};

export default AgileBoard;