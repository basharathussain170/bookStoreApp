import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center mt-12">
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <caption className="text-4xl">Contact Us</caption>
          <label className="fieldset">
            <span className="label">Name</span>
            <input
              type="text"
              className="input validator"
              placeholder="Name"
              required
              {...register("name", { required: true })}
            />
            <span className="validator-hint hidden">name required</span>
          </label>

          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input validator"
              placeholder="Email"
              required
              {...register("email", { required: true })}
            />
            <p className="validator-hint hidden">email required</p>
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Message</label>
            <textarea
              className="textarea input validator w-full"
              placeholder="Write your message..."
              required
              rows={4}
              {...register("message", { required: true })}
            ></textarea>
            <p className="validator-hint hidden">message required</p>
          </fieldset>

          <button className="btn btn-neutral mt-4" type="submit">
            Submit
          </button>
          <button className="btn bg-gray-500 mt-1" type="reset">
            Reset
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
