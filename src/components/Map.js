import React from 'react'


const data = [
    {id:1, name:'tv', price:200, category:'electronics'},
    {id:2, name:'phone', price:100, category:'electronics'},
    {id:3, name:'doll', price:50, category:'toys'},
    {id:4, name:'pan', price:60, category:'kitchen'},
    {id:5, name:'dress', price:80, category:'clothing'},
    {id:6, name:'shirt', price:70, category:'clothing'}];

const names = ['Alice', 'Bob', 'Cat', 'Alice', 'David', 'Bob'];
const Map = () => {
  return (
    <div>
      <ul>
        {data.filter((dat)=>dat.category==='electronics').map((dat, index)=>
             <li key={dat.id}>{dat.name} - ${dat.price} - Category {dat.category}</li>
        )}
       </ul>
       <div>
        Price: {data.reduce((acc,curr,index)=>{
            return acc=acc+curr.price;
        },0)}
       </div>
       <div>
        {data.filter((dat)=>dat.price>80).map((data)=>{
            return {...data, discountedPrice: data.price*(10/100)}
        }).map((data, index)=> <li key={data.id}>{data.name} - {data.discountedPrice}</li>)}
       </div>
       {names.filter((name, index)=>names.indexOf(name)===index).map((name, index)=>{
        return <li key={index}>{name}</li>
       })}
    </div>
  )
}

export default Map
