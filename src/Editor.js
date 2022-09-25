import "./App.css";

export default function Editor() {
  return (
    <div className="textEditor">
      <nav>
        <span>T</span>
        <span>St</span>
        <span>
          <strong>b</strong>
        </span>
        <span>
          <em>i</em>
        </span>
        <span>
          <u>u</u>
        </span>
        <span>
          <h1>1</h1>
        </span>
        <span>
          <h2>2</h2>
        </span>
        <span>
          <h3>3</h3>
        </span>
        <span>
          <h4>4</h4>
        </span>
        <span>
          <h5>5</h5>
        </span>
        <span>
          <h6>6</h6>
        </span>
      </nav>
      <textarea
        className="textBox"
        rows="5"
        cols="33"
        placeholder="Your text"
      ></textarea>
    </div>
  );
}
