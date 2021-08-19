import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";

export default function ItemDetailContainer() {
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
                    }
                    ,
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
            <div style={{fontSize:"15rem", color:"grey", padding:"20%"}}>
                <ItemDetail/>
            </div>
        )
    }