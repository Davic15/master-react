import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const NewComponent = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const nextYear = () => {
        setYearNow(yearNow + 1);
    }

    const previousYear = () => {
        setYearNow(yearNow - 1);
    }

    const changeYear = (e) => {
        let value = parseInt(e.target.value);
        if (Number.isInteger(value))
        {
            setYearNow(e.target.value)
        } else {
            setYearNow(year)
        }
    }

    return (
        <div>
            <h2>Exercise with events and hooks</h2>
            <strong className='label label-green'>{yearNow}</strong>
            <p>
                <button onClick={nextYear}>Next</button>
                <br />
                <button onClick={previousYear}>Previous</button>
            </p>
            <p>
                Change year:
                <input type="text" placeholder='Change year' onChange={ changeYear } />
            </p>
        </div>
    )
}

NewComponent.propTypes = {
    year: PropTypes.number.isRequired
}
