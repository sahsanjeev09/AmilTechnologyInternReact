import Input from "../../components/Input";
import Button from "../../components/Button";
import "../../styles/component/form.css";

const FormPages = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>User Information</h2>

        <Input
          label="First Name"
          placeholder="Enter your first name"
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name"
        />
        <Input
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          label="Phone"
          placeholder="Enter your phone number"
        />

        <div className="form-buttons">
          <Button type="submit" variant="primary" buttonText="Submit" />
          <Button type="button" variant="secondary" buttonText="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default FormPages;
