import React,{useState} from 'react'


export default function TextForm({heading,mode,showAlert}) {

const handleUpClick=()=>{
  let newText=text.toUpperCase();
  setText(newText);
  showAlert("Converted to uppercase!","success");
}

const handleLoClick=()=>{
  let newText=text.toLowerCase();
  setText(newText);
  showAlert("Converted to lowercase!","success");
}

const handleCapClick=()=>{
  let newText=text.split(' ')
            .map(word => {
                // Handle empty strings from double spaces
                if (word.length === 0) return word; 
                
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
  setText(newText);
  showAlert("Converted to Capitalize!","success");
}

const handleToClear=()=>{
  let newText='';
  setText(newText);
  showAlert("Text has been cleared!","success");
}


const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard!","success");
}

const removeExtraSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  showAlert("Removed extra space!","success");
}


// this is for mobile phone working for copy clipboard:-
// const handleCopy = () => {
//     if (navigator.clipboard && navigator.clipboard.writeText) {
//         // Modern approach
//         navigator.clipboard.writeText(text).then(() => {
//             alert("Copied to clipboard!");
//         }).catch(err => {
//             console.error("Modern copy failed, trying fallback", err);
//             fallbackCopy(text);
//         });
//     } else {
//         // Fallback for older mobile browsers or non-HTTPS
//         fallbackCopy(text);
//     }
// };

// const fallbackCopy = (textToCopy) => {
//     const textArea = document.createElement("textarea");
//     textArea.value = textToCopy;
    
//     // Ensure the textarea is off-screen
//     textArea.style.position = "fixed";
//     textArea.style.left = "-9999px";
//     textArea.style.top = "0";
//     document.body.appendChild(textArea);
    
//     textArea.focus();
//     textArea.select();
    
//     try {
//         document.execCommand('copy');
//         alert("Copied to clipboard (fallback)!");
//     } catch (err) {
//         alert("Unable to copy");
//     }
    
//     document.body.removeChild(textArea);
// };  //end

const handleOnChange=(event)=>{
  setText(event.target.value);
}

  const[text,setText]=useState('');  // Enter text here-> this is default value of text var.(it is not var basically it is state)
  // setText(text);


  return (
    <>
   <div className="container">
    <h1 style={{color:mode==='dark'?'white':'#042743'}}>{heading}</h1>
<div className="mb-3" >
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:mode==='dark'?'#042743':'white',color:mode==='dark'?'white':'#042743'}} id="text" rows="8"></textarea>
</div>
 
{/* Wrap both the Submit button and the Dropdown div in this d-flex container */}
<div className="d-flex align-items-center my-3">

  <div className="dropdown">
    <button 
      className="btn btn-primary dropdown-toggle" 
      type="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
    >
      Convert to
    </button>
    <ul className="dropdown-menu">
      <li><button className="dropdown-item" onClick={handleUpClick}>Convert to Upper Case</button></li>
      <li><button className="dropdown-item" onClick={handleLoClick}>Convert to Lower Case</button></li>
      <li><button className="dropdown-item" onClick={handleCapClick}>Convert to Capitalized Case</button></li>
    </ul>
  </div>
  <button onClick={handleCopy} className="btn btn-primary ms-2" >
   Copy Clipboard
  </button>

   <button onClick={removeExtraSpace} className="btn btn-primary ms-2" >
   Remove Extra Space
  </button>

  <button className="btn btn-primary ms-2" onClick={handleToClear}>Clear Text</button>
</div>

    

    <div className="container my-3" style={{color:mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary:</h1>
      <p>{text.split(" ").length} words & {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here..."}</p>
    </div>
    </div>
    </>
  )
}
