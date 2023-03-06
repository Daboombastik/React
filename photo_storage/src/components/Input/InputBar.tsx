import React from 'react';
import {InputBarType} from "../../types/InputBarType";

const InputBar: React.FC<InputBarType> = ({value, callback}) => {
    return (
        <div>
            <input value={value}
                   onChange={(event) => {
                       console.log(event.target.value);
                       callback(event.target.value)
                   }}
                   className="search-input"
                   placeholder="Search by name"/>
        </div>
    );
};

export default InputBar;