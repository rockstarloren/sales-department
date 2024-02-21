import { useState } from "react";

function Technical() {
  const [check, setChecked] = useState({
    technical: "",
  });

  const [formData, setFormData] = useState({
    quantity: "",
    rushDays: "",
  });

  const [result, setResult] = useState({
    ETA: "",
    price: "",
  });

  const { quantity, rushDays } = formData;

  const { technical } = check;

  const { ETA, price } = result;

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setChecked((data) => ({
        ...data,
        technical: e.target.name,
      }));
    }
    console.log(technical);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (technical === "domain") {
      setResult((data) => ({
        ...data,
        ETA: Math.round(quantity / 2),
        price: quantity * 150,
      }));
    }

    if (technical === "email") {
      setResult((data) => ({
        ...data,
        ETA: Math.round(quantity / 5),
        price: quantity * 60,
      }));
    }

    if (technical === "calendar") {
      setResult((data) => ({
        ...data,
        ETA: Math.ceil(quantity / 2),
        price: quantity * 150,
      }));
    }

    if (technical === "product") {
      setResult((data) => ({
        ...data,
        ETA: Math.round(quantity / 5),
        price: quantity * 66.66,
      }));
    }

    if (technical === "form") {
      setResult((data) => ({
        ...data,
        ETA: Math.round(quantity / 2),
        price: quantity * 150,
      }));
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-xl">Graphics Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            onChange={handleInput}
            value={quantity}
          ></input>
        </div>
        <div>
          <label htmlFor="rushDays">Rush Days</label>
          <input
            id="rushDays"
            type="number"
            name="rushDays"
            onChange={handleInput}
            value={rushDays}
          ></input>
        </div>
        <div>
          <input
            id="domain"
            type="checkbox"
            name="domain"
            value={technical}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Domain</label>
          <input
            id="email"
            type="checkbox"
            name="email"
            value={technical}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Email Automation</label>
          <input
            id="calendar"
            type="checkbox"
            name="calendar"
            value={technical}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Calendar</label>
          <input
            id="product"
            type="checkbox"
            name="product"
            value={technical}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Product Setup</label>
          <input
            id="form"
            type="checkbox"
            name="form"
            value={technical}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Form Setup</label>
        </div>
        <input type="submit" />
      </form>
      <div>
        <p>
          Deadline: <span>{ETA} Days</span>
        </p>
        <p>
          Price: <span>${price}</span>
        </p>
      </div>
    </div>
  );
}

export default Technical;
