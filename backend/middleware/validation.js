import { body, validationResult } from 'express-validator';

export const validateQuoteRequest = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[\d\s\-\(\)\+]+$/).withMessage('Please provide a valid phone number'),

  body('address')
    .trim()
    .notEmpty().withMessage('Project address is required')
    .isLength({ max: 500 }).withMessage('Address must not exceed 500 characters'),

  body('projectType')
    .trim()
    .notEmpty().withMessage('Project type is required')
    .isIn([
      'Driveway',
      'Patio',
      'Pool Deck',
      'Walkway',
      'Retaining Wall',
      'Outdoor Kitchen',
      'Fire Pit',
      'Multiple Projects',
      'Other'
    ]).withMessage('Invalid project type selected'),

  body('projectDetails')
    .trim()
    .notEmpty().withMessage('Project details are required')
    .isLength({ min: 10, max: 2000 }).withMessage('Project details must be between 10 and 2000 characters'),

  body('budget')
    .optional()
    .isIn([
      'Under $10,000',
      '$10,000 - $25,000',
      '$25,000 - $50,000',
      '$50,000 - $100,000',
      'Over $100,000',
      'Not sure yet'
    ]).withMessage('Invalid budget range selected'),

  body('timeline')
    .optional()
    .isIn([
      'ASAP',
      'Within 1 month',
      'Within 3 months',
      'Within 6 months',
      'Planning for next year',
      'Just exploring options'
    ]).withMessage('Invalid timeline selected'),

  body('howHeard')
    .optional()
    .isIn([
      'Google Search',
      'Facebook',
      'Instagram',
      'Referral',
      'Previous Customer',
      'Yard Sign',
      'Other'
    ]).withMessage('Invalid source selected')
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }

  next();
};