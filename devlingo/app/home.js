import languages from "@/languages";
import LanguageBlock from "./components/LanguageBlock";
import Header from "./components/header";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-blue-500">
      <Header />
      <h2 className="text-2xl font-bold mb-4 text-white">Pick a Language:</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {languages.map((language, index) => (
          <LanguageBlock
            key={index}
            imageUrl={language.imageUrl}
            text={language.text}
            route={`/languages/${language.text.toLowerCase()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
