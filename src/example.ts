let firstName:string ="fruit"
 let count:number=24
 let isLoading:boolean = true
 let numbers:undefined = undefined
 let age:null = null
 let birth:null|string = null
 birth="fhgf"


 const user={
    name:"surenra",
    age:24,
    id:1
}

//array

const fruits  =["banan","apple",4]
fruits.push(4)

const users:{id:number,name:string}[]=[{id:1,name:""},{id:1,name:""}]
//functions

const sum=(a:number,b:number)=>{
    return a+b
}
sum(2,4)


const handleApiResponse=(payload:{userId:number},callback:(a:number,b:number)=>void)=>{
    callback(1,2)
}
handleApiResponse({userId:1},sum)


//interface-----data structure define

interface User{
   name:string;
   id:number,
   getUser:()=>void

}
let data:User={
    name:"fjfk",
    id:1,

    getUser:()=>{

    }
}


//type--data tructure define ...difference is 
type Data={

}