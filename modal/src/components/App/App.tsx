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
                <button>validate</button>
            </ModalWindow>
        </div>
    );
}

export default App;
