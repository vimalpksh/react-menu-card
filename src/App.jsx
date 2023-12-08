import React, { useState } from "react";
import Menu from "./Menu.jsx";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (cate) => {
    if (cate === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === cate);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
