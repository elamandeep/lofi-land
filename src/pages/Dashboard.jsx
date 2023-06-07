import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { Menu, Tab } from "@headlessui/react";
import { SideMenu } from "../components/SideMenu";
import { useAppStore } from "../hooks/useAppStore";
import { Account } from "appwrite";

const Dashboard = () => {
  const { isLogin} = useAppStore((state) => ({
    login: state.isLogin,
  }));

  

  let t = new Date().toLocaleTimeString().split(":");
  let currTime = t.slice(0, 2);
  const [time, setTime] = useState(currTime);

  const [links, setLinks] = useState([
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Signup" },
  ]);

  useEffect(() => {
    if (isLogin) {
      setLinks([{ href: "/logout", label: "logout" }]);
    }
  }, [isLogin]);

  // useEffect(() => {
  //   (async () => {
  //     await account.get();
  //     try {
  //       const jwt = await account.createJWT();
  //       console.log(jwt);
  //     } catch {
  //       console.log("error");
  //     }
  //   })();
  // }, [account]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(currTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="font-sans ">
        <header className="z-20 absolute p-6 flex justify-between items-center w-full">
          <h1 className="text-white text-4xl  font-pacifico">lofi land</h1>

          <ul className="space-x-6 flex ">
            <li className="bg-black/80 rounded-md p-2 border-[0.5] border-gray-50">
              <h1 className="font-bold text-white">
                {time.join(" : ")} {t[2].split(" ").slice(1)}{" "}
              </h1>
            </li>
            <li></li>
            <li></li>
            <li>
              <Menu>
                <Menu.Button className="bg-black/80 rounded-md p-2 border-[0.5] border-gray-50">
                  <AlignJustify className="text-white" size={20} />
                </Menu.Button>
                <Menu.Items className="bg-black/80 mt-3 rounded-md p-2 border-[1px] border-white/60 absolute right-11 flex flex-col">
                  {links.map((link, index) => (
                    <Fragment key={index}>
                      <Menu.Item
                        key={link.href}
                        className="p-2 rounded-md font-semibold "
                        as={Fragment}
                      >
                        {({ active }) => (
                          <a
                            href={link.href}
                            className={`${
                              active ? "bg-yellow-500 text-white" : "text-white"
                            }`}
                          >
                            {link.label}
                          </a>
                        )}
                      </Menu.Item>
                    </Fragment>
                  ))}
                </Menu.Items>
              </Menu>
            </li>
          </ul>
        </header>

        <SideMenu />

        <video
          src="https://res.cloudinary.com/dz1yphmgw/video/upload/v1681395568/lofi%20land/wallpaper1_lmcgyx.mp4"
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 object-cover w-full h-full"
        ></video>
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
