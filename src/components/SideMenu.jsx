import { Popover, Transition } from "@headlessui/react";
import { Sliders, Image, PlayCircle, Timer, BookOpen } from "lucide-react";
import { Fragment } from "react";
import { MusicPlayer } from "./MusicPlayer";

export function SideMenu() {
  const sliderOptions = [
    {
      icon: <Sliders className="text-white/80" size={20} />,
      title: "mixer",
      component: <MusicPlayer />,
    },
    {
      icon: <Image className="text-white/80" size={20} />,
      title: "scenes",
      component: <></>,
    },
    {
      icon: <PlayCircle className="text-white/80" size={20} />,
      title: "youtube",
      component: <></>,
    },
    {
      icon: <Timer className="text-white/80" size={20} />,
      title: "timer",
      component: <></>,
    },
    {
      icon: <BookOpen className="text-white/80" size={20} />,
      title: "notes",
      component: <></>,
    },
  ];

  return (
    <div className="absolute z-10 right-10 flex flex-col items-center bg-black/90 top-44 w-14 py-3 max-w-sm rounded-lg">
      {sliderOptions.map((option, index) => (
        <Popover className="relative" key={index}>
          {({ open, close }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-transparent p-3 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-opacity-75`}
              >
                <span>{option.icon}</span>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-3/4  z-10 mt-2 mr-4 w-screen max-w-sm px-4 sm:px-0 lg:max-w-3xl">
                  {option.component}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ))}
    </div>
  );
}
