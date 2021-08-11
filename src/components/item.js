import { useEffect, useState } from "react";



export default function Item(){
    const [products, setProducts]= useState([])
    useEffect(()=>{

        const task= new Promise((resolve,reject)=>{

            const data = [{
                    id:"01",
                    name:"desayuno premium",
                    description:"desayuno con accesorios metalizados",
                    stock:11
                },
                {
                    id:"02",
                    name:"desayuno small",
                    description:"desayuno pequeño",
                    stock:5
                }
                ,
                {
                    id:"03",
                    name:"desayuno medium",
                    description:"desayuno mediano",
                    stock:5
                }
                ]
                    setTimeout(()=>resolve(data),3000)
                }).then((dataResolve)=>{
                    console.log('data Resolve',dataResolve)
                    setProducts(dataResolve)
            
                }).catch((error)=>{
                    console.log('err',error)
            })

    },[])
    return(
        <div>
            {products.map((cadaProducto)=> 
            <h3>{cadaProducto.name}</h3>
            )}
        </div>
    )
}