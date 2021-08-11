export const schema = {
    title: "Chat App schema",
    type: 'object',
    primaryKey: 'id',
    version: 0,
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