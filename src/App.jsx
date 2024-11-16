import React, { useState } from "react";
import jsPDF from "jspdf";
import clsx from 'clsx'


const App = () => {


  
  return (
    <div>
      <Textform />
    </div>
  );
};



export default App;



const Textform = () => {
  const [text, setText] = useState("");

  const textHandler = (e) => setText(e.target.value);

  const upperCaseHandler = (e) => {
    e.preventDefault();
    setText(text.toUpperCase());
  };

  const loweCaseHandler = (e) => {
    e.preventDefault();
    setText(text.toLowerCase());
  };

  const copyTextHandler = (e) => {
    e.preventDefault();
    const copy = document.getElementById("text-utils");
    copy.select();
    navigator.clipboard.writeText(copy.value).then(() => {
      confirm("Text Copied");
    }).catch(() => {
      confirm("Text Is Not Copied!");
    });
  };

  const clearTextHandler = (e) => {
    e.preventDefault();
    setText("");
  };

  const downlaodAsPdf = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("textutils.pdf");
  };

  const [isMode, setIsMode] = useState(false);

  // dark mode handler 
  
  const darkModeHandler = (e) => {

     e.preventDefault();     
    setIsMode(prevMode => !prevMode);
     console.log("The button was clicked!!");

  }

  return (
    <>
     <header className="h-20 w-full bg-indigo-200 flex justify-end items-center">
         <div className="p-5">
             <button className="px-6 py-3 bg-slate-50 active:duration-150 active:bg-slate-100 outline-none text-black rounded-lg" onClick={(e) => {darkModeHandler(e)}}>{isMode ? "Disable Dark Mode" : "Enable Dark Mode"}</button>
         </div>
     </header>


      <div className={clsx("h-min w-full flex justify-center items-center", isMode ? "bg-slate-800" : "bg-slate-100", "p-10 sm:p-20")}>
        <form className={clsx("w-full max-w-4xl bg-indigo-300/80 rounded-md", isMode ? "shadow-custom-box-shadow" : "shadow-custom-shadow", "overflow-hidden backdrop-sepia-0  flex flex-col items-center p-5 md:p-10")}>
          <h2 className="text-xl md:text-2xl font-semibold capitalize text-slate-800 bg-slate-100 py-3 px-6 rounded-lg mb-6 text-center">
            TextUtils Application
          </h2>
          <textarea
            name="Enter the text here"
            placeholder="Enter text here"
            className="w-full max-w-xl bg-slate-50 placeholder:text-xl shadow-custom-shadow rounded-lg  p-5 text-opacity-35 outline-none focus:bg-slate-100 resize-none"
            id="text-utils"
            rows={6}
            onChange={textHandler}
            value={text}
          ></textarea>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              type="button"
              className="px-6 py-3 bg-indigo-600 rounded-md text-white text-sm font-semibold"
              onClick={upperCaseHandler}
            >
              UpperCase
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-indigo-600 rounded-md text-white text-sm font-semibold"
              onClick={loweCaseHandler}
            >
              LowerCase
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-indigo-600 rounded-md text-white text-sm font-semibold"
              onClick={copyTextHandler}
            >
              CopyText
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-indigo-600 rounded-md text-white text-sm font-semibold"
              onClick={downlaodAsPdf}
            >
              DownloadText
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-indigo-600 rounded-md text-white text-sm font-semibold"
              onClick={clearTextHandler}
            >
              ClearText
            </button>
          </div>
          <div className="mt-8 w-full flex flex-wrap justify-around bg-slate-200 p-5 rounded-lg">
            <div className="text-center">
              <label className="text-lg font-semibold block mb-2">Word Counter</label>
              <div className="bg-slate-500 text-white py-2 px-4 rounded-lg">
                {text.trim().split(/\s+/).filter(Boolean).length}
              </div>
            </div>
            <div className="text-center">
              <label className="text-lg font-semibold block mb-2">Char Counter</label>
              <div className="bg-slate-500 text-white py-2 px-4 rounded-lg">
                {text.length}
              </div>
            </div>
          </div>
          <div className="mt-6 w-full bg-slate-100/90 p-6 rounded-lg">
            <h2 className="text-xl text-slate-900 text-center mb-4 font-semibold">Preview Dashboard</h2>
            <textarea
              className="w-full bg-indigo-400/60 h-40 rounded-md outline-none shadow-md p-4 text-black resize-none"
              value={text}
              readOnly
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};
