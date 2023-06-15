import React from "react";
import { Input } from "@material-tailwind/react";

const FormInput = ({ name, label, type, state, handleChange }) => {
  return (
    <div>
      <Input
        type={type}
        variant="standard"
        label={label}
        color="blue-gray"
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
