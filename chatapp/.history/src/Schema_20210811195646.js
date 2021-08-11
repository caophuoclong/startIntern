export const schema = {
    title: "Chat App schema",
    type: 'object',
    properties: {
        id:{
            type: 'string',
        },
        message:{
            type: 'string',
        }
    },
    require:[
        'id',
        'message',
]
}