import { Link } from "react-router";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div
        id="my_modal_3"
        className="flex h-screen items-center justify-center"
      >
        <div className="shadow-[0_0_10px_rgba(255,255,255,0.3)] p-5 rounded-2xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">Signup</h3>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost right-2 top-2"
              >
                ✕
              </Link>
            </div>

            {/* Name  */}
            <div className="mt-4  space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-75 md:w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
               <br />
              {errors.name && <span className="text-sm text-red-500">Name is required</span>}
            </div>
            {/* email  */}
            <div className="mt-4  space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-75 md:w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
               <br />
              {errors.email && <span className="text-sm text-red-500">email is required</span>}
            </div>

            {/* password */}
            <div className="mt-4  space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-75 md:w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
               <br />
              {errors.password && <span className="text-sm text-red-500">password is required</span>}
            </div>
            <div className="flex justify-between md:justify-around mt-6">
              <button className="bg-amber-600 text-gray-800 py-1.5 px-5 border rounded-md duration-300 ease-in-out  tracking-wider hover:bg-transparent hover:border-amber-600 hover:text-white cursor-pointer">
                Signup
              </button>
              <p>
                Have account?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
