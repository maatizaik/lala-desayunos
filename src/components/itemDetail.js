import { useEffect, useState } from "react";

export default function ItemDetail() {
        const [products, setProducts]= useState([])
        useEffect(()=>{
    
            const task= new Promise((resolve,reject)=>{
    
                const data = [{
                        id:"01",
                        name:"desayuno premium",
                        description:"desayuno con accesorios metalizados",
                        stock:11,
                        precio:"$50"
                    },
                    {
                        id:"02",
                        name:"desayuno small",
                        description:"desayuno pequeño",
                        stock:5,
                        precio:"$20"
                    },
                    {
                        id:"03",
                        name:"desayuno medium",
                        description:"desayuno mediano",
                        stock:5,
                        precio:"$35"
                    }
                    ]
                        setTimeout(()=>resolve(data),2000)
                    }).then((dataResolve)=>{
                        console.log('data Resolve',dataResolve)
                        setProducts(dataResolve)
                
                    }).catch((error)=>{
                        console.log('err',error)
                })
    
        },[])
        return(
            <div>
                {products.map((cadaProducto2)=> 
                <h3>{cadaProducto2.description}</h3>,
                <h2>{cadaProducto2.precio}</h2>
                )}
            </div>
        )
    }