import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import './StopWatch.css';

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [intervalId,setIntervalId] = useState(null);
    useEffect(() => {
        if (isRunning) {
          const id = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 10);
          }, 10);
          setIntervalId(id);
        } else {
          clearInterval(intervalId);
        }
    
        return () => clearInterval(intervalId);
      }, [isRunning]);
    const toggleRunning = ()=>{
        setIsRunning((prev)=>!prev);
    };
    const reset = ()=>{
        setIsRunning(false);
        setElapsedTime(0);
    };
    const formatTime=()=>{
        const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;

    return `${String(hours).padStart(2, '0')}:
            ${String(minutes).padStart(2, '0')}:
            ${String(seconds).padStart(2, '0')}:
            ${String(milliseconds).padStart(3, '0')}`;
    }
  return (
    <div className="m-0 p-0 full-width-height d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1>Stop Watch</h1>
        <div>{formatTime()}</div>
        <br/>
      <div className>
      <Button onClick={toggleRunning} variant="dark" style={{ marginRight: '5px' }}>{isRunning?'Stop':'Start'}</Button>
      <Button onClick={reset} variant="dark">Reset</Button>  
      </div>  
    </div>
  )
}

export default StopWatch