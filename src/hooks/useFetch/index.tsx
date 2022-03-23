import {useQuery} from 'react-query'
import axios from 'axios'
import { IResponse } from './types'

export function useFetch() {
    const {data, isLoading, isError} = useQuery<IResponse[]>('repo', async () => {
        const response = await axios.get('https://gist.githubusercontent.com/creathusjobs/3c53322e8dc8c3b524cfb2623c097cc5/raw/adc988f34c4fb1a0fe12035b4b030259776115ea/response.json')

        return response.data
    })

    return {data, isLoading, isError}
}