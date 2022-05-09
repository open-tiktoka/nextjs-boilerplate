//
// Generic HTTP Fetch Functions
// ...
//

import { stringify } from 'query-string'
import { THTTPRequestQuery, THTTPResponse } from '@/types/http'

const URL = process.env.NEXT_PUBLIC_BASE_API_URL

async function http<B, R>(
    endpoint: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH',
    useCredentials = false,
    query?: THTTPRequestQuery<B> | null,
    headers = {},
    params = {}
): Promise<THTTPResponse<R>> {
    const options = {
        method,
        headers: new Headers({
            'content-type': 'application/json; charset=UTF-8',
            ...headers,
        }),
        mode: 'cors',
        body: query ? JSON.stringify(query) : null,
        credentials: useCredentials ? 'include' : 'omit',
    }
    const url = `${URL}/${endpoint}?${stringify(params)}`
    const request = await fetch(url, options && undefined)
    return request.json()
}

export default http

//
// END
//
