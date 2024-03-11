import React, { useState,useEffect} from "react";
import './Grocery.css';
import ItemList from "./ItemList";

const Grocery = () =>{

    const[storeInputData,setStoreInputData] = useState([]);

    const[inputValue,setInputValue] = useState('');

    const btnClickHandler = () =>{
        if(inputValue !== ""){
            setStoreInputData((prevData) => {
                return[...prevData, inputValue]
            });
            alert("Item Added To The List");
            setInputValue("");
        }
        else{
            alert("Please Provide Value");
        }
    }

    const AllData = () =>{
        setStoreInputData([]);
        alert("Your All Grocery Data Is Deleted");
    }

    return(
        <div className="main">
            <div className="h2_plus_some_data">
                <h2 className="h2">Grocery Bud</h2>

                <div className="input_with_btn">
                    <input type="text" value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} />
                    <button className="colorSKY" onClick={btnClickHandler}>Add Item</button>
                </div>
            </div>
            <div>
                {storeInputData.map((curElm,index)=> 
                    <ItemList key={index} index={index} itemName={curElm} setStoreInputData={setStoreInputData}/>
                )}
            </div>
            <div className="all_data_div">
                    <button className="All_data_fush_btn" onClick={AllData} >All Clear</button>
            </div>
        </div>
    );
}

export default Grocery;