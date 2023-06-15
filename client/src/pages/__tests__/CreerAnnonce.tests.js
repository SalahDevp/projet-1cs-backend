import { waitFor, render, screen, getAllByRole } from "@testing-library/react";
import {  BrowserRouter ,  Routes,  Route} from "react-router-dom";



import "@testing-library/jest-dom";
import CreerAnnonce from "../CreerAnnonce";
import { renderIntoDocument } from "react-dom/test-utils";

test("Number of buttons",()=>{
    /*render( <BrowserRouter>
        <Routes>   
            <Route path="*" element= {<CreerAnnonce></CreerAnnonce>}/>
        </Routes>
    </BrowserRouter>);*/
    //const items =screen.queryByRole('button');
   
    /*await waitFor(() =>
      expect(screen.findAllByRole('button')).toHaveLength(2)
    )*/

   
    //expect(items).toHaveLength(2);
     render(<CreerAnnonce></CreerAnnonce>);
     const b1=screen.getByTestId('btn1')
     const b2=screen.getByTestId('btn2')
     expect(b1).toBeInTheDocument();
     expect(b2).toBeInTheDocument();



    
    
   
})
