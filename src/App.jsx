import './App.css'

function App() {
  const foodItems = [
    { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: '$12' },
    { id: 2, name: 'Burger', description: 'Juicy beef burger', price: '$8' },
    { id: 3, name: 'Sushi', description: 'Fresh salmon sushi', price: '$15' },
    { id: 4, name: 'Pasta', description: 'Classic spaghetti carbonara', price: '$10' },
    { id: 5, name: 'Salad', description: 'Healthy garden salad', price: '$7' },
  ];

  return (
    <div className="homepage">
      <header className="header">
        <h1>SmartMess</h1>
        <p>Your favorite food, delivered fast.</p>
      </header>

      <main className="main-content">
        <h2>Our Menu</h2>
        <div className="food-list">
          {foodItems.map(item => (
            <div key={item.id} className="food-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
