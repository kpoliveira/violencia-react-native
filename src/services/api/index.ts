import axios from "axios";

export const getCities = axios.create({
    baseURL: 'http://10.0.0.132:5000'
    //ENDEREÇO LOCAL DA MÁQUINA (IPv4) ONDE ESTÁ SENDO EXECUTADA A API+
    //no serviço criado, o endereço original que é gerado pela api é http://localhost:5000/api-docs/
})