import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemisterServices } from './academicSemister.services';
//create academic semister
const createAcademicSemister = catchAsync(async (req, res) => {
  const result = await AcademicSemisterServices.createAcademecicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is created successfully',
    data: result,
  });
});
const getAllAcademicSemister = catchAsync(async (req, res) => {
  const result = await AcademicSemisterServices.getAllAcademicSemestersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semisters are retrive successfully',
    data: result,
  });
});
const getSingleAcademicSemister = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AcademicSemisterServices.getSingleAcademicSemesterFromDB(semesterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is retrive successfully',
    data: result,
  });
});
const updateAcademicSemister = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemisterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is Updated successfully',
    data: result,
  });
});
export const AcademicSemisterControllers = {
  createAcademicSemister,
  getAllAcademicSemister,
  getSingleAcademicSemister,
  updateAcademicSemister,
};
