import React, {useState,useEffect} from 'react'
import Profile from '../../assets/github.svg'
const User = () => {
    const [user, setUser] = useState("");
    const [pic, setPic] = useState(Profile);
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [email, setEmail] = useState("");
    const [twitterUserName, setTwitterUserName] = useState("");
    const [blog, setBlog] = useState("");
    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    const header = {
      Authentication: `Bearer ${process.env.Github_Auth_Token}`,
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      setLoading(true);
  
      try {
        const response = await fetch(`https://api.github.com/users/${user}`, {
          headers: header,
        });
  
        if (!response.ok) {
          throw new Error("Invalid username");
        }
  
        const data = await response.json();
        setPic(data.avatar_url);
        setName(data.name);
        setEmail(data.email);
        setBlog(data.blog);
        setTwitterUserName(data.twitter_username);
        setStartDate(data.created_at);
        setCompany(data.company);
        setLoading(false);
        setError("");
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    return (
      <>
  
        {user && (
          <div className="user">
            <div className="pic text-center ">
              <img
                src={pic}
                alt="User Profile Avatar"
                height="40"
                width="40"
                className=""
              />
            </div>
            <div className="name">Hi {name}</div>
            <div className="details">
              <div className="mail">{email}</div>
              <div className="blog">{blog}</div>
              <div className="twitter">{twitterUserName}</div>
              <div className="company">{company}</div>
              <div className="date">{startDate}</div>
            </div>
          </div>
        )}
  
        {loading && <div className="loading">Still Loading...</div>}
  
        {error && <div className="error">{error}</div>}
      </>
    );
  };
  
  export default User;
  