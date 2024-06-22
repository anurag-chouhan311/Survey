import React, { useEffect, useState } from "react";
import "./Task3.css";
const Task3 = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [survey, setSurvey] = useState("");
  const [result, setResult] = useState([]);
  const [techArr, setTechArr] = useState([]);
  const [HealthArr, setHealthArr] = useState([]);
  const [educationArr, setEducationArr] = useState([]);
  const [techField, setTechField] = useState("");
  const [healthField, setHealthField] = useState("");
  const [eductaionField, setEducationField] = useState("");
  const [Etext, setEText] = useState("");
  const [dietSection, setDietSection] = useState("");
  const [textArea, setTextArea] = useState("");
  const [display, setDisplay] = useState(false);

  const getData = async (url) => {
    const data = await fetch(url);
    const resp = await data.json();
    setResult(resp);
    // console.log(result);
  };

  useEffect(() => {
    getData(`http://localhost:3000/${survey}`);
  }, [survey]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == "") {
      alert("Please fill the name field");
      return false;
    }
    if (mail == "") {
      alert("Please fill the mail field");
      return false;
    }
    if (survey == "") {
      alert("please fill the survey field");
      return false;
    }
    if (survey == "technology" && techField == "") {
      alert("Please fill the Technology section");
      return false;
    }
    if (survey == "health" && healthField == "") {
      alert("Please fill the Health section");
      return false;
    }
    if (survey == "education" && eductaionField == "") {
      alert("Please fill the Education section");
      return false;
    }
    if (survey == "education" && Etext == "") {
      alert("please fill the Field of education textBox");
    }
    if (survey == "health" && dietSection == "") {
      alert("Please fill the diet section");
      return false;
    }
    if (textArea == "" || textArea.length < 50) {
      alert(
        "please fill the text area section and must be filled with atleast 50 characters"
      );
      return false;
    }
    alert("submitted");
    setDisplay(true);
    return true;
  };
  return (
    <>
      <h2>Survey Form</h2>
     <div className="container">
     <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <br />
        <br />
        <span>Survey Topic </span>
        <select onChange={(e) => setSurvey(e.target.value)}>
          <option disabled selected value="select">
            select
          </option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
          <option value="education">Education</option>
        </select>
        <br />
        <br />
        {survey == "technology" && (
          <>
            <span>Favourite Programming language </span>{" "}
            <select onChange={(e) => setTechField(e.target.value)}>
              <option disabled selected value="select">
                select
              </option>
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
              <option value="c#">C#</option>
            </select>
            {result.length !== 0 &&
              result.map((item, index) => {
                item.questions.length !== 0 &&
                  item.questions.map((item2, index2) => {
                    techArr.push(item2);
                  });
              })}
            {techArr.map((item, index) => {
              if (index < 3) {
                return <h5>{item}</h5>;
              }
            })}
          </>
        )}
        {survey == "health" && (
          <>
            <span>Exercise Frequency </span>
            <select onChange={(e) => setHealthField(e.target.value)}>
              <option disabled selected value="select">
                select
              </option>
              <option value="daily">Daily</option>
              <option value="monthly">Monthly</option>
              <option value="weekly">weekly</option>
              <option value="rarely">Rarely</option>
            </select>
            <br />
            <br />

            <span>Diet Preference </span>
            <select onChange={(e) => setDietSection(e.target.value)}>
              <option disabled selected value="select">
                select
              </option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
            </select>
            {result.length !== 0 &&
              result.map((item, index) => {
                item.questions.length !== 0 &&
                  item.questions.map((item2, index2) => {
                    HealthArr.push(item2);
                  });
              })}
            {HealthArr.map((item, index) => {
              if (index < 3) {
                return <h5>{item}</h5>;
              }
            })}
          </>
        )}
        {survey == "education" && (
          <>
            <span>Highest Qualification </span>
            <select onChange={(e) => setEducationField(e.target.value)}>
              <option disabled selected value="select">
                select
              </option>
              <option value="high-school">High School</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
              <option value="phd">PHD</option>
            </select>
            <br />
            <br />
            <span>Field of study </span>
            <input
              value={Etext}
              onChange={(e) => setEText(e.target.value)}
              type="text"
            />
            {result.length !== 0 &&
              result.map((item, index) => {
                item.questions.length !== 0 &&
                  item.questions.map((item2, index2) => {
                    educationArr.push(item2);
                  });
              })}
            {educationArr.map((item, index) => {
              if (index < 3) {
                return <h5>{item}</h5>;
              }
            })}
          </>
        )}
        <span>Feedback </span> <br />
        <textarea
          cols="20"
          rows="5"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button>Submit</button>
      </form>
     </div>
      {display && (
        <>
         <div className="container2">
         <br />
          <br />
          <br />
          <br />
          <br />
          <h3>summary of data</h3>
          <p>Username : {name}</p>
          <p>Email : {mail}</p>
          <p>Survey Topic : {survey}</p>
          {survey == "technology" && (
            <p>Favourite Programming Language : {techField}</p>
          )}
          {
            techArr.length!==0 && 
            techArr.map((item,index)=>{
              if(index<3)
              {
                return(
                <p>{item}</p>
              )
              }
            })

            
          }
          {
            HealthArr.length!==0 && 
            HealthArr.map((item,index)=>{
              if(index<3)
              {
                return(
                <p>{item}</p>
              )
              }
            })

            
          }
          {
            educationArr.length!==0 && 
            educationArr.map((item,index)=>{
              if(index<3)
              {
                return(
                <p>{item}</p>
              )
              }
            })

            
          }
          {survey == "health" && (
            <>
              <p>Exercise Frequently : {healthField}</p>
              <p>Diet Preference : {dietSection}</p>
            </>
          )}
          {survey == "education" && (
            <>
              <p>Highest Qualification : {eductaionField}</p>
              <p>Field of Study : {Etext}</p>
            </>
          )}
          <p>Feedback : {textArea}</p>
         </div>
        </>
      )}
    </>
  );
};

export default Task3;
