import { getCities } from "../api";

export const getAlianca = async (value: any) => {
    const response = getCities.get(`/dadosAlianca?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}

export const getRecife = async (value: any) => {
    const response = getCities.get(`/dadosRecife?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}

export const getOlinda = async (value: any) => {
    const response = getCities.get(`/dadosOlinda?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}

export const getJaboatao = async (value: any) => {
    const response = getCities.get(`/dadosJaboatao?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}

export const getAbreueLima = async (value: any) => {
    const response = getCities.get(`/dadosAbreueLima?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}

export const getCabo = async (value: any) => {
    const response = getCities.get(`/dadosCabodeSantoAgostinho?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}

export const getCamaragibe = async (value: any) => {
    const response = getCities.get(`/dadosCamaragibe?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}

export const getSaoLourenco = async (value: any) => {
    const response = getCities.get(`/dadosSaoLourenco?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}

export const getCasosTotais = async (value: any) => {
    const response = getCities.get(`/casosTotais?pageSize=${value}`)
    response.then(function(resolve){
        // console.log(resolve.data)
        return resolve.data
    })
    // console.log((response))
    return response;
}