import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="bg-black relative w-full h-full">
      <div className="h-full opacity-50 bg-center bg-cover absolute w-full bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg)]"></div>
      <div className="w-full relative h-full">
        <GptSearchBar />
      </div>
    </div>
  );
};

export default GptSearchPage;
