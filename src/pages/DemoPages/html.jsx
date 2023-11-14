import React from 'react';

const Html = () => {
  return (
    <div
      style={{
        padding: 32,
      }}
    >
      <h3>
        <del>del del</del>
      </h3>
      <h3>
        <ins>ins ins</ins>
      </h3>
      <h3>
        <mark>mark mark</mark>
      </h3>
      <h3>
        <progress />
      </h3>
      <h3>
        <details title="hhh">
          <summary>summary</summary>
          <p>段落</p>
          <p>段落</p>
          <p>段落</p>
          <p>段落</p>
          <p>段落</p>
        </details>
      </h3>
      <h3>
        <input type="color" list="hhh" />
        <datalist id="hhh">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="lime">lime</option>
        </datalist>
      </h3>
      <h3>
        <figure>figure</figure>
      </h3>
      <h3>
        <dialog open>dialog</dialog>
      </h3>
    </div>
  );
};

Html.label = '标签';
export default Html;
