import '../../index.scss';
import {useState} from "react"

function App() {
    let [counter, setCounter] = useState(0)
    const handleDecrement = () => {
        if (counter > 0)
            setCounter(--counter)
        else setCounter(0)
    }
    const handleIncrement = () => {
        setCounter(++counter)
    }

    return (
        <div className="App">
            <div>
                <h2>Counter:</h2>
                <h1>{counter}</h1>
                <button onClick={handleDecrement} className="minus">- Minus</button>
                <button onClick={handleIncrement} className="plus">Plus +</button>
            </div>
        </div>
    );
}

export default App;
