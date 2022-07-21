import { MockMethod } from 'vite-plugin-mock'

export default [{
    url: '/api/demo/detail',
    method: 'get',
    response: ({ query }) => {
        console.log(query)
        
        return {
            code: 200,
            message: 'success',
            data: null
        }
    }
}, {
    url: '/api/demo/list',
    method: 'get',
    response: ({ query }) => {
        let list: Array<Object> = new Array(10)
        list.map((_, idx) => {
            return {
                id: idx,
                name: 'name ' + idx,
                description: 'description for ' + idx
            }
        })
        
        return {
            code: 200,
            message: 'success',
            data: {
                list
            }
        }
    }
}, {
    url: '/api/demo/add',
    method: 'get',
    response: ({ query }) => {
        console.log(query)
        
        return {
            code: 200,
            message: 'success',
            data: null
        }
    }
}, {
    url: '/api/demo/update',
    method: 'get',
    response: ({ query }) => {
        console.log(query)
        
        return {
            code: 200,
            message: 'success',
            data: null
        }
    }
}] as MockMethod[]