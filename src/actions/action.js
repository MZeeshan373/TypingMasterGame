const addObj = (data) =>{
    return {type:"Add",payload:data}
    }

const   removeObj =(data)=>{
    return {type:"Remove", payload:data}
}
export  {removeObj,addObj}