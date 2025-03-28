import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Load_file from "./components/load_file/load_file";
import PopUp from "./components/popUp/PopUp";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import styles from "./App.module.scss";

import Dibujo_1 from "/Dibujo_1.svg";
import Dibujo_5 from "/Dibujo_5.svg";

function App() {
  const [showExcel, setShowExcel] = useState(true);
  const [fileData, setFileData] = useState();
  const [popUps, setPopUps] = useState(null);

  const [popUpStates, setPopUpStates] = useState({
    show_1: false,
    show_5: false,
    // Add more as needed
  });
  const dibujos = {
    1: Dibujo_1,
    5: Dibujo_5,
  };

  const toggle = (num) => () => togglePopUpState(`show_${num}`);

  const togglePopUpState = (key) => {
    setPopUpStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the specific pop-up state
    }));
  };

  const closeExcel = () => setShowExcel(false);

  const handleFileLoaded = (data) => {
    setFileData(data);
  };

  useEffect(() => {
    if (fileData) {
      const grouped = []; // This will hold the nested arrays (groups)
      for (const obj of fileData) {
        if (obj.SS > 0) {
          // Only include items with cantidad > 0
          // Find if a group for this 'pag' already exists
          let group = grouped.find((g) => g[0]?.Posición === obj.Posición);
          if (group) {
            // If the group exists, add the object to it
            group.push(obj);
          } else {
            // Otherwise, create a new group with this object
            grouped.push([obj]);
          }
        }
      }
      setPopUps(grouped);
    }
  }, [fileData]);

  return (
    <div
      style={{
        maxHeight: "100vh",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <div className={` ${styles.corporate_border}`}></div>

      <Container fluid className="min-vh-100 p-2  pl-0">
        {/* Home Component */}
        <Home
          data={fileData}
          popUps={popUps}
          setPopUps={setPopUps}
          setPopUpStates={setPopUpStates}
          toggle={toggle}
        />
        {popUps && popUps.length > 0 ? (
          popUps.map((data, index) => {
            const popUpKey = `${data[0].Posición}`;
            const show = `show_${data[0].Posición}`;
            return (
              <div
                key={index}
                style={{
                  maxHeight: "10vh",
                  backgroundColor: "red !important",
                }}
              >
                <PopUp
                  show={popUpStates[show] || false}
                  handleClose={() => togglePopUpState(show)}
                  num={popUpKey}
                  data={data}
                  img={dibujos[popUpKey]}
                />
              </div>
            );
          })
        ) : (
          <></>
          // <div className="text-center p-4">
          //   <h1>
          //     Todavia <span className="text-gradient">no</span> se cargaron
          //     datos
          //   </h1>
          // </div>
        )}
        {/* Popup FileUpload */}
        {showExcel && (
          <div className="fixed inset-0  bg-opacity-25 flex justify-center items-center z-50">
            <Load_file
              show={showExcel}
              handleClose={closeExcel}
              onFileLoaded={handleFileLoaded}
              className="bg-white bg-opacity-25 p-8 rounded-lg shadow-lg w-1/2 h-1/2 flex flex-col justify-center items-center"
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
