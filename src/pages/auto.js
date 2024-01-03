import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAutomatedProcess } from '../api/api';
import { CustomButton, CustomTextField } from '../utils/custom';
import { CircularProgress } from '@mui/material';


const Auto = () =>{
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUserInputChange = (e) =>{
        setUserInput(e.target.value);
    }

    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);

        try {
            const resp = await postAutomatedProcess(userInput);
            localStorage.setItem('prompt', JSON.stringify(userInput));
            localStorage.setItem('response', JSON.stringify(resp.data));
            navigate('/manual');
        } catch (err) {
            console.error(err, '[error in getting api response]');

        }

    }


    return (
        <div className='container-form'>
            
            <form onSubmit={handleFormSubmit}>

                <p>Describe the process below</p>
                <CustomTextField 
                    name='userInput'
                    label='User Input'
                    type='text'
                    value= {userInput}
                    required
                    onChange={handleUserInputChange}
                />

                <br/>
                <CustomButton 
                    style={{marginTop: '20px', marginBottom: '5px'}} 
                    className='custom-button' 
                    type='submit'
                > 
                    {loading ? <CircularProgress size={20} color="inherit" /> : 'NEXT'}
                </CustomButton>

            </form>
        </div>
    )
}

export default Auto;