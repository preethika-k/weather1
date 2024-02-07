import React, { useState } from 'react';
import './expense.css';
function ExpenseTracker() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [expense, setExpense] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);

  const handleAddExpense = () => {
    if (!name || !age || !phone || !expense || isNaN(expense)) {
      alert('Please fill in all fields with valid information.');
      return;
    }

    const person = { name, age, phone, expense: parseFloat(expense) };
    setPeople([...people, person]);
    setTotalExpense(totalExpense + parseFloat(expense));
    setName('');
    setAge('');
    setPhone('');
    setExpense('');
  };

  return (
    <div>
    <h1 className='hel'>Expense Traker</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Expense:</label>
        <input
          type="text"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
      <div>
        <h2>Total Expense: ${totalExpense.toFixed(2)}</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              <strong>Name:</strong> {person.name}, <strong>Age:</strong> {person.age}, <strong>Phone:</strong> {person.phone}, <strong>Expense:</strong> ${person.expense.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseTracker;
