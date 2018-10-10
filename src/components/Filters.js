import React, { Component } from "react";
import "../styles/Filters.css";
import PropTypes from "prop-types";

class Filters extends Component {
    render() {
        const { 
            valueInput, 
            handleLetterChange, 
            handleSelect 
        } = this.props;
        return (
            <div className="BoxInput">
                <input className="Input"
                    value={valueInput}
                    placeholder="Ej. Harry Potter"
                    onChange={handleLetterChange}
                />
                <select name="" id="" onChange={handleSelect}>
                    <option value="Vivo">Vivo</option>
                    <option value="Muerto">Muerto</option>
                    <option value="Todos">Todos</option>
                </select>
            </div>
        );
    };
};

Filters.propTypes = {
    valueInput: PropTypes.string,
    handleLetterChange: PropTypes.func
};

export default Filters;
