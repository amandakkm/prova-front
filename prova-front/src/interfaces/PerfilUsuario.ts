import {lstAddress} from './Endereco'
import { tipoPerfil } from './TipoPerfil'

export interface PerfilUsuario{
    name: string
    email: string
    senha: string
    foto: string
    tipoPerfil: Array<tipoPerfil>
    enderecos: Array<lstAddress>
    unidade: string
  }
  
  
  