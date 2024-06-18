

import { useState } from "react"
import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"

function App() {
  //const [items, setItems] = useState(menuItems)
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black" > Calculadora de propinas y consumos</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="">Menu</h2>
          {menuItems.map(item => (
            <MenuItems
              key={item.id}
              item={item} />
          ))}
        </div>
        <div>
          <h2 className="">Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
