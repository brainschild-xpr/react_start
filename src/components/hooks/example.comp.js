import React, { useState } from 'react'

function Example() {
    const [count, setCount] = useState(0)
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            
      </button>
        </div>
    )
}

export default Example