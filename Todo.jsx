import './Todo.css'

function Todo({title, OnToDoDelete}) {

    return (
        <div className='todo'>
        <p>{title}</p>  
        <button onClick={OnToDoDelete}>Delete</button>
       </div>      
    );
}

export default Todo

