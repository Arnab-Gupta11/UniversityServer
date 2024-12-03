import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemisterValidations } from './academicSemister.validation';
import { AcademicSemisterControllers } from './academicSemister.controller';

const router = Router();

router
  .route('/create-academic-semester')
  .post(
    validateRequest(
      AcademicSemisterValidations.createAcademicSemesterValidationSchema,
    ),
    AcademicSemisterControllers.createAcademicSemister,
  );
router.route('/').get(AcademicSemisterControllers.getAllAcademicSemister);
router
  .route('/:semesterId')
  .get(AcademicSemisterControllers.getSingleAcademicSemister)
  .patch(
    validateRequest(
      AcademicSemisterValidations.updateAcademicSemesterValidationSchema,
    ),
    AcademicSemisterControllers.updateAcademicSemister,
  );
export const AcademicSemesterRoutes = router;
