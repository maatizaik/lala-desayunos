import ItemList from './itemList'

export default function ItemListContainer() {
    return (
      <div style={{fontSize:"15rem", color:"lightblue", padding:"20%"}}>
        <h3>Items</h3>
        <ItemList />
      </div>
    );
  }