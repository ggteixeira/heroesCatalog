import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          ></label>
        </div>
      </div>
      <input
        type="text"
        placeholder="Username"
        name="username"
        ref={register}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        ref={register({
          required: "You must enter a valid password",
          minLength: 3,
        })}
      />
      <input type="submit" ref={register} />
      {errors.password && <p>{errors.password.message}</p>}
    </form>
  );
}

export default Login;
