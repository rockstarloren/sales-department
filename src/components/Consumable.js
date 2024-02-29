import { useState } from "react";

function Consumable() {
  var [result, setResult] = useState({
    price: 0,
  });
  var [formData, setFormData] = useState({
    sections: "",
  });

  var { sections } = formData;
  var { ETA } = result;

  const handleSubmit = (e) => {
    e.preventDefault();

    //Calculate ETA

    //Calculate PRICE

    if (sections > 0) {
      setResult((data) => ({
        ...data,
        ETA: Math.round((sections / 2.5) * 9),
      }));
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
      <h2 className="text-center font-bold text-2xl m-4">Consumable</h2>
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
        <input
          type="submit"
          value="Calculate"
          className="text-white font-bold text-sm cursor-pointer bg-[#007872] rounded cursor-pointer hover:bg-[#008f88] py-3 px-6"
        />
      </form>
      <div className="my-4 grid grid-flow-col gap-2">
        <p className="bg-[#a5c5ce] p-4 rounded">
          <span className="block font-bold">Deadline:</span>
          <span className="font-bold text-3xl">
            {ETA} <span className="font-bold text-xl">hours</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Consumable;
