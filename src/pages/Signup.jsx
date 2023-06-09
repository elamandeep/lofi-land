import { useCallback, useState } from "react";
import { Dialog } from "@headlessui/react";
import { account } from "../appwriteConfig";
import { v4 as uuidv4 } from "uuid";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log(email);

      account
        .create(uuidv4(), name, email, password)
        .then((res) => {
          account
            .createSession(email, password)
            .then((res1) => {
              console.log(res1)
              navigate("/login");
            })
            .catch((err) => {
              console.log("error in creating session", err);
            });
        })
        .catch((err) => {
          console.log("error in creating user", err);
        });

      setUser({ name: "", email: "", password: "" });
    },
    [name, email, password]
  );

  return (
    <>
      <Dialog
        className="w-full h-screen fixed inset-0 z-20 overflow-y-auto bg-black bg-opacity-50"
        open={true}
        onClose={() => false}
      >
        <Dialog.Panel className="text-white/70">
          <Dialog.Title>Login</Dialog.Title>
          <Dialog.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <section className="flex flex-col justify-center items-center space-y-3">
              <div className="w-72">
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name
                  </label>
                </div>
              </div>

              <div className="w-72">
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
              </div>
              <div className="w-72">
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    type="password"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-yellow-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="text-white bg-yellow-500 w-72 rounded-md text-lg font-semibold py-3"
              >
                Login
              </button>
            </section>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Signup;
