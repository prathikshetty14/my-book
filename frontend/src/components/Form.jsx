import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import Result from './Result';  // Import the Result component

export default function Form() {
  const [formData, setFormData] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormData = async () => {
      setTimeout(async () => {
        setLoading(true);
        try {
          const res = await axios.get('http://localhost:8000/api/v1/formdata');
          setFormData(res.data[0].formMCQ);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      }, 500);
    };

    fetchFormData();
  }, []);

  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [`question${questionId}`]: optionId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/bookdata', selectedOptions);
      setBooksData(response.data.books);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-8 lg:max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-center">{booksData.length === 0 ? "Book Matching Form" : "Book Recommendations"}</h2>
          <br />

          {booksData.length === 0 ? (
            // Display the form
            <form onSubmit={handleSubmit}>
              {formData.map((data, index) => (
                <>
                  {/* Questions */}
                  <div className="mb-4" key={index}>
                    <label
                      className="block text-zinc-700 text-lg font-bold mb-2"
                      htmlFor={`answer${index + 1}`}
                    >
                      {data.question}
                    </label>

                    {/* Options */}
                    <div className="flex flex-col space-y-2">
                      {data.options.map((option) => (
                        <label key={option.id} className="cursor-pointer">
                          <input
                            type="radio"
                            name={`question${index + 1}`}
                            value={option.id}
                            className="mr-2 cursor-pointer"
                            onChange={() => handleOptionChange(data.id, option.id)}
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  </div>
                  <br />
                </>
              ))}
              <br />
              <button
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          ) : (
            // Display the result
            <Result books={booksData} setBooksData={setBooksData}/>
          )}
        </div>
      )}
    </>
  );
}
