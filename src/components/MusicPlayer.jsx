import { Tab } from "@headlessui/react";
import { Moon, Coffee, Music4 } from "lucide-react";
export const MusicPlayer = () => {
  const genreIcon = [
    {
      icon: <Moon size={20} />,
      name: "sleepy",
    },
    {
      icon: <Music4 size={20} />,
      name: "sleepy",
    },
    {
      icon: <Coffee size={20} />,
      name: "chill",
    },
  ];
  const musicPanel = [
    {
      component: (
        <>
          <iframe
            style={{ borderRadius: "20px" }}
            src="https://open.spotify.com/embed/playlist/1lVoSF8Bd6bQJaoEHFGegX?utm_source=generator&theme=0"
            width="100%"
            height="200"
            allow=" clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </>
      ),
    },
    {
      component: (
        <>
          <iframe
            style={{ borderRadius: "20px" }}
            src="https://open.spotify.com/embed/playlist/4dJSLiR8n2ZQUccpyXYKvE?utm_source=generator&theme=0"
            width="100%"
            height="200"
            allow="
        autoplay;clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </>
      ),
    },
    {
      component: (
        <>
          <iframe
            style={{ borderRadius: "20px" }}
            src="https://open.spotify.com/embed/playlist/0iepisLXvVe5RxB3owHjlj?utm_source=generator&theme=0"
            width="100%"
            height="200"
            allow="
        autoplay;clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </>
      ),
    },
  ];

  return (
    <>
      <section className="rounded-md bg-black/80 w-80 h-72 overflow-y-scroll p-4 space-y-4">
        <Tab.Group>
          <Tab.List className="flex justify-around w-full ring-1 ring-white/50 bg-black/20 rounded-md p-3">
            {genreIcon.map((icon, index) => (
              <Tab className="flex flex-col items-center " key={index}>
                <button className="text-white/60 bg-black/40 active:bg-yellow-400 p-4  rounded-full">
                  {icon.icon}
                </button>

                <span className="text-white/60 text-center font-semibold">
                  {icon.name}
                </span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {musicPanel.map((panel, index) => (
              <Tab.Panel key={index}>{panel.component}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  );
};
