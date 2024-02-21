import { useState } from "react";

function Graphics() {
  const [check, setChecked] = useState({
    graphic: "",
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

  const { graphic } = check;

  const { ETA, price } = result;

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setChecked((data) => ({
        ...data,
        graphic: e.target.name,
      }));
    }
    console.log(graphic);
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

    if (graphic === "ebooks") {
      setResult((data) => ({
        ...data,
        ETA: Math.round(quantity / 3.88),
        price: quantity * 12.5,
      }));
    }

    if (graphic === "slides") {
      setResult((data) => ({
        ...data,
        ETA: Math.round(quantity / 2),
        price: quantity * 25,
      }));
    }

    if (graphic === "logo") {
      setResult((data) => ({
        ...data,
        ETA: Math.ceil(quantity / 2),
        price: quantity * 300,
      }));
    }

    if (graphic === "others") {
      setResult((data) => ({
        ...data,
        ETA: Math.round(quantity / 2),
        price: quantity * 50,
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
            id="ebooks"
            type="checkbox"
            name="ebooks"
            value={graphic}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Ebooks/PDFs</label>
          <input
            id="slides"
            type="checkbox"
            name="slides"
            value={graphic}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Slides/Carousel</label>
          <input
            id="logo"
            type="checkbox"
            name="logo"
            value={graphic}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Logo</label>
          <input
            id="others"
            type="checkbox"
            name="others"
            value={graphic}
            onChange={handleCheckbox}
          ></input>
          <label htmlFor="ebooks">Others</label>
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

export default Graphics;
