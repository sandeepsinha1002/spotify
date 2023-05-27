import Image from "next/image"
import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
  } from "@heroicons/react/solid";
  import { FaMicrophoneAlt } from "react-icons/fa";
  import { RiCompassFill } from "react-icons/ri";
function Sidebar() {
  return (
    <section className="fixed top-0 -40 flex flex-col p-4 items-center bg-black h-screen w-[90px] space-y-8">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/900px-Spotify.png?20170916190817" width={56} height={56}/>
        <div className="flex flex-col space-y-8">
        <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
        <RiCompassFill className="sidebarIcon text-2xl" />
        <FaMicrophoneAlt className="sidebarIcon ml-1" />
        <ChartBarIcon className="sidebarIcon" />
        <ClockIcon className="sidebarIcon" />
        <DotsHorizontalIcon className="sidebarIcon" />
        </div>
    </section>
  )
}

export default Sidebar