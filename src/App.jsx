import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';

function App() {

  let [txt, setTxt] = useState("")
  let [list, setList] = useState([])
  let [editId, setEditId] = useState(0)

  const handelChange = (e) => {
    setTxt(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!txt) {
      alert("txt is required")
      return;
    }
    if (editId) {
      const editTodo = list.find((i) => i.id === editId);
      const updatedTodos = list.map((e) =>
        e.id === editTodo.id
          ? (e = { id: e.id, txt })
          : { id: e.id, txt: e.txt }
      );
      setList(updatedTodos);
      setEditId(0);
      setTxt("");
      return;
    }

    else if (txt !== "") {
      setList([{ id: `${txt}-${Date.now()}`, txt }, ...list]);
      console.log(txt)
      console.log(list)
      setTxt("");
    }
  }

  const handelDel = (id) => {
    const delTodo = list.filter((i) => i.id !== id);
    setList([...delTodo]);
  }

  const handelEdit = (id) => {
    const editTodo = list.find((i) => i.id === id);
    setTxt(editTodo.txt);
    setEditId(id);
  }

  function DelAll(){
    setList([]);

  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='sectionOne'>
          <h1 >TODO APP</h1>

          <div className='container-One'>
            <input
              value={txt}
              onChange={handelChange} />
            <Button otherClass="btn add" btnType="submit" onClick={handleSubmit} btnName={editId ? "EDIT" : "ADD"} />
          </div>

          <ul className='todoList'>
            {list.map((e) => {
              return <div className='display-con'>
                <li className='listItems' ><span key={e.id}>{e.txt}</span></li>
                <Button otherClass="btn del" onClick={() => handelEdit(e.id)} btnName="Edit" />
                <Button otherClass="btn edit" onClick={() => handelDel(e.id)} btnName="Delete" />
              </div>
            })}
          </ul>
          <Button otherClass="btn delAll" onClick={DelAll} btnName="Delete All" />
        </div>
      </header>
    </div>
  );
}

export default App;