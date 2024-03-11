import React, { useState } from "react";
import './ItemList.css';

const ItemList = ({itemName,index,setStoreInputData}) =>{

    const[isCheck,setIsCheck] = useState(false);

    const deleteBtn =() =>{
        setStoreInputData((prevData)=>{
            const data = [...prevData];
            data.splice(index,1);
            return data;
        });
        alert("Item Delted");
    };

    return(
        <div className="row_single_data">
            <div>
                <input id="checkbox" type="checkbox" onChange={()=> {setIsCheck((prevValue) => !prevValue)}} checked={isCheck}  />
            </div>
            <div>
                <p id="ptag" style={{textDecoration : isCheck ? 'line-through' : 'none'}}>{itemName}</p>
            </div>
            <div>
                <button className="single_delete_data_btn" onClick={deleteBtn} >DELETE</button>
            </div>
        </div>
    );
}

export default ItemList;