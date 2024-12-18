import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemister.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemister.constant';
import ApiErrors from '../../errors/ApiErrors';
import httpStatus from 'http-status';

const academicSemisterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

//Checking semister is already exist or not.
academicSemisterSchema.pre('save', async function (next) {
  const isSemeterExists = await AcademicSemister.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemeterExists) {
    throw new ApiErrors(httpStatus.IM_USED, 'Semester is already exists !!!');
  }
  next();
});

export const AcademicSemister = model<TAcademicSemester>(
  'AcademicSemister',
  academicSemisterSchema,
);
