import { FC } from "react";
import moreHoriz from "../images/more_horiz.svg";
import search from "../images/search.svg";
import { Patient } from "../types";

const PatientList: FC<PatientListProps> = ({
  patients,
  selectedPatient,
  onPatientSelect,
  loading,
}) => {
  if (loading) {
    return (
      <div className="flex flex-col items-start bg-white rounded-[16px] h-[324px] lg:h-[1054px] w-full pb-[13px] text-[#072635]">
        <div className="flex justify-between align-middle mb-0 lg:mb-[20px] p-5 w-full">
          <h2 className="text-lg font-semibold text-[24px] leading-[33px]">
            Patients
          </h2>
        </div>

        <div className="flex flex-col px-4 flex-1 overflow-auto w-full">
          <p>Loading patient list . . .</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start bg-white rounded-[16px] h-[324px] lg:h-[1054px] w-full pr-[4px] pb-[13px] text-[#072635]">
      <div className="flex justify-between align-middle mb-0 lg:mb-[20px] p-5 w-full">
        <h2 className="text-lg font-semibold text-[24px] leading-[33px]">
          Patients
        </h2>
        <img src={search} alt="search" className="cursor-pointer" />
      </div>

      <ul className="flex flex-col flex-1 pr-[4px] overflow-auto w-full">
        {patients.map((patient, index) => (
          <li
            key={index}
            className={`flex justify-between items-center py-4 px-5 hover:bg-[#D8FCF7] cursor-pointer ${
              selectedPatient?.name === patient.name ? "bg-[#D8FCF7]" : ""
            }`}
            onClick={() => onPatientSelect(patient)}
            // style={selectedPatient?.name === patient.name ? {}}
          >
            <div className="flex items-center">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="w-12 h-12 rounded-full mr-3"
              />

              <div className="flex flex-col items-start">
                <div className="font-medium">{patient.name}</div>
                <div className="text-sm text-gray-500">
                  {patient.gender}, {patient.age}
                </div>
              </div>
            </div>
            <img
              src={moreHoriz}
              alt="Menu"
              className="w-6 h-6 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;

interface PatientListProps {
  patients: Patient[];
  selectedPatient: Patient | null;
  onPatientSelect: (patient: Patient) => void;
  loading: boolean;
}
