import '@testing-library/jest-dom';
import {  render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../store/appStore"
import { BrowserRouter } from "react-router-dom";

describe ("Header Component", () => {
  beforeEach (()=> {
     render (
    <Provider store={appStore}>
      <BrowserRouter>
    <Header />
    </BrowserRouter>
    </Provider>
  ) 
  });

  it("Should render 5 nav links in the header", ()=> {
   const navLinks = screen.getAllByTestId("nav-item");
  expect (navLinks.length).toBe(5)
  })

  it("Should render 1 button in the header", ()=> {
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  })

})
