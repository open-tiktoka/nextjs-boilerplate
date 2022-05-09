//
// API HTTP Response, Request Query Types
// ...
//

export type THTTPResponse<T> = {
    message: string
    code: number
    data?: T
}

export type THTTPRequestQuery<T> = {
    query: T
}

//
// END
//
