// import { useState } from 'react'
import './App.css'

import $ from 'jquery';

function App() {
  $(document).ready(function () {
    // Disabling right-click context menu
    $(document).bind("contextmenu", function (e) {
        e.preventDefault();
        // alert("Right click is disabled on this website");
    });

    // Disabling F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    $(document).on("keydown", function (e) {
        if (e.keyCode == 123) { // F12
            e.preventDefault();
            // alert("Opening Developer Tools is disabled on this website");
        }
        if ((e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || // Ctrl+Shift+J
            (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) { // Ctrl+Shift+C
            e.preventDefault();
            // alert("Opening Developer Tools is disabled on this website");
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
