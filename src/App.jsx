import { Form, Input } from 'formfusion';
import './App.css';
import { useState } from 'react';

function App() {
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = (data) => {
    setSuccessMessage(`Welcome ${data.firstName}`);
  };

  return (
    <Form onSubmit={handleSubmit} validateOnChange className="form">
      <div role="region" id="success-message" aria-live="polite" className="form__successMessage">
        {successMessage}
      </div>
      <fieldset>
        <legend>Personal Information</legend>
        <Input
          type="alphabetic"
          id="firstName"
          name="firstName"
          label="First name"
          classes={{ root: 'formControl', error: 'formControl__error' }}
        />
        <Input
          type="alphabetic"
          id="lastName"
          name="lastName"
          label="Last name"
          classes={{ root: 'formControl', error: 'formControl__error' }}
        />
        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          required
          classes={{ root: 'formControl', error: 'formControl__error' }}
        />
      </fieldset>
      <fieldset>
        <legend>Address</legend>
        <Input
          type="text"
          id="street"
          name="street"
          label="Street"
          classes={{ root: 'formControl', error: 'formControl__error' }}
        />
        <Input
          type="alphabetic"
          id="city"
          name="city"
          label="City"
          classes={{ root: 'formControl', error: 'formControl__error' }}
        />
      </fieldset>
      <button type="submit" aria-controls="success-message">Save</button>
    </Form>
  );
}

export default App;
