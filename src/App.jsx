// import { useState } from 'react'
import './App.css'

import $ from 'jquery';

function App() {
  $(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
        e.preventDefault();
    });

    $(document).on("keydown", function (e) {
        if (e.keyCode == 123) {
            e.preventDefault();
        }
        if ((e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || // Ctrl+Shift+J
            (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) { // Ctrl+Shift+C
            e.preventDefault();
        }
    });
});

  return (
    <>
      
      <h1>Test Clicks</h1>
      <p>
        Disabled options
        <ul>
          <li>
            Right Click
          </li>
          <li>
            Ctrl + Shift + I
          </li>
          <li>
          Ctrl + Shift + J
          </li>
          <li>
          Ctrl + Shift + C
          </li>
          <li>F12</li>
        </ul>
      </p>
      
    </>
  )
}

export default App
