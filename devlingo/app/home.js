import languages from "@/languages";
import LanguageBlock from "./components/LanguageBlock";
import Header from "./components/header";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pb-4 pl-4 pr-4 bg-blue-500">
      <Header />
      <h2 className="text-2xl font-bold mb-4 text-white">
        Pick a Language To Study:
      </h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {languages.map((language, index) => (
          <LanguageBlock
            key={index}
            imageUrl={language.imageUrl}
            text={language.text}
            route={`/${language.text.toLowerCase()}`}
          />
        ))}
      </div>
      {/* Link to chat with AI bot */}
      <Link
        to="/gethelp" // Use 'to' instead of 'href'
        className="absolute top-4 right-4 text-sm text-white bg-black py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
      >
        Need help? Chat with our AI bot
      </Link>
    </div>
  );
};

export default Home;
