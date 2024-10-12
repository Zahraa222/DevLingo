import Image from "next/image";
import Link from "next/link";

const LanguageBlock = ({ imageUrl, text, route }) => {
  return (
    <Link href={route}>
      {" "}
      <div className="flex flex-col items-center justify-center w-48 h-48 rounded-lg shadow-md overflow-hidden bg-white cursor-pointer">
        {" "}
        <div className="w-full h-full flex items-center justify-center relative">
          <Image
            src={imageUrl}
            alt={text}
            className="object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full p-2 bg-white text-center">
          <p className="text-gray-700 font-medium">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default LanguageBlock;
