import { MockMethod } from 'vite-plugin-mock'

export default [{
    url: '/api/signin',
    method: 'post',
    response: ({ body, query }) => {
        console.log(body, query)
        
        return {
            code: 200,
            message: 'success',
            data: null
        }
    }
}] as MockMethod[]