import axios from 'axios'

type Version = {
    name: string
    id: string
}

type Pagination<T> = {
    items: T[]
}

const execute = async() => {
    const versionList = 'http://localhost:3000/dev/versions'
    const items = (await axios.get<Pagination<Version>>(versionList)).data.items
    items.push({
        id: 'FAKE',
        name: 'FAKE'
    })
    const names = await Promise
        .allSettled(items.map((version) => axios.get<Version>(`${versionList}/${version.id}`)))
        .then((results) => {
            return results.reduce((acc: string[], promise, index) => {
                if (promise.status === 'rejected') {
                    console.info(`Item ${items[index].id} had an issue`)
                } else {
                    acc.push(promise.value.data.name)
                }
                return acc
            }, [])
        })
    console.info(names)
}

execute()
