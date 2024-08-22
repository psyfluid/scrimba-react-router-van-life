export default function HostIncome() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: '1' },
    { amount: 560, date: "Dec 12, '22", id: '2' },
    { amount: 980, date: "Dec 3, '22", id: '3' },
  ];

  return (
    <div className="host-income">
      <h1 className="host-title">Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img src="/src/assets/images/income-graph.png" alt="Income graph" className="graph" />
      <div className="info-header">
        <h3>Your transactions (3)</h3>
        <p>Last <span>30 days</span></p>
      </div>
      <div className="transactions">
        {transactionsData.map((transaction) => (
          <div key={transaction.id} className="transaction">
            <h3>${transaction.amount}</h3>
            <p>{transaction.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
