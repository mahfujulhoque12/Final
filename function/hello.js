
const items=[
    {id:1,name:'Badon'},
    {id:2,name:'Mahfuj'}
]

exports.handler= async function(event,context){
    return{
        statusCode:200,
        body:JSON.stringify(items)
    }
}