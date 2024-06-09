import React, { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const key = 0;
  const [total, setTotal] = useState(1000);
  const [data, setData] = useState([]);
  const [ok, setOk] = useState(false);
  const [type, setType] = useState("expense");
  const handleSubmit = () => {
    if (type === "income") {
      setTotal(parseFloat(total) + parseFloat(amount));
      setIncome(parseFloat(income) + parseFloat(amount));
    } else if (type === "expense") {
      setTotal(parseFloat(total) - parseFloat(amount));
      setExpense(parseFloat(expense) + parseFloat(amount));
    }
    setData([
      ...data,
      {
        key: key + 1,
        text: text,
        amount: amount,
        type: type,
      },
    ]);
  };

  const onChange = (e) => {
    setType(e.target.value);
  };
  const handleInfo = () => {
    setOk(true);
  };
  return (
    <>
      {!ok ? (
        <div className="container">
          {" "}
          <form className="form">
            <label for="amount">
              <p className="text"> Enter Your Name:</p>
            </label>
            <div className="amount">
              <input
                style={{ width: "350px", height: "40px" }}
                type="text"
                id="amount"
                name="amount"
                onInput={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <label for="usage">
              <p className="text"> Enter Your Budget:</p>
            </label>
            <div className="amount">
              <input
                style={{ width: "350px", height: "40px" }}
                type="text"
                id="amount"
                name="amount"
                value={total}
                onInput={(e) => setTotal(e.target.value)}
              />
            </div>
            <button className="button" onClick={handleInfo}>
              <p className="expenseText">Add Expense</p>
            </button>
          </form>
        </div>
      ) : (
        <div className="container">
          <div className="exp-container">
            <h2>Welcome {name} </h2>
            <h2>Your balance {total} Rs</h2>
            <div className="balance">
              <div style={{ paddingRight: "20px" }}>
                <p className="money">Income: </p>
                <p className="moreMoney">{income} Rs</p>
              </div>
              <div className="line"></div>
              <div style={{ paddingLeft: "20px" }}>
                <p className="money">Expense: </p>
                <p className="moreMoney" style={{ color: "red" }}>
                  {expense} Rs
                </p>
              </div>
            </div>
            <form className="form">
              <label>
                <input
                  type="radio"
                  value="expense"
                  checked={type === "expense"}
                  onChange={onChange}
                />
                Expense
                <input
                  type="radio"
                  value="income"
                  checked={type === "income"}
                  onChange={onChange}
                />
                Income
              </label>
              <label for="amount">
                <p className="text"> Amount:</p>
              </label>
              <div className="amount">
                <input
                  className="input"
                  type="text"
                  id="amount"
                  name="amount"
                  onInput={(e) => setAmount(e.target.value)}
                  value={amount}
                />
              </div>
              <label for="usage">
                <p className="text"> Usage:</p>
              </label>
              <div className="amount">
                <input
                  className="input"
                  type="text"
                  id="amount"
                  name="amount"
                  value={text}
                  onInput={(e) => setText(e.target.value)}
                />
              </div>
            </form>
            <button className="button" onClick={handleSubmit}>
              <p className="expenseText">Add {type}</p>
            </button>
            <h1 style={{ fontSize: "22px" }}>History</h1>
            <div className="history">
              {data.map((item) => (
                <>
                  <div
                    className="history"
                    style={
                      item.type === "expense"
                        ? { boxShadow: "0px 0px 0px 3px red" }
                        : { boxShadow: "0px 0px 0px 3px green" }
                    }
                  >
                    <ul className="list">
                      <li style={{ float: "left", fontWeight: "bold" }}>
                        {item.text}
                      </li>
                      <li style={{ float: "right" }}>{item.amount} Rs</li>
                    </ul>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;