import Image from "next/image";
const Avatar = ({ url }) => {
  return (
    <img
      className="h-10 w-10 rounded-full cursor-pointer transition duration-150 hover:scale-110"
      loading="lazy"
      src={url}
      alt="profilepic"
    />
  );
};

export default Avatar;
