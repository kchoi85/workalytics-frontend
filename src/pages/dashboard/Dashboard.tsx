import { useState, useEffect, FC } from "react";

import { Typography, Button, Divider } from "antd";
import styles from "./dashboard.module.css";

import { format } from "date-fns";
import CompanyLogger from "../../components/company_logger/CompanyLogger";

function Home() {
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = format(today, "MMMM dd, yyyy");
  const formattedTime = format(today, "hh:mm:ss a");

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Typography.Text strong className={styles.title}>
          Time Tracking
        </Typography.Text>
        <div className={styles.time}>
          {formattedDate} - {formattedTime}
        </div>
        <Divider className={styles.divider} />
      </div>
      <div className={styles.body}>
        <CompanyLogger name={"VendorPM"} />
      </div>
    </div>
  );
}

export default Home;
