import axios, { AxiosResponse } from "axios"

Promise.allSettled([
    Promise.resolve(39),
    Promise.reject("An error occurred"),
    new Promise(resolve => setTimeout(() => resolve(100), 2000)),
    70
]).then(results => {
    const errorsCount = results.filter((i) => i.status === 'rejected').length
    console.info(`Number of error count ${errorsCount}`) 
})

type Pensamento = {
    id: number,
    conteudo: string,
    autoria: string,
    modelo: string
}

const makeRequest = async () => {
    const result: AxiosResponse<Pensamento[]> = await axios.get<Pensamento[]>('http://localhost:3000/pensamentos?_limit=3')

    const pensamentos: Pensamento[] = result.data.concat({
        autoria: 'mock',
        conteudo: 'mock',
        id: 222,
        modelo: 'mock'
    })

    Promise.allSettled(pensamentos.map((pensamento) => {
        return axios.get<Pensamento>(`http://localhost:3000/pensamentos/${pensamento.id}`)
    })).then((results) => {
        console.info('results ==> ')
        results.forEach((result) => {
            if (result.status === 'rejected') {
                console.error(`Result error ${result.reason}`)
            } else {
                console.info(`success with id ${result.value.data.id}`)
                console.info(result.value.data)
            }
        })
    })
}

makeRequest()
