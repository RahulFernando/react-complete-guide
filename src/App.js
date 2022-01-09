import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 1,
      expense_date: new Date(2021, 2, 28),
      expense_title: 'Car Insurance',
      expense_amount: 294.67,
    },
    {
      id: 2,
      expense_date: new Date(2021, 2, 29),
      expense_title: 'Class Fee',
      expense_amount: 500.0,
    },
    {
      id: 3,
      expense_date: new Date(2021, 2, 29),
      expense_title: 'Medical Insurance',
      expense_amount: 290.3,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
