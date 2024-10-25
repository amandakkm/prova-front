import axios from 'axios';
import { PerfilUsuario } from '../interfaces/PerfilUsuario'

const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app/api',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const CriarUsuario = (dadosUsuario: PerfilUsuario) =>{
    return apiClient.post('/User', dadosUsuario)
}