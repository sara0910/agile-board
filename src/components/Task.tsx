import React from 'react';
import styled from 'styled-components';

const StyledTask = styled.div<{}>`
    border: 1px solid #eee;
    border-radius: 5px;
    background: #fff;
    box-shadow: 1px 1px 10px #eee;
    display: flex;
    flex-direction: column;
    h4 {
        margin: 0;
        padding: 12px;
    }
    p {
        margin: 0 12px 12px;
        padding: 12px;
        border-radius: 5px;
        background: #81D4FA;
        font-size: 12px;
        flex: 1;
    }
`;

export interface ITask {
    title: string;
    task: string;
}

const Task: React.FC<ITask> = ({ title, task }) => (
    <StyledTask>
        <h4>{title}</h4>
        <p>{task}</p>
    </StyledTask>
);

export default Task;