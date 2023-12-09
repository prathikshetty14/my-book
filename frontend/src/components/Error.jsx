import Navbar from "./Navbar";

function Error() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600">We apologize for the inconvenience. It seems like there's an error.</p>
          <p className="text-gray-600">Please try again later or contact support.</p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Error;
