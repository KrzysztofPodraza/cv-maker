import logo from "./logo.svg";
import "./App.css";
import React from "react";

//pages
import UploadImage from "./steps/UploadImage";
import Informations from "./steps/Informations";
import Job from "./steps/Job";
import Skills from "./steps/Skills";
import Languages from "./steps/Languages";

//cv templates
import CvFirst from "./cv_templates/CvFirst";
function App() {
  const [step, setStep] = React.useState(1);
  if (step < 1) {
    setStep(1);
  }
  const passInfoHandler = (object) => {
    const data_obj = data;
    data_obj.name = object.name;
    data_obj.surname = object.surname;
    data_obj.email = object.email;
    data_obj.phone = object.phone;
    setData(data_obj);
    setStep(step + 1);
  };
  const passImageHandler = (image) => {
    const data_obj = data;

    data_obj.image = image;
    setData(data_obj);

    setStep(step + 1);
  };
  const prevHandler = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const jobHandler = (job) => {
    const data_obj = data;

    setStep(step + 1);
    data_obj.job = job;
    setData(data_obj);
  };
  const skillsHandler = (skills) => {
    const data_obj = data;

    data_obj.skills = skills;
    setData(data_obj);

    setStep(step + 1);
  };
  const languagesHandler = (languages) => {
    const data_obj = data;

    data_obj.languages = languages;
    setData(data_obj);

    setStep(step + 1);
  };
  const [data, setData] = React.useState({
    image: "",
    name: "",
    surname: "",
    job: "",
    email: "",
    phone: "",
    skills: [],
    languages: [],
  });
  const steps = [
    <Informations passInfo={passInfoHandler} prev={prevHandler} />,
    <UploadImage passImage={passImageHandler} prev={prevHandler} />,
    <Job passJob={jobHandler} prev={prevHandler} />,
    <Skills passSkills={skillsHandler} prev={prevHandler} />,
    <Languages passLanguages={languagesHandler} prev={prevHandler} />,
    <CvFirst data={data} />,
  ];

  return <div className="App">{steps[step - 1]}</div>;
}

export default App;
