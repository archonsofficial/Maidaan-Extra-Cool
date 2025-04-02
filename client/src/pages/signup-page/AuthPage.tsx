import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { googleIcon } from "@/assets";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { maidaanMainLogo } from "@/assets";
import { Link } from "react-router-dom";

const signupSchema = yup.object({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(15, "Password must not exceed 15 characters")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*()_+\-=[\]{}|;:'",.<>?/]/,
      "Password must contain at least one special character",
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
export default function AuthPage() {
  // const time = useTime();
  // const rotate = useTransform(time, [0, 7000], [0, 360], { clamp: false });
  // const rotateBg = useTransform(rotate, (r) => {
  //   return `conic-gradient(from ${r}deg, transparent 70%, #cef23f)`;
  // });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema), mode: "onBlur" });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="bg-black font-sansation-light h-screen w-full">
      <span>
        <img
          src={maidaanMainLogo}
          className=" sticky top-0 h-[76px] md:h-20 pl-6 pt-[10px]"
        ></img>
      </span>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center justify-center"
      >
        <div>
          <div className="pt-8">
            <div className="font-bold text-3xl md:text-5xl text-white font-unbounded text-center">
              Welcome to
            </div>
            <div className="font-bold text-3xl md:text-5xl text-mgreen font-unbounded text-center">
              Maidaan
            </div>
            <p className="text-white text-pretty pt-4 w-96 justify-center text-center md:text-lg text-sm md:w-full">
              Join Our Community
            </p>
            <p className="text-white text-pretty pt-1 w-96 justify-center text-center md:text-lg text-sm md:w-full">
              Compete, Organize and Experience the thrill of sports
            </p>
          </div>
        </div>
        <div className="relative -z-20 items-center justify-center flex-col flex h-[31rem] w-[25rem] rounded-3xl mt-3 md:mt-5">
          <div className="absolute h-[30.75rem] w-[24.75rem] bg-neutral-800 rounded-3xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col text-white p-5 text-xs "
            >
              <div className="flex flex-row">
                <label className="text-white">Email</label>
                <label className="text-mgreen pl-1">*</label>
              </div>
              <input
                {...register("email")}
                placeholder="Enter your email address"
                className="border-[0.5px] border-white text-gray-400 w-full mt-3 p-2 rounded-lg"
              ></input>
              <div className="min-h-[20px]">
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-row pt-3">
                <label className="text-white">Password</label>
                <label className="text-mgreen pl-1">*</label>
              </div>
              <input
                {...register("password")}
                placeholder="Your Password"
                className="border-[0.5px] border-white text-gray-400 w-full mt-3 p-2 rounded-lg"
              ></input>
              <div className="min-h-[20px]">
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <input
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                className="border-[0.5px] border-white text-gray-400 w-full mt-3 p-2 rounded-lg"
              ></input>
              <div className="min-h-[20px]">
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                onClick={() => handleSubmit}
                className="cursor-pointer bg-mgreen text-black mt-6 w-full p-2 rounded-lg"
              >
                Sign up
              </button>
              <div className="flex flex-row">
                <hr className="border-[0.5px] border-mgreen mt-9 w-[10rem]"></hr>
                <p className="text-mgreen font-unbounded mt-[1.6rem] px-1 text-sm">
                  OR
                </p>
                <hr className="border-[0.5px] border-mgreen mt-9 w-[10rem]"></hr>
              </div>
            </form>
            <div className="flex flex-col text-xs w-[24.75rem] px-5 justify-center items-center">
              <button className="cursor-pointer border rounded-lg border-mgreen text-mgreen w-full p-2 mt-2 items-center flex justify-center">
                <img src={googleIcon} className="w-6 h-6 mr-2"></img>
                Signup with google
              </button>
              <div className="flex flex-row">
                <p className="p-2 mt-2 text-white">Already have an account?</p>
                <Link to={"/signin"} className="text-mgreen pt-2 mt-2">
                  Log in
                </Link>
              </div>
            </div>
          </div>
          {/* <motion.div
            style={{
              backgroundImage: rotateBg,
            }}
            className="absolute -z-10 h-[31rem] w-[25rem] blur-sm rounded-3xl"
          ></motion.div>
          <motion.div
            style={{
              backgroundImage: rotateBg,
            }}
            className="absolute -z-20 h-[31rem] w-[25rem] rounded-3xl"
          ></motion.div> */}
        </div>
      </motion.div>
    </div>
  );
}
