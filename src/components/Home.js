import React from 'react';

const Home = () => {
  const shoppingItems = [
    { id: 1, name: 'Organic Apples', price: '$2.99', category: 'Fruits' },
    { id: 2, name: 'Whole Grain Bread', price: '$3.49', category: 'Bakery' },
    {
      id: 3,
      name: 'Free Range Eggs',
      price: '$4.99',
      category: 'Dairy & Eggs',
    },
    { id: 4, name: 'Organic Spinach', price: '$1.99', category: 'Vegetables' },
  ];

  return (
    <div style={styles.container}>
      <h1>Welcome to the Shopping Page</h1>
      <p>Explore our selection of organic and locally sourced products.</p>
      <h2>Shopping List:</h2>
      <ul style={styles.shoppingList}>
        {shoppingItems.map((item) => (
          <li key={item.id} style={styles.shoppingItem}>
            <div>
              <strong>{item.name}</strong>
              <p>Category: {item.category}</p>
            </div>
            <div>
              <span>{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
  },
  shoppingList: {
    listStyle: 'none',
    padding: 0,
  },
  shoppingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
    margin: '10px 0',
  },
};
