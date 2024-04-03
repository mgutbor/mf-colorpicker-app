import React from "react";
import ReactDOM from "react-dom";

import ColorPicker from "ColorPicker/ColorPicker";
import ColorList from "ColorList/ColorList";

import {useColors} from "ColorPicker/useColors";

import "./index.css";

const App = () => {
  const { color, colorsList, handleChangeColor, handleSubmitSaveColor, handleClickClearColors } = useColors();
  return (
  <>
    <h1 className="text-center bg-dark text-white p-4">Color Picker</h1>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-4"><ColorList colorsList={colorsList} handleClickClearColors={handleClickClearColors} /></div>
        <div className="col-12 col-md-8"><ColorPicker color={color} handleChangeColor={handleChangeColor} handleSubmitSaveColor={handleSubmitSaveColor} /></div>
      </div>
    </div>
  </>
  );
  }

ReactDOM.render(<App />, document.getElementById("app"));
