import React, { createContext, useState, useEffect } from "react";
// sha256 키 : django-insecure-5)vg3itd%!grru6gqsg2&n_z)iqwnmi=vx40d-0sm9cak)0dk^

// Create contexts
const UserContext = createContext();
const WordContext = createContext();
const TestContext = createContext();

// Create a provider component
const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [wordData, setWordData] = useState(null);
  const [testData, setTestData] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const HOSTNAME = "http://172.30.1.92:8000";
    const fetchUserdata = async () => {
      try {
        const response = await fetch(HOSTNAME + "/user", options);
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (err) {
        setError(err);
      }
    };

    const fetchWorddata = async () => {
      try {
        const response = await fetch(HOSTNAME + "/word", options);
        const data = await response.json();
        setWordData(data);
        console.log(data);
      } catch (err) {
        setError(err);
      }
    };

    const fetchTestdata = async () => {
      try {
        const response = await fetch("https://api.example.com/testdata");
        const data = await response.json();
        setTestData(data);
        console.log(data);
      } catch (err) {
        setError(err);
      }
    };

    const fetchQuestiondata = async () => {
      try {
        const response = await fetch("https://api.example.com/testdata");
        const data = await response.json();
        setQuestionData(data);
        console.log(data);
      } catch (err) {
        setError(err);
      }
    };
    // Fetch all data
    const fetchData = async () => {
      setLoading(true);
      await fetchUserdata();
      await fetchWorddata();
      // await fetchTestdata();
      // await fetchQuestiondata();
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, loading, error }}>
      <WordContext.Provider value={{ wordData, loading, error }}>
        <TestContext.Provider value={{ testData, loading, error }}>
          {children}
        </TestContext.Provider>
      </WordContext.Provider>
    </UserContext.Provider>
  );
};

export { UserContext, WordContext, TestContext, DataProvider };
