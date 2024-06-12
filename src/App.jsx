import { Form, Input } from 'formfusion';
import './App.css';

function App() {
  return (
    <Form validateOnChange className="form">
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
      <button type="submit">Save</button>
    </Form>
  );
}

export default App;
