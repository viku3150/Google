import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import XIcon from "@heroicons/react/solid/XIcon";
import MicrophoneIcon from "@heroicons/react/solid/MicrophoneIcon";
import SearchIcon from "@heroicons/react/outline/SearchIcon";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  const searchInputRef = useRef(null);
  return (
    <header
      className="sticky top-0 bg-white 
    "
    >
      <div className="flex w-full p-6 items-center">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt=""
          height={40}
          width={120}
          className="cursor-poiner"
          onClick={() => router.push("/")}
        />
        <form
          className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full 
        flex-grow shadow-lg max-w-3xl items-center"
        >
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon
            onClick={search}
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url={`https://avatars.githubusercontent.com/u/61621763?v=4`}
        />
      </div>
      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
