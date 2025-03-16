import axios from 'axios';

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:'https://bug-free-fortnight-9776j4wx74rgcrvp-1337.app.github.dev/api/user-resumes',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ${API_KEY}'

    }
})

const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

export default{
    CreateNewResume,
    GetUserResumes
}