import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
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

interface FormProps {
  email: string;
}

export const ContactForm = ({ email }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
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
      onSubmit={() => {
        // After validation, submit the form natively
        if (formRef.current) {
          formRef.current.submit();
        }
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form
          className="form-wrapper"
          // action="https://formsubmit.co/zynkah@far3.io"
          action={`https://formsubmit.co/${email}`}
          method="POST"
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

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
        </form>
      )}
    </Formik>
  );
};
