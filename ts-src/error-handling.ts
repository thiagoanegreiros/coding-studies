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

type FinalResult = {
    successItems: Pensamento[],
    errorItems: { index: number, id: number, reason: string }[]
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
        console.info(results.reduce((acc: FinalResult, result: PromiseSettledResult<AxiosResponse<Pensamento, any>>, index: number): FinalResult => {
            if (result.status === 'rejected') {
                console.error(`Result error ${result.reason}`)
                acc.errorItems.push({
                    index,
                    id: pensamentos[index].id,
                    reason: result.reason.message
                })
            } else {
                console.info(`success with id ${result.value.data.id}`)
                acc.successItems.push(result.value.data)
                console.info(result.value.data)
            }
            return acc
        }, { successItems: [], errorItems: []}))
    })
}

makeRequest()
