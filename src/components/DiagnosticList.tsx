import { FC } from "react";
import { DiagnositicItem } from "../types";

const DiagnosticList: FC<DiagnosticListProps> = ({ data }) => {
  return (
    <div className="bg-white w-full px-4 pt-4 pb-4 rounded-[16px] flex flex-col items-start space-y-4 h-[349px]">
      <h3 className="mb-6 font-[800] text-[24px] leading-[33px]">
        Diagnostic List
      </h3>

      <div className="min-w-[360px] flex flex-col flex-1 w-full h-[calc(100%-75px)] overflow-x-auto">
        <div className="grid grid-cols-3 gap-4 pt-[15px] px-4 pb-[14px] rounded-[24px] bg-[#F6F7F8] text-[#072635] font-bold mb-[10px]">
          <div className="card text-left text-[12px] sm:text-[14px] lg:tex-[12px] min-[1280px]:text-[14px] leading-[19px]">
            Problem/Diagnosis
          </div>
          <div className="card text-left text-[12px] sm:text-[14px] lg:tex-[12px] min-[1280px]:text-[14px] leading-[19px]">
            Description
          </div>
          <div className="card text-left text-[12px] sm:text-[14px] lg:tex-[12px] min-[1280px]:text-[14px] leading-[19px]">
            Status
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          {data?.map((diagnosis, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 pt-[11px] px-4 pb-[10px]"
            >
              <p className="text-left text-[12px] sm:text-[14px] lg:tex-[12px] min-[1280px]:text-[14px]">{diagnosis.name}</p>
              <p className="text-left text-[12px] sm:text-[14px] lg:tex-[12px] min-[1280px]:text-[14px]">{diagnosis.description}</p>
              <p className="text-left text-[12px] sm:text-[14px] lg:tex-[12px] min-[1280px]:text-[14px]">{diagnosis.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;

interface DiagnosticListProps {
  data: DiagnositicItem[] | undefined;
}
