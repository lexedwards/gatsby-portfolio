import React from 'react';
import { navigate } from 'gatsby-link';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const NetlifyForm = ({ name, action, useFormState, children, className }) => {

  const [state, setState] = useFormState;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": e.getAttribute('name'),
       ...state 
      })
    })
      .then(() => navigate(e.getAttribute('action')))
      .catch(error => alert(error));
    e.preventDefault();
  };


  return (
    <form 
      name={name} 
      method="post" 
      className={className}
      action={action}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      >
      <input type="hidden" name="form-name" value={name} />
      <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
      </p>
      {children}
    </form>
  );
};

export default NetlifyForm;