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

  const handleRadio = (e) => {
    if (e.target.checked) {
      setChecked((data) => ({
        ...data,
        technical: e.target.id,
      }));
    }
    console.log(technical);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData((data) => ({
      ...data,
      [id]: value,
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
      <h2 className="text-center font-bold text-2xl m-4">Technical</h2>
      <form onSubmit={handleSubmit} className="grid gap-2">
        <div>
          <input
            id="quantity"
            type="number"
            name="quantity"
            onChange={handleInput}
            value={quantity}
            placeholder="Number of Sections"
            className="py-3 px-2 outline-none border border-slate-300 rounded w-full"
          ></input>
        </div>
        <div>
          <input
            id="rushDays"
            type="number"
            name="rushDays"
            onChange={handleInput}
            value={rushDays}
            placeholder="Rush Days"
            className="py-3 px-2 outline-none border border-slate-300 rounded w-full"
          ></input>
        </div>
        <p className="my-2 text-sm text-[#007872] font-bold">
          *Please select the type of task:
        </p>
        <div className="grid gap-2 grid-flow-col place-content-center">
          <div className="grid gap-2">
            <label
              htmlFor="domain"
              className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
            >
              <input
                id="domain"
                type="radio"
                name="group"
                value={technical}
                onChange={handleRadio}
                className="mx-2 w-4 h-4"
              ></input>
              Domain
            </label>
            <label
              htmlFor="email"
              className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
            >
              <input
                id="email"
                type="radio"
                name="group"
                value={technical}
                onChange={handleRadio}
                className="mx-2 w-4 h-4"
              ></input>
              Email Automation
            </label>
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="calendar"
              className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
            >
              <input
                id="calendar"
                type="radio"
                name="group"
                value={technical}
                onChange={handleRadio}
                className="mx-2 w-4 h-4"
              ></input>
              Calendar
            </label>
            <label
              htmlFor="product"
              className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
            >
              <input
                id="product"
                type="radio"
                name="group"
                value={technical}
                onChange={handleRadio}
                className="mx-2 w-4 h-4"
              ></input>
              Product Setup
            </label>
          </div>
          <label
            htmlFor="form"
            className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
          >
            <input
              id="form"
              type="radio"
              name="group"
              value={technical}
              onChange={handleRadio}
              className="mx-2 w-4 h-4"
            ></input>
            Form Setup
          </label>
        </div>
        <input
          type="submit"
          value="Calculate"
          className="text-white font-bold text-sm cursor-pointer bg-[#007872] rounded cursor-pointer hover:bg-[#008f88] py-3 px-6"
        />
      </form>
      <div className="my-4 grid grid-flow-col gap-2">
        <p className="bg-[#a5c5ce] p-4 rounded">
          <span className="block font-bold">Price:</span>
          <span className="font-bold text-3xl">
            ${price.toLocaleString("en-US")}
          </span>
        </p>
        <p className="bg-[#a5c5ce] p-4 rounded">
          <span className="block font-bold">Deadline:</span>
          <span className="font-bold text-3xl">
            {ETA} <span className="font-bold text-xl">day/s</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Technical;
