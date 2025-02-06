import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";


function Home() {
  const [loginData, setloginData] = useState({ name: "", email: "" });
  const [store, setStore] = useState([]);
  

  useEffect(() => {
    fetchData();
  },[]);

  const handleInputChange = (e) => {
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        name: loginData.name,
        email: loginData.email,
        location: loginData.location,
        occupation: loginData.occupation,
        phoneNumber: loginData.phoneNumber,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
     await axios
      .get("http://localhost:8000/showdata")
      .then((res) => {
        console.log(res.data);
        
        setStore(res.data.data)
      });
  };

  return (
    <div className="main">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[40%] h-[200px] border border-black flex flex-col items-center"
        >
          <h1>Your Details</h1>
          <input
            type="text"
            placeholder="name"
            className="w-[80%] h-[40px] border border-black rounded-md p-[5px] outline-none"
            onChange={handleInputChange}
            value={loginData.name}
            name="name"
          />
          <input
            type="text"
            placeholder="email"
            className="w-[80%] h-[40px] border border-black rounded-md p-[5px] outline-none"
            onChange={handleInputChange}
            value={loginData.email}
            name="email"
          />
          <input
            type="text"
            placeholder="location"
            className="w-[80%] h-[40px] border border-black rounded-md p-[5px] outline-none"
            onChange={handleInputChange}
            value={loginData.location}
            name="location"
          />
          <input
            type="text"
            placeholder="occupation"
            className="w-[80%] h-[40px] border border-black rounded-md p-[5px] outline-none"
            onChange={handleInputChange}
            value={loginData.occupation}
            name="occupation"
          />
          <input
            type="number"
            placeholder="phoneNumber"
            className="w-[80%] h-[40px] border border-black rounded-md p-[5px] outline-none"
            onChange={handleInputChange}
            value={loginData.phoneNumber}
            name="phoneNumber"
          />
          <button
            type="submit"
            className="w-[100%] h-[40px] border border-black rounded-md"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="data">
        {
         store && store.map((info, i) => (
            <div className="d border" key={i}>
              <h1>id:{info._id}</h1>
              <h1>name:{info.name}</h1>
              <h1>email:{info.email}</h1>
              <h1>location:{info.location}</h1>
              <h1>occupation:{info.occupation}</h1>
              <h1>phoneNumber:{info.phoneNumber}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;