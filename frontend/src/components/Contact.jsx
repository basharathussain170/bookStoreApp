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
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-2xl bg-base-200 border border-base-300 rounded-lg p-8 shadow-md"
          aria-label="contact form"
        >
          <header className="mb-6">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="text-sm text-gray-500 mt-1">
              Have a question, suggestion, or feedback? Send us a short message
              and we'll respond soon.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className={`input w-full ${errors.name ? "input-error" : ""}`}
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className={`input w-full ${errors.email ? "input-error" : ""}`}
                placeholder="you@example.com"
                {...register("email", { required: "Email is required" })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="label">Message</label>
              <textarea
                className={`textarea w-full ${
                  errors.message ? "input-error" : ""
                }`}
                placeholder="Write your message..."
                rows={5}
                {...register("message", { required: "Message is required" })}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mt-6">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button className="btn btn-ghost" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
