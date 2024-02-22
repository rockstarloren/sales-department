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

  const handleRadio = (e) => {
    if (e.target.checked) {
      setChecked((data) => ({
        ...data,
        graphic: e.target.id,
      }));
    }
    console.log(graphic);
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
      <h2 className="text-center font-bold text-2xl m-4">Graphics</h2>
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
          *Please select the type of graphic:
        </p>
        <div className="grid gap-2 grid-flow-col place-content-center">
          <label
            htmlFor="ebooks"
            className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
          >
            <input
              id="ebooks"
              type="radio"
              name="group"
              value={graphic}
              onChange={handleRadio}
              className="mx-2 w-4 h-4"
            ></input>
            Ebooks/PDFs
          </label>
          <label
            htmlFor="slides"
            className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
          >
            <input
              id="slides"
              type="radio"
              name="group"
              value={graphic}
              onChange={handleRadio}
              className="mx-2 w-4 h-4"
            ></input>
            Slides/Carousel
          </label>
          <label
            htmlFor="logo"
            className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
          >
            <input
              id="logo"
              type="radio"
              name="group"
              value={graphic}
              onChange={handleRadio}
              className="mx-2 w-4 h-4"
            ></input>
            Logo
          </label>
          <label
            htmlFor="others"
            className="font-bold text-sm flex items-center rounded border border-slate-300 p-2"
          >
            <input
              id="others"
              type="radio"
              name="group"
              value={graphic}
              onChange={handleRadio}
              className="mx-2 w-4 h-4"
            ></input>
            Others
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

export default Graphics;
