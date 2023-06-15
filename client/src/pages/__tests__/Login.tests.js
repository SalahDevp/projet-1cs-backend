import Login,{validateTelephoneLenght} from "../LoginForm"
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn();



test("should be failed on phone number's lengh validation ", () => {
    render(<Login></Login>);
    const testPhone = "0123";
    expect(validateTelephoneLenght(testPhone)).not.toBe(true);
  });

