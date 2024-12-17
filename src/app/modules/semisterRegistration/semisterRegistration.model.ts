import mongoose, { Schema } from 'mongoose';
import { TSemisterRegistration } from './semisterRegistration.interface';
import { SemisterRegistrationStatus } from './semisterRegistration.constant';

const SemisterRegistrationSchema = new mongoose.Schema<TSemisterRegistration>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'AcademicSemister',
    },
    status: {
      type: String,
      enum: SemisterRegistrationStatus,
      default: 'UPCOMING',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    minCredit: {
      type: Number,
      default: 3,
    },
    maxCredit: {
      type: Number,
      default: 15,
    },
  },
  { timestamps: true },
);
export const SemisterRegistration = mongoose.model<TSemisterRegistration>(
  'SemisterRegistration',
  SemisterRegistrationSchema,
);
