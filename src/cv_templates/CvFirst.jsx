import html2canvas from "html2canvas";
import React from "react";
import jsPDF from "jspdf";

import "./CvFirst.css";

const CvFirst = (props) => {
  const data = props.data;
  const downloadPDF = () => {
    const div_topdf = document.querySelector(".to_pdf");
    html2canvas(div_topdf, { allowTaint: true, useCORS: true }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        pdf.save("download.pdf");
      }
    );
  };

  return (
    <div className="cv_1_container">
      <div className="to_pdf">
        <div className="cv_1_header">
          <img
            src={data.image}
            className="cv_1_image"
            alt="couldn't load"
          ></img>
          <div className="cv_1_title_container">
            <h3 className="black cv_1_title">
              {data.name} <span className="black">{data.surname}</span>
            </h3>
            <h4 className="black cv_1_job">{data.job}</h4>
          </div>
        </div>
        <div className="cv_1_body">
          <div className="cv_1_sidebar">
            <p className="black">
              phone:<span className="black">{data.phone}</span>
            </p>
            <p className="black">
              email:
              <p className="black" style={{ marginTop: "0" }}>
                {data.email}
              </p>
            </p>
          </div>
          <div className="cv_1_main">
            {data.skills.length !== 0 && (
              <div className="cv_1_skills">
                <h4 className="black cv_1_section_title">Skills</h4>
                <ul>
                  {data.skills.map((pieceOfData) => (
                    <li className="black cv_1_list_item">{pieceOfData}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.languages.length !== 0 && (
              <div className="cv_1_skills">
                <h4 className="black cv_1_section_title">Languages</h4>
                <ul>
                  {data.languages.map((pieceOfData) => (
                    <li className="black cv_1_list_item">{pieceOfData}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <button onClick={downloadPDF} className="upload_button pdf_download">
        download PDF
      </button>
    </div>
  );
};

export default CvFirst;
