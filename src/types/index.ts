export interface Patient {
  age: number;
  date_of_birth: string;
  diagnosis_history: DiagnosisHistoryItem[];
  diagnostic_list: DiagnositicItem[];
  emergency_contact: string;
  gender: string;
  insurance_type: string;
  lab_results: string[];
  name: string;
  phone_number: string;
  profile_picture: string;
}

export interface DiagnosisHistoryItem {
  blood_pressure: {
    diastolic: ReadingValue;
    systolic: ReadingValue;
  };
  heart_rate: ReadingValue;
  month: string;
  respiratory_rate: ReadingValue;
  temperature: ReadingValue;
  year: number;
}

export interface DiagnositicItem {
  name: string;
  description: string;
  status: string;
}

type ReadingValue = {
  levels: string;
  value: number;
};
