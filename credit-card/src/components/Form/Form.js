import React, { useState } from 'react'
import './Form.css'

function Form(props) {

    const [values, setValues] = useState({
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const { onFormChange } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            onFormChange(values);
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!values.name) {
            errors.name = `Name required`;
        }
        else if (!isValidName(values.name)) {
            errors.name = `Invalid name`;
        }

        if (!values.number) {
            errors.number = 'Card number required';
        }
        else if (!isValidCardNumber(values.number)) {
            errors.number = 'Invalid card number';
        }

        if (!values.month) {
            errors.month = 'Month required';
        }
        else if (!isValidMonth(values.month)) {
            errors.month = 'Invalid month';
        }

        if (!values.year) {
            errors.year = 'Year required';
        }
        else if (!isValidYear(values.year)) {
            errors.year = 'Invalid year';
        }
        {
            if (!values.cvc) {
                errors.cvc = 'CVC required';
            }

            else if (values.cvc.length > 3) {
                errors.cvc = 'Invalid CVC';
            }
            else if (!isValidCVC(values.cvc)) {
                errors.cvc = 'CVC must be numeric';
            }
        }

        return errors;
    };

    const isValidName = (name) => {
        return /^[a-zA-Z ]{2,30}$/.test(name);
    };

    const isValidCardNumber = (number) => {
        return /^\d{16}$/.test(number);
    };

    const isValidMonth = (month) => {
        return /^(0[1-9]|1[0-2])$/.test(month);
    };

    const isValidYear = (year) => {
        return /^\d{2}$/.test(year);
    };

    const isValidCVC = (cvc) => {
        return /^\d{3}$/.test(cvc);
    };


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label>CARDHOLDER NAME</label>
                <input
                    type="text"
                    name="name"
                    placeholder="e.g. Jane Appleseed"
                    value={values.name}
                    onChange={handleChange}
                />
                {formErrors.name && <div className="error">{formErrors.name}</div>}
                <label>CARD NUMBER</label>
                <input
                    type="text"
                    name="number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    value={values.number}
                    onChange={handleChange}
                />
                {formErrors.number && <div className="error">{formErrors.number}</div>}
                <div className='date-cvc-container' >
                    <div>
                        <label>EXP. DATE (MM/YY)</label>
                        <div className='single-row'>
                            <div>
                                <input
                                    type="text"
                                    placeholder="MM"
                                    name="month"
                                    value={values.month}
                                    onChange={handleChange}
                                />
                                {formErrors.month && <div className="error">{formErrors.month}</div>}

                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="YY"
                                    name="year"
                                    value={values.year}
                                    onChange={handleChange}
                                />
                                {formErrors.year && <div className="error">{formErrors.year}</div>}

                            </div>
                        </div>
                    </div>
                    <div>
                        <label>CVC</label>
                        <input
                            type="text"
                            placeholder="e.g. 123"
                            name="cvc"
                            value={values.cvc}
                            onChange={handleChange}
                        />
                        {formErrors.cvc && <div className="error">{formErrors.cvc}</div>}

                    </div>
                </div>
                <button type="submit" className='confirm-btn'>
                    Confirm
                </button>
            </form>
        </div>
    );
}

export default Form;
