import React, {useEffect, useState} from 'react';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import { submitProcess } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { CustomTextField, CustomButton } from '../utils/custom';

const Manual = () =>{
    const [inputs, setInputs] = useState([{title: "", description: "", metadata: ""}]);
    const navigate = useNavigate();
    const [prompt, setPrompt] = useState(JSON.parse(localStorage.getItem('prompt')));
    const mode = localStorage.getItem('mode');

    const flag = mode === 'Manual' ? true : false;

    useEffect(()=>{
        const response = JSON.parse(localStorage.getItem('response'))
        if(response && response.length){
            const temp = [];
            response.forEach((ele) =>{
                const obj = {};
                obj['title'] = 'Step ' + ele['step'];
                obj['description'] = ele['details'];
                obj['metadata'] = '';
                temp.push(obj);
            });

            console.log(temp,'[temp]');
        
            temp.length ? setInputs(temp) : setInputs([{title: "", description: "", metadata: ""}]);
        }

    },[]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            console.log(inputs,'[inputs]');
            await submitProcess({formData : inputs, mode, prompt});
            localStorage.clear();
            return navigate('/');
        } catch (err) {
            console.error(err, 'error in submitting form');

        }
    }
    
    const handleChange = (event,index) =>{
        const {name, value} = event.target;
        const onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
    }

    const handlePromptChange = (e) =>{
        setPrompt(e.target.value);
    }

    const handleAddInput = () =>{
        setInputs([...inputs, {title: "", description: "", metadata: ""} ])
    }

    const handleDeleteInput = (index) =>{
        const newArray = [...inputs] ;
        newArray.splice(index,1);
        setInputs(newArray);
    }

    const handleUpwardButton = (e,index) =>{
        const tabs = [...inputs];
        const tab = tabs.splice(index,1);
        tabs.splice(index-1, 0, tab[0]);
        setInputs(tabs);

    }

    const handleDownwardButton = ( e,index) =>{
        const tabs = [...inputs];
        const tab = tabs.splice(index,1);
        tabs.splice(index+ 1, 0, tab[0]);
        setInputs(tabs);
    } 

    return (
        <div className='container-form'>
            <form onSubmit={handleSubmit}>
                <p >Please describe the name of the process and the steps involved</p>
                <br/>
                 <CustomTextField
                    name='prompt'
                    label ='Name the Process'
                    type='text'
                    value= {prompt}
                    onChange={(e) =>handlePromptChange(e)}
                    required
                />
                {
                    inputs.map((item,index) =>(
                        <div className='input_container' key={index}>

                            <CustomTextField
                                name='title'
                                label='Title'
                                type='text'
                                value={item.title}
                                onChange={(e) =>handleChange(e,index)}
                                required
                                
                            />

                            <CustomTextField
                                name='description'
                                label='Description'
                                type='text'
                                value= {item.description}
                                required
                                onChange={(e) =>handleChange(e,index)}
                            />

                            {
                                flag && (
                                    <CustomTextField
                                        name='metadata'
                                        label='Metadata'
                                        type='text'
                                        value= {item.metadata}
                                        onChange={(e) =>handleChange(e,index)}
                                    />
                                )
                            }
                            
                            {
                                index === inputs.length -1 && (
                                    <IconButton aria-label='add' onClick={handleAddInput}>
                                        <AddCircleOutlinedIcon fontSize='large' style={{fill: '#6971a0'}} />
                                    </IconButton>
                                )
                            }

                            {
                                index !== 0 && (
                                    <IconButton aria-label='upwardArrow' onClick={(e) => handleUpwardButton (e,index)} >
                                        <ArrowCircleLeftIcon fontSize='large' style ={{transform: 'rotate(90deg)', fill: '#6971a0'}} />
                                    </IconButton>
                                )
                            }


                            {
                                index !== inputs.length - 1 && (
                                    <IconButton aria-label='downwardArrow' onClick={(e) => handleDownwardButton (e, index)}>
                                        <ArrowCircleRightIcon fontSize='large' style={{transform: 'rotate(90deg)',fill: '#6971a0'}}/>
                                    </IconButton>
                                )
                            }

                            {
                                inputs.length > 1 && (
                                    <IconButton aria-label='delete' onClick={() => handleDeleteInput(index)}>
                                        <DeleteIcon fontSize='large' style={{fill: '#cf1300'}}/>
                                    </IconButton>
                                )
                            }

                        </div>
                    ))
                }
                <br/>
                <CustomButton 
                    style={{ marginBottom: '10px'}} 
                    type='submit' 
                > 
                    Submit 
                </CustomButton>
            </form>
        </div>
    )
}

export default Manual;