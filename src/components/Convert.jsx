import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdContentCopy } from "react-icons/md";
import heroBanner from "../assets/hero-banner.svg";
import "react-toastify/dist/ReactToastify.css";
import { price_in_words } from "../utils/InrToWords";
const Convert = () => {
  const [number, setNumber] = useState();
  const [currencyInWords, SetCurrencyInWords] = useState("");

  const handleConversion = () => {
    const result = price_in_words(number);
    SetCurrencyInWords(`Indian Rupees${result} Only`);
  };

  const handleCopyToClipboard = () => {
    const textToCopy = currencyInWords;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast("✅ Copied to Clipboard!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        toast.error("Unable to copy!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error("Unable to copy text to clipboard:", err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleConversion();
    }
  };

  return (
    <>
      <h1>Convert Number to Words</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={heroBanner}
            className="logo"
            alt="Number to words convertion logo"
            width={350}
          />
        </a>
      </div>
      <p className="helper-text">
        Enter a number to convert into words in Indian Rupee (INR) format.
      </p>
      <div className="card">
        <input
          type="number"
          className="currencyInputField"
          name="inr"
          placeholder="Enter a number to convert"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={() => handleConversion()}>Convert</button>

        {currencyInWords.length > 0 && (
          <h2>
            <code>{currencyInWords + " "}</code>
            <button className="copy" onClick={handleCopyToClipboard}>
              {<MdContentCopy />}
            </button>
          </h2>
        )}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Slide
      />
    </>
  );
};

export default Convert;
