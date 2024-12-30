import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import Heading from "../components/Heading";

const Registration = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/home");
    },
  });

  return (
    <div className="flex items-center">
      <img
        src="src/assets/Login/image 2.png"
        className="h-screen w-1/2 object-cover"
        alt="Background"
      />
      <div className="flex flex-col items-center w-1/2">
        <Heading title={"Create New Profile"} />
        <form onSubmit={formik.handleSubmit}>
          <div className="text-[#4A5568]">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              className="my-2 p-2 border-[1px] rounded-[5px] w-full"
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>
          <div className="text-[#4A5568]">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              className="my-2 p-2 border-[1px] rounded-[5px] w-full"
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="text-[#4A5568]">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              className="my-2 p-2 border-[1px] rounded-[5px] w-full"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="text-[#4A5568]">
            <label htmlFor="phoneNumber" className="text-sm">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              className="my-2 p-2 border-[1px] rounded-[5px] w-full"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            )}
          </div>
          <Button title={"Register now"} type="submit" className="w-full" />
          <div className="mt-4">
            <Link to={"/"} className="text-[#4A5568] text-sm mt-4">
              If you have an account?{" "}
              <span className="text-blue-700">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
