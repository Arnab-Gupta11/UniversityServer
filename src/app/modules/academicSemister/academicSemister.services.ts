import { TAcademicSemester } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';

const createAcademecicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = AcademicSemister.create(payload);
  return result;
};

export const AcademicSemisterServices = {
  createAcademecicSemesterIntoDB,
};
