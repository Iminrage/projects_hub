import React, { useState } from "react";

const DatePicker = props => {
  return (
    <div className="">
      <input {...props} />
      <div className="">
        <ul></ul>
      </div>
    </div>
  );
};
export default DatePicker;
