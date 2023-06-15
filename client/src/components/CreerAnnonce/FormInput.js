import React from "react";
import { Input } from "@material-tailwind/react";

const FormInput = ({ name, label, icon, state, handleChange, type }) => {
  return (
    <div>
      <Input
        id={name}
        type={type}
        min={0}
        color="blue-gray"
        label={label}
        icon={icon}
        onChange={(e) => handleChange(e, name)}
        value={state.value}
        error={state.error}
      />
      {state.error && (
        <p className="text-xs -ml-2 text-red-600">{"* " + state.errorMsg}</p>
      )}
    </div>
  );
};

export default FormInput;
