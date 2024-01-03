import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {  CustomButton } from '../utils/custom';
import { getAllProcesses } from '../api/api';

const Home =  () => {
    const [processes, setProcesses ] = useState([]);

    const navigate = useNavigate();
    const handleAI = (e) =>{
        localStorage.setItem('mode','Auto');
        return navigate('/auto');
    }

    const handleManual = (e) =>{
        localStorage.setItem('mode','Manual');
        return navigate('/manual');

    }

    useEffect(() =>{

        (async () => {
            try {
                const resp = await getAllProcesses();
                setProcesses(resp.data);
            } catch (err) {
                console.error(err,'[error]-[home.js]');
            }
        })();
    },[]);
    
    return (
        <>

        <div className='container-box' key='buttons'>
            <p className ="" style={{fontSize: '20px '}} key ='ptag'>How do you want to design your process ? </p>
            <CustomButton key='Ai' style={{marginBottom: '10px'}}  className='button' variant='contained' onClick={handleAI}> 
                Create using AI
            </CustomButton> &nbsp;&nbsp;
            <CustomButton key='Manual' style={{ marginBottom: '10px'}}  className='button-color' variant='contained' onClick={handleManual}>
                Custom Process
            </CustomButton>
        </div>

        <div className='container-content' key='processes'>
            {
                processes.map((process, index) =>{
                    
                    const processData = process['formData'];
                    return (
                        <div className='container-home-page' key='divtag'>
                            <h4 key={index}>{process['prompt']}</h4>
                            
                            <div>
                                {
                                    processData.map((p , index) =>{
                                        return <p key={index}> {p.title}. {p.description}</p>
                                    }) 
                                    
                                }
                                
                            </div>
                        </div>
                    )
                    
                })
            }
        </div>
        
        </>
    );
}

export default Home;