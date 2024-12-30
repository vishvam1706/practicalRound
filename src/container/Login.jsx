import Button from "../components/Button";
import Heading from "../components/Heading";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const Navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (
        values.email.toLocaleLowerCase() === "abcd@gmail.com" &&
        values.password === "abcd"
      ) {
        Navigate("/home");
      } else {
        console.log("something went Wrong");
      }
    },
  });

  return (
    <div className="flex items-center">
      <img
        src="src\assets\Login\image 2.png"
        className="h-screen w-1/2 object-cover"
      ></img>
      <div className="flex flex-col items-center w-1/2">
        <form onSubmit={formik.handleSubmit}>
          <p className="text-left text-sm text-[#2D3748]">Welcome back</p>
          <Heading title={"Login to your account"}></Heading>
          <div className="text-[#4A5568]">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id={"email"}
              className="my-2 p-2 border-[1px] rounded-[5px] w-full"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
          <div className="text-[#4A5568]">
            <label htmlFor="passsword" className="text-sm">
              Password
            </label>
            <input
              type="password"
              id={"password"}
              className="my-2 p-2 border-[1px] rounded-[5px] w-full"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
          <Button title={"Login"} type="submit" className="w-full"></Button>
          <div className="mt-4">
            <Link to={"/Registration"} className="text-[#4A5568] text-sm">
              Dont have an account?{" "}
              <span className="text-blue-700">Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
