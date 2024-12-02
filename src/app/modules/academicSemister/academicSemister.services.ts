import { AcademicSemesterNameCodeMapper } from './academicSemister.constant';
import { TAcademicSemester } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';

const createAcademecicSemesterIntoDB = async (payload: TAcademicSemester) => {
  //checking name and code are valid or not
  if (AcademicSemesterNameCodeMapper[payload.name] != payload.code) {
    throw new Error('Invalid semester code');
  }

  //Creating Academic semester
  const result = AcademicSemister.create(payload);
  return result;
};

export const AcademicSemisterServices = {
  createAcademecicSemesterIntoDB,
};
