import { FC } from "react";
import { Patient } from "../types";
import calendar from "../images/BirthIcon.svg";
import male from "../images/MaleIcon.svg";
import female from "../images/FemaleIcon.svg";
import phone from "../images/PhoneIcon.svg";
import insurance from "../images/InsuranceIcon.svg";
import { formatDateOfBirth } from "../utils/DateUtils";

const PatientInfo: FC<PatientInfoProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="flex flex-col items-start bg-white p-5 rounded-[16px] h-[196px] color-[#072635]">
        <h3 className="font-[800] text-left">Lab Results</h3>
        <div className="p-4 w-full flex flex-1 items-center justify-center">
          Select a patient to see details
        </div>
      </div>
    );
  }

  const {
    profile_picture,
    name,
    date_of_birth,
    gender,
    phone_number,
    emergency_contact,
    insurance_type,
  } = data;

  return (
    <div className="bg-white py-8 px-5 rounded-[16px] h-[740px] color-[#072635]">
      <div className="flex flex-col gap-6 mb-8">
        <img
          src={profile_picture}
          alt={name}
          className="w-[200px] h-[200px] rounded-full mx-auto"
        />
        <h3 className="font-[800] text-[24px] leading-[33px] text-center self-center">
          {name || "N/A"}
        </h3>
      </div>

      <div className="flex flex-col items-start gap-6 mt-6 mb-10">
        <div className="flex gap-4 items-center">
          <img src={calendar} alt="" className="h-[42px]" />
          <div className="flex flex-col gap-1 items-start text-[14px] leading-[19px]">
            <p>Date of Birth</p>
            <p className="font-bold">
              {formatDateOfBirth(date_of_birth) || "N/A"}
              {/* {date_of_birth || "N/A"} */}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <img
            src={gender === "Female" ? female : male}
            alt=""
            className="h-[42px]"
          />
          <div className="flex flex-col gap-1 items-start text-[14px] leading-[19px]">
            <p>Gender</p>
            <p className="font-bold">{gender || "N/A"}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <img src={phone} alt="" className="h-[42px]" />
          <div className="flex flex-col gap-1 items-start text-[14px] leading-[19px]">
            <p>Contact Info.</p>
            <p className="font-bold">{phone_number || "N/A"}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <img src={phone} alt="" className="h-[42px]" />
          <div className="flex flex-col gap-1 items-start text-[14px] leading-[19px]">
            <p>Emergency Contact</p>
            <p className="font-bold">{emergency_contact || "N/A"}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <img src={insurance} alt="" className="h-[42px]" />
          <div className="flex flex-col gap-1 items-start text-[14px] leading-[19px]">
            <p>Insurance</p>
            <p className="font-bold">{insurance_type || "N/A"}</p>
          </div>
        </div>
      </div>

      <button className="rounded-[41px] py-[11px] px-[40px] bg-[#01F0D0] text-[14px] leading-19px] font-bold">
        Show All Information
      </button>
    </div>
  );
};

export default PatientInfo;

interface PatientInfoProps {
  data: Patient | null;
}
