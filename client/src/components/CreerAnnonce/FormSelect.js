import React from "react";
import { Select, Option } from "@material-tailwind/react";

function FormSelect({ label, options, name, handleChange, state }) {
  return (
    <div className="lg:col-span-2">
      <span
        className={`text-sm p-2 font-medium text-blue-gray-400 ${
          state.error ? "text-red-600 border-red-600" : ""
        }`}
      >
        {name}
      </span>
      <select
        id={name}
        label={label}
        color="blue-gray"
        className={`focus:outline-none bg-transparent border border-blue-gray-200 focus:border-blue-gray-500 focus:text-blue-gray-500 rounded-lg block w-full mb-2 text-md p-2 font-light text-blue-gray-400 ${
          state.error ? "text-red-600 border-red-600" : ""
        }`}
        onChange={(e) => handleChange(e, name)}
        value={state.value}
        error={state.error}
      >
        {options.map((opt) => (
          <option className="" key={opt}>
            {opt}
          </option>
        ))}
      </select>
      {state.error && (
        <p className="text-xs -ml-2 text-red-600">{"* " + state.errorMsg}</p>
      )}
    </div>
  );
}

export default FormSelect;
