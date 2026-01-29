import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";
import { InputData } from "../../data/formData";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <Field
      as={type === "textarea" ? "textarea" : "input"}
      className="form-field"
      type={type}
      name={name}
      placeholder={placeholder}
    />
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

export const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be 50 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be 500 characters or less")
      .required("Message is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const formData = new FormData();
          Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value);
          });

          await fetch("https://formsubmit.co/zynkah@far3.io", {
            method: "POST",
              body: formData,
          });
            console.log("Form submitted successfully");
        } catch (error) {
          console.error("Error submitting form:", error);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-wrapper">
          {InputData.map((input) => (
            <FormInput
              key={input.name}
              label={input.label}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
            />
          ))}

          <button
            className="button__bordered"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
