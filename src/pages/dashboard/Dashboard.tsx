import { useState, useEffect } from "react";

import { Typography, Divider, Modal } from "antd";
import styles from "./dashboard.module.css";

import { format } from "date-fns";
import CompanyLogger from "../../components/company_logger/CompanyLogger";

import { useQuery, gql } from "@apollo/client";

const COMPANY_NAME = "Company 1";

function Home() {
  const [today, setToday] = useState<Date>(new Date());
  const [logModalVisible, setLogModalVisible] = useState<boolean>(false);

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
      <Modal
        title={`Showing Time Logs for ${COMPANY_NAME}`}
        visible={logModalVisible}
        onCancel={() => setLogModalVisible(false)}
        footer={null}
        width={800}
        centered
      >
        Test Modal
      </Modal>
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
        <CompanyLogger
          name={COMPANY_NAME}
          setLogModalVisible={setLogModalVisible}
        />
      </div>
    </div>
  );
}

export default Home;
