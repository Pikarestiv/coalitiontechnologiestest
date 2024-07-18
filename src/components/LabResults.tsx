import { FC } from "react";
import download from "../images/download.svg";

const LabResults: FC<LabResultsProps> = ({ data }) => {
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

  return (
    <div className="flex flex-col items-start bg-white p-5 rounded-[16px] h-[296px] color-[#072635]">
      <h3 className="font-[800] text-left text-[24px] leading-[33px] mb-4">
        Lab Results
      </h3>

      <div className="flex flex-col items-start gap-[5px] w-full flex-1 overflow-auto">
        {data.map((result, i) => (
          <div
            key={i}
            className="flex justify-between items-start w-full hover:bg-[#F6F7F8] px-4 py-[10px] cursor-pointer"
          >
            <p className="text-left font-normal text-[13px] leading-[18px]">
              {result}
            </p>
            <img src={download} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;

interface LabResultsProps {
  data: string[] | undefined;
}
