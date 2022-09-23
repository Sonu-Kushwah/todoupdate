import React, { useEffect, useState } from "react";

function Demo1() {
  const [print, setPrint] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditeItem, setIsEditeItem] = useState(null);
  const handleChange = (e) => {
    setPrint(e.target.value);
  };
  const [record, setRecord] = useState([]);
  //const handleClick = () =>{
  //  setRecord((olditm) =>{
  //    return[...olditm, print]

  //})
  //setPrint("")
  //}
  const handleClick = () => {
    if (!print) {
      alert("hellow");
    } else if (print && !toggleSubmit) {
      setRecord(
        record.map((elem) => {
          if (elem.id === isEditeItem) return { ...elem, name: print };
          return elem;
        })
      );
      setToggleSubmit(true);
      setPrint("");
      setIsEditeItem(null);
    } else {
      const allPrint = { id: new Date().getTime().toString(), name: print };
      setRecord([...record, allPrint]);
      setPrint("");
    }
  };
  // const handleDelete =(id)=>{
  //   console.log("hiikgfd")
  //setRecord((olditem) =>{
  //return olditem. filter((arrE, index) =>{
  //return index !==id;

  // })
  //}
  const handleDelete = (index) => {
    const upDateitm = record.filter((elem) => {
      return index !== elem.id;
    });
    setRecord(upDateitm);
  };

  const handleEdit = (id) => {
    const newHandleEdit = record.find((elem) => {
      return id === elem.id;
    });
    console.log(newHandleEdit);
    setToggleSubmit(false);
    setPrint(newHandleEdit.name);
    setIsEditeItem(id);
  };

  const removeArray = () => {
    setRecord([]);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Todo insert Update Delete Task</h2>
        <div className="todoBox">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={print}
          onChange={handleChange}
        ></input>

        {toggleSubmit ? (
           <button onClick={handleClick}><i class="fa-sharp fa-solid fa-plus" ></i></button> 
        ) : (
          <button onClick={handleClick}><i class="fa-solid fa-pen-to-square"></i></button>
        )}
        <ol>
          
          {record.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <h3>{item.name}
                  <i class="fa-solid fa-pen-to-square ml-2" onClick={() => handleEdit(item.id)}></i>
                  <i class="fa-sharp fa-solid fa-trash ml-2" onClick={() => handleDelete(item.id)}></i>
                  </h3>
                </div>
              </>
            );
          })}
          <button type="text" onClick={removeArray}>
            removeall
          </button>
        </ol>
        </div>
      </div>
    </>
  );
}

export default Demo1;
