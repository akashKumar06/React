import React from 'react';

const Tasks = (props) => {
    return (
        <div className='container mt-3'>
            {props.items.map((item)=> (
                <div key={item.id}>{item.task}</div>
            ))}
        </div>
    );
}

export default Tasks;