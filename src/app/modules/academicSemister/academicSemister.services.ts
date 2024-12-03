import { AcademicSemesterNameCodeMapper } from './academicSemister.constant';
import { TAcademicSemester } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';

//Create Academic Semester
const createAcademecicSemesterIntoDB = async (payload: TAcademicSemester) => {
  //checking name and code are valid or not
  if (AcademicSemesterNameCodeMapper[payload.name] != payload.code) {
    throw new Error('Invalid semester code');
  }

  //Creating Academic semester
  const result = AcademicSemister.create(payload);
  return result;
};

//Find All Semester
const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemister.find();
  return result;
};
//Find single semester using _id
const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemister.findById(id);
  return result;
};

//Update Academic semester
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    AcademicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }
  const result = AcademicSemister.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
export const AcademicSemisterServices = {
  createAcademecicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
