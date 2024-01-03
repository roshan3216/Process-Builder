import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const getAllProcesses = async ()=>{
    return api.get('/');
}

export const postAutomatedProcess = async (prompt) =>{
    return api.post('/auto',{prompt});
}

export const submitProcess = async (formData) =>{
    return api.post('/submit',formData);
}