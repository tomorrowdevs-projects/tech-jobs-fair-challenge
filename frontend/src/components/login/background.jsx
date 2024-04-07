import React, { useState, useEffect } from "react"

const BackgroundComponent = () => {
    const [degrees, setDegrees] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setDegrees((prevDegrees) => {
          if (prevDegrees >= 180) {
            return prevDegrees - 1; // Se i gradi sono maggiori o uguali a 360, ritorna a 0
          } else if (prevDegrees <= 0) {
            return prevDegrees + 1; // Se i gradi sono minori o uguali a 0, ritorna a 360
          } else {
            return prevDegrees + 1;
          }
        });
      }, 0);
    
      return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    }, []);  // Effetto dipendente solo dal montaggio

    return (
        <body
            style={{
                background: `-webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) ${
                    degrees + 10
                }%, rgba(138,114,76,0) ${degrees + 40}%)`,
                background: `-webkit-linear-gradient(top, rgba(57,173,219,.25) ${
                    degrees + 0
                }%, rgba(42,60,87,.4) ${degrees + 100}%)`,
                background: `-webkit-linear-gradient(${
                    degrees + 45
                }deg, #0cd2b4 ${degrees + 0}%, #092756 ${degrees + 100}%)`,
                background: `-moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) ${
                    degrees + 10
                }%, rgba(138,114,76,0) ${degrees + 40}%)`,
                background: `-moz-linear-gradient(top, rgba(57,173,219,.25) ${
                    degrees + 0
                }%, rgba(42,60,87,.4) ${degrees + 100}%)`,
                background: `-moz-linear-gradient(${degrees + 45}deg, #0cd2b4 ${
                    degrees + 0
                }%, #092756 ${degrees + 100}%)`,
                background: `-o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) ${
                    degrees + 10
                }%, rgba(138,114,76,0) ${degrees + 40}%)`,
                background: `-o-linear-gradient(top, rgba(57,173,219,.25) ${
                    degrees + 0
                }%, rgba(42,60,87,.4) ${degrees + 100}%)`,
                background: `-o-linear-gradient(${degrees + 45}deg, #0cd2b4 ${
                    degrees + 0
                }%, #092756 ${degrees + 100}%)`,
                background: `-ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) ${
                    degrees + 10
                }%, rgba(138,114,76,0) ${degrees + 40}%)`,
                background: `-ms-linear-gradient(top, rgba(57,173,219,.25) ${
                    degrees + 0
                }%, rgba(42,60,87,.4) ${degrees + 100}%)`,
                background: `-ms-linear-gradient(${degrees + 45}deg, #0cd2b4 ${
                    degrees + 0
                }%, #092756 ${degrees + 100}%)`,
                background: `radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) ${
                    degrees + 10
                }%, rgba(138,114,76,0) ${degrees + 40}%)`,
                background: `linear-gradient(to bottom, rgba(57,173,219,.25) ${
                    degrees + 0
                }%, rgba(42,60,87,.4) ${degrees + 100}%)`,
                background: `linear-gradient(${degrees + 100}deg, #070ab6 ${
                    degrees + 0
                }%, #008ca1 ${degrees + 50}%,#008ca1 ${degrees + 50}%)`,
            }}
        ></body>
    )
}

export default BackgroundComponent
