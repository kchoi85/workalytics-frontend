import React, { useState, FC } from "react";
import { Typography, Button } from "antd";
import styles from "./company_logger.module.css";

function CompanyLogger({ name }: { name: string }) {
  const [timer, setTimer] = useState<string>("00:00:00");
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [timerPaused, setTimerPaused] = useState<boolean>(false);
  const [timerInterval, setTimerInterval] = useState<any>(null);

  const startTimer = () => {
    setTimer((prevTimer) => {
      const [hours, minutes, seconds] = prevTimer.split(":");
      const newSeconds = parseInt(seconds) + 1;
      if (newSeconds === 60) {
        const newMinutes = parseInt(minutes) + 1;
        if (newMinutes === 60) {
          const newHours = parseInt(hours) + 1;
          return `${newHours.toString().padStart(2, "0")}:00:00`;
        }
        return `${hours}:${newMinutes.toString().padStart(2, "0")}:00`;
      }
      return `${hours}:${minutes}:${newSeconds.toString().padStart(2, "0")}`;
    });
  };
  const Timer: FC = () => {
    const handleStart = () => {
      setTimer("00:00:00");
      setTimerStarted(true);
      setTimerInterval(setInterval(startTimer, 1000));
    };

    const handlePause = () => {
      const resumeTimer = timerPaused;
      if (resumeTimer) {
        setTimerPaused(false);
        return setTimerInterval(setInterval(startTimer, 1000));
      }
      setTimerPaused(true);
      clearInterval(timerInterval);
    };
    const handleStop = () => {
      setTimerStarted(false);
      clearInterval(timerInterval);
    };
    if (timerStarted) {
      return (
        <div>
          <div className={styles.timer}>
            <Typography.Text>{timer}</Typography.Text>
          </div>
          <div className={styles.timerBtnWrapper}>
            <Button
              type="primary"
              danger={!timerPaused}
              size="small"
              className={styles.timerBtn}
              onClick={handlePause}
              ghost
            >
              {timerPaused ? "Resume" : "Pause"}
            </Button>
            <Button
              type="primary"
              size="small"
              className={styles.timerBtn}
              onClick={handleStop}
              danger
            >
              Stop
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Button
          type="primary"
          size="small"
          className={styles.timerBtn}
          onClick={handleStart}
        >
          Start
        </Button>
        <div className={styles.logs}>
          {timer !== "00:00:00" && (
            <li>
              <Typography.Text>{timer}</Typography.Text>
            </li>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <Typography.Title level={2}>{name}</Typography.Title>
      <div className={styles.row}>
        <Timer />
      </div>
    </>
  );
}

export default CompanyLogger;
