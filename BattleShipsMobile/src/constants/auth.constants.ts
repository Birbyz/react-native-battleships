import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("E-Mail is required")
    .email("Invalid E-Mail address"),
  password: Yup.string().required("Password is required"),
});
