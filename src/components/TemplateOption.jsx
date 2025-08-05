import React from "react";

const TemplateOption = () => {
  return (
    <div className="color-palate">
      <div className="color-icon">
        <button className="open-color">
          <i className="ti ti-settings-filled"></i>
        </button>
        <button className="close-color">
          <i className="ti ti-x"></i>
        </button>
      </div>
      <div className="color-palate-inner">
        <div className="group">
          <h6 className="not-cursor">Cursor</h6>
          <ul className="cursor-version">
            <li className="active cursor-pointer animated-cursor">Animated</li>
            <li className="box cursor-pointer default-cursor">Default</li>
          </ul>
        </div>
        <div className="group">
          <h6 className="not-cursor">Direction</h6>
          <ul className="rtl-version">
            <li className="active cursor-pointer ltr-yes">LTR</li>
            <li className="cursor-pointer ltr-no">RTL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TemplateOption;
