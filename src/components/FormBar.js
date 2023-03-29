import React from 'react'
import './FormBar.css'

function FormBar({ subscribed }) {
  return (
    <>
      {!subscribed ? (
        <div className="formbar">
          <span id="bold"> Try it free 7 days &nbsp;</span> then ₹180 /
          mo.thereafter
        </div>
      ) : (
        <div className="subscribeText">
          You have successfully subscribed to our plan ✔
        </div>
      )}
    </>
  );
}

export default FormBar