import React from 'react';
import PropTypes from 'prop-types';

export const ThirdComponent = ({name, surname, record}) => {
    //* Props to share data between components.
    //* With props or with {name} to access to the variable.
    //* We can validate our props
    console.log(name, surname, record);
    return (
        <div>
            <h1>Communication</h1>
            <ul>
                <li>{ name }</li>
                <li>{ surname }</li>
                <li>{ record.bloodType }</li>
            </ul>
        </div>
    )
}


ThirdComponent.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    record: PropTypes.object
}

ThirdComponent.defaultProps = {
    name: 'Ari',
    surname: 'Macias'
}