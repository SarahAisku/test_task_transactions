import React from "react";

interface InputProps {
    text: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

const Input: React.FC<InputProps> = ({ text, placeholder, value, onChange, type = "text" }) => {    
    return(
        <div className="Input-Container">
            <p className="Input-p">{text}</p>
            <input className='Input-input' 
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
                type={type}
            ></input>
        </div>
    )
};
export default Input;