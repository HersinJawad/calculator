import React, { useState } from "react";
import "./Button.css";
import Display from "../Display/Display";

const Button = () => {
  const [data, setData] = useState({
    input: "0",
  });
  const onClick = (value) => {
    if (data.input === "0") {
      setData({ input: value });
    } else if (
      data.input.length <= 14 &&
      value !== "=" &&
      value !== "+" &&
      value !== "-" &&
      value !== "*" &&
      value !== "/"
    ) {
      setData({ input: (data.input += value) });
    } else if (value == "+" || value == "-" || value == "*" || value == "/") {
      const data = String(eval(data.input + 0));
      setData({ input: (data += value) });
    } else if (value === "=") {
      const last = data.input.substr(data.input.length - 1, data.input.length);
      if (last === "+" || last === "-" || last === "*" || last === "/") {
        const newData = data.input.substr(0, data.input.length - 1);
        // eslint-disable-next-line
        const equals = String(eval(newData));
        setData({ input: equals });
      } else {
        // eslint-disable-next-line
        setData({ input: String(eval(data.input)) });
      }
    }
  };

  const clear = () => {
    setData({ input: "0" });
  };

  const back = () => {
    if (data.input !== 0) {
      if (data.input.length === 1) {
        setData({ input: "0" });
      } else {
        setData({ input: data.input.substr(0, data.input.length - 1) });
      }
    }
  };

  return (
    <div>
      <Display number={data.input} />
      <div className="container">
        <div className="row row1">
          <button className="btn btn-danger" onClick={() => clear()}>
            c
          </button>
          <button className="btn btn-danger" onClick={() => back()}>
            <i className="fas fa-backspace"></i>
          </button>
          <button className="btn btn-warning">(</button>
          <button className="btn btn-warning">)</button>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={() => onClick("7")}>
            7
          </button>
          <button className="btn btn-secondary" onClick={() => onClick("8")}>
            8
          </button>
          <button className="btn btn-secondary" onClick={() => onClick("9")}>
            9
          </button>
          <button className="btn btn-warning" onClick={() => onClick("+")}>
            +
          </button>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={() => onClick("4")}>
            4
          </button>
          <button className="btn btn-secondary" onClick={() => onClick("5")}>
            5
          </button>
          <button className="btn btn-secondary" onClick={() => onClick("6")}>
            6
          </button>
          <button className="btn btn-warning" onClick={() => onClick("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={() => onClick("1")}>
            1
          </button>
          <button className="btn btn-secondary" onClick={() => onClick("2")}>
            2
          </button>
          <button className="btn btn-secondary" onClick={() => onClick("3")}>
            3
          </button>
          <button className="btn btn-warning" onClick={() => onClick("*")}>
            x
          </button>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={() => onClick(".")}>
            .
          </button>
          <button className="btn btn-secondary" onClick={() => onClick("0")}>
            0
          </button>
          <button className="btn btn-success" onClick={() => onClick("=")}>
            =
          </button>
          <button className="btn btn-warning" onClick={() => onClick("/")}>
            :
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
