import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;
    let ValidationError = null;
    const classes = ["InputElement"];
    if(props.isValid && props.shouldValidate && props.touched){
        classes.push('InValid');
        ValidationError = <p>Please Enter a valid value!</p>
    }

    // if(props.isValid && props.touched){

    // }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={classes.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                 />;
                break;
        case ('textArea'):
            inputElement = <textarea
                className="InputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className="InputElement"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
            className="InputElement" 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed} />;
    }

    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
            {ValidationError}
        </div>
    );
}

export default Input;