import { FC, useEffect, useState } from "react";
import Header from "./Header";
import PatientList from "./PatientList";
import DiagnosisHistory from "./DiagnosisHistory";
import PatientInfo from "./PatientInfo";
import { Patient } from "../types";
import LabResults from "./LabResults";
import DiagnosticList from "./DiagnosticList";

const Dashboard: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            method: "GET",
            headers: {
              Authorization: "Basic " + btoa("coalition:skills-test"),
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // console.log("🚀 ~ fetchPatients ~ data:", data);

        setPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-[#F6F7F8] p-[18px]">
      <div className="min-h-screen w-full max-w-[1600px]">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
          <div className="lg:col-span-1 flex flex-col gap-8 mt-[14px]">
            <PatientList
              patients={patients}
              selectedPatient={selectedPatient}
              onPatientSelect={handlePatientSelect}
              loading={loading}
            />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-8 mt-[14px]">
            <DiagnosisHistory data={selectedPatient?.diagnosis_history} />
            <DiagnosticList data={selectedPatient?.diagnostic_list} />
          </div>
          <div className="lg:col-span-1 flex flex-col gap-8">
            <PatientInfo data={selectedPatient} />
            <LabResults data={selectedPatient?.lab_results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
