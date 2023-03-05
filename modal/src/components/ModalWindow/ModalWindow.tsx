import React from 'react';

export interface IModalWindowProps {
    value: boolean,
    handler: () => void
}

const ModalWindow: React.FC<IModalWindowProps> = ({value, handler}) => {
    return (
        <div className={value ? 'overlay animated show' : 'overlay animated'}>
            <div className="modal">
                <svg onClick={handler} height="200" viewBox="0 0 200 200" width="200">
                    <title/>
                    <path
                        d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                </svg>
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDg0NzhiYjgxMGZlYjczYTNkNTc0ZWE4NDcxMDVlNGZiNDA0Y2E2MiZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif" alt="gif image"/>
            </div>
        </div>
    );
}

export default ModalWindow;