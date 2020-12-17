import React, { useState, useEffect, useRef } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#5f7d99").all(5));
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setColor(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <section className='container'>
        <h3>HexColor tint generator</h3>
        <form _lpchecked='' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#5f7d99'
            className={error ? "error" : null}
            value={color}
            onChange={handleChange}
            ref={inputRef}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>{" "}
      </section>
      <section className='pcontainer'>
        {" "}
        <p>
          A handy GUI for getting hex color tint variations. Simply input your
          hex code and watch the magic happen! (also accepts named colors [e.g.,
          dodgerblue, chartreuse, etc.]).
        </p>
        <p>Click a color to copy to clipboard.</p>
      </section>
      <section className='colors'>
        {list.map((clr, idx) => {
          console.log(clr);
          return (
            <SingleColor
              key={idx}
              {...clr}
              index={idx}
              hexColor={clr.hex}
              originalColor={color}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
