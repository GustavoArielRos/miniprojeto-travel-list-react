import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import  Stats  from "./Stats";


export default function App(){
  const [items, setItems] = useState([]);
  const numItems = items.length;

  function handleAddItems(item) {
    setItems(items => [...items, item] ); //adicionando um novo item no array de items
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item)=>item.id !== id))
  }

  function handleToggleItem(id){
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed} 
        : item
      )
    );
  }

  function handleClearList(){
    setItems([]);
  }

  return(
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} /> {/*on AddItems NÃO É UM EVENTO, ele só é uma variavel que recebe as inf do array */}
      <PackingList items={items} 
                   onDeleteItem={handleDeleteItem} 
                   onToggleItem={handleToggleItem}
                   onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}









