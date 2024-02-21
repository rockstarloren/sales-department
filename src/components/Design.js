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
      <h2 className="text-center font-bold text-xl">Design Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sections">Number of Sections</label>
          <input
            id="sections"
            type="number"
            value={formData?.sections}
            name="sections"
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <label htmlFor="rush-days">Rush Days</label>
          <input
            id="rush-days"
            type="number"
            name="rushDays"
            value={formData?.rushDays}
            onChange={handleInput}
          ></input>
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

export default Design;
