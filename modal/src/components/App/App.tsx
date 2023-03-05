import React from 'react';
import '../../index.scss';
import ModalWindow from "../ModalWindow/ModalWindow";

function App() {
    const [isVisible, setIsVisible] = React.useState(false);
    const handleModalWindow = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="App">
            <button onClick={handleModalWindow} className="open-modal-btn">✨ Open modal window</button>
            <ModalWindow value={isVisible} handler={handleModalWindow}>
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDg0NzhiYjgxMGZlYjczYTNkNTc0ZWE4NDcxMDVlNGZiNDA0Y2E2MiZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif" alt="gif image"/>
                <button>validate</button>
            </ModalWindow>
        </div>
    );
}

export default App;
