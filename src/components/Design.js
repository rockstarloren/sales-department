import { useState } from "react";

function Design() {
  var [result, setResult] = useState({
    ETA: "",
    price: "",
  });
  var [formData, setFormData] = useState({
    sections: "",
    rushDays: "",
  });

  var { sections, rushDays } = formData;
  var { ETA, price } = result;

  const handleSubmit = (e) => {
    e.preventDefault();

    //Calculate ETA
    if (rushDays > 0) {
      setResult((data) => ({ ...data, ETA: rushDays }));
    } else {
      setResult((data) => ({ ...data, ETA: Math.round(sections / 2.5) }));
    }

    //Calculate PRICE
    if (sections < 1) {
      setResult((data) => ({ ...data, price: 0 }));
    }

    if (sections > 0) {
      setResult((data) => ({ ...data, price: sections * 50 }));
    }

    if (sections > 0 && rushDays > 0) {
      var placeholder = Math.ceil(sections / 2.5 - rushDays);
      setResult((data) => ({
        ...data,
        price: 225 * placeholder + sections * 50,
      }));
      console.log(placeholder);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-center font-bold text-2xl m-4">Design</h2>
      <form onSubmit={handleSubmit} className="grid gap-2">
        <div>
          <input
            id="sections"
            type="number"
            value={formData?.sections}
            name="sections"
            onChange={handleInput}
            placeholder="Number of Sections"
            className="py-3 px-2 outline-none border border-slate-300 rounded w-full"
          ></input>
        </div>
        <div>
          <input
            id="rush-days"
            type="number"
            name="rushDays"
            value={formData?.rushDays}
            onChange={handleInput}
            placeholder="Rush Days"
            className="py-3 px-2 outline-none border border-slate-300 rounded w-full"
          ></input>
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

export default Design;
