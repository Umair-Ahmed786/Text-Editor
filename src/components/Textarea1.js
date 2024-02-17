import React from 'react';
import Form from 'react-bootstrap/Form';
import texture from '../img/texture.png';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons';

const Textarea1 = ({ text, settext, alert, setalert, mode }) => {

  const handleUppercase = () => {
    settext(text.toUpperCase());
    setalert(" Converted to UpperCase!");
  };

  const handleLowercase = () => {
    settext(text.toLowerCase());
    setalert(" Converted to LowerCase!");
  };

  const cleartext = () => {
    settext('');
    setalert(" Text Cleared!");
  };

  const copytext = () => {
    const text2 = document.getElementById("textarea");
    if (text2) {
      text2.select();
      document.execCommand('copy');
    }
    setalert(" Text Copied!");
  };

  const removespace = () => {
    settext(text.replace(/\s+/g, ' '));
    setalert(" Removed Extra Spaces!");
  };

  const handlechange = (e) => {
    settext(e.target.value);
  };

  return (
    <div className="container-fluid textareabg">
      <div className="container" style={{ color: mode === 'light' ? 'black' : 'white' }}>
        <Form>
          <h1 className='mt-3'>Enter the text below to Analyze </h1>
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" id='textarea' rows={8} value={text} onChange={handlechange} style={{ backgroundColor: mode === 'dark' ? 'grey' : 'white', color: mode === 'dark' ? 'white' : 'black' }} />
          </Form.Group>
        </Form>

        <div className="my_btn mt-3">
          <button className='btn btn-primary btn-md margin_left mt-3' onClick={handleUppercase}>Convert to UpperCase</button>
          <button className='btn btn-primary btn-md margin_left mt-3' onClick={handleLowercase}>Convert to LowerCase</button>
          <button className='btn btn-primary btn-md margin_left mt-3' onClick={cleartext}>Clear Text</button>
          <button className='btn btn-primary btn-md margin_left mt-3' onClick={copytext}>Copy Text</button>
          <button className='btn btn-primary btn-md margin_left mt-3' onClick={removespace}>Remove Extra Spaces</button>
        </div>

        <div className="summary mt-3">
          <h1>Your text Summary</h1>
          <div className="words mt-2">
            <p>{(text.trim().length > 0) ? text.trim().split(" ").length : 0} word and {text.length} characters</p>
            <p className='mt-2'>{(text.trim().length > 0) ? (0.008 * text.trim().split(" ").length) : 0} minutes to read</p>
          </div>
        </div>

        <div className="preview mt-4">
          <h1>Preview</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Textarea1;
