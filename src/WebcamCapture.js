import React,{useCallback} from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };


  
  function WebcamCapture() {

      const webcamRef=React.useRef(null);
      

      const capture=useCallback(
          () => {
              const imageSrc= webcamRef.current.getScreenshot();
              console.log(imageSrc);
          },
          [webcamRef],
      )

      return (
          <div className='webcamCapture'>
              <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
             />

            <RadioButtonUncheckedIcon
                className='webcamCapture__button'
                onClick={capture}
                fontSize="large"
            />
          </div>
      )
  }
  
  export default WebcamCapture;
  