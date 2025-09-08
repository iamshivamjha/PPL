import { body, validationResult } from 'express-validator';

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

export const validatePlayer = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('matches').isInt({ min: 0 }).withMessage('Matches must be a non-negative integer'),
  body('runs').isInt({ min: 0 }).withMessage('Runs must be a non-negative integer'),
  body('wickets').isInt({ min: 0 }).withMessage('Wickets must be a non-negative integer'),
  body('battingAverage').isFloat({ min: 0 }).withMessage('Batting average must be a non-negative number'),
  body('bowlingAverage').isFloat({ min: 0 }).withMessage('Bowling average must be a non-negative number'),
  body('winPercentage').isFloat({ min: 0, max: 100 }).withMessage('Win percentage must be between 0 and 100'),
  body('matchesAsCaptain').isInt({ min: 0 }).withMessage('Matches as captain must be a non-negative integer'),
  body('league').optional().isIn(['PCA', 'PPL']).withMessage('League must be PCA or PPL'),
  handleValidationErrors
];

export const validateTrophyWinner = [
  body('trophy').trim().notEmpty().withMessage('Trophy name is required'),
  body('year').trim().notEmpty().withMessage('Year is required'),
  body('MOTM').trim().notEmpty().withMessage('MOTM is required'),
  body('MOTS').trim().notEmpty().withMessage('MOTS is required'),
  body('captain').trim().notEmpty().withMessage('Captain name is required'),
  body('league').optional().isIn(['PCA', 'PPL']).withMessage('League must be PCA or PPL'),
  handleValidationErrors
];

export const validateCaptainRecord = [
  body('captain').trim().notEmpty().withMessage('Captain name is required'),
  body('m').isInt({ min: 0 }).withMessage('Matches must be a non-negative integer'),
  body('w').isInt({ min: 0 }).withMessage('Wins must be a non-negative integer'),
  body('l').isInt({ min: 0 }).withMessage('Losses must be a non-negative integer'),
  body('winPercent').isFloat({ min: 0, max: 100 }).withMessage('Win percentage must be between 0 and 100'),
  handleValidationErrors
];

export const validatePCASuperOver = [
  body('winner').trim().notEmpty().withMessage('Winner name is required'),
  body('runnerUp').trim().notEmpty().withMessage('Runner up name is required'),
  handleValidationErrors
];

export const validatePCAGrade = [
  body('playerName').trim().notEmpty().withMessage('Player name is required'),
  body('grade').isIn(['A+', 'A', 'B', 'C']).withMessage('Grade must be A+, A, B, or C'),
  body('points').isInt({ min: 0 }).withMessage('Points must be a non-negative integer'),
  body('score').isInt({ min: 0 }).withMessage('Score must be a non-negative integer'),
  handleValidationErrors
];

export const validatePCACoach = [
  body('name').trim().notEmpty().withMessage('Coach name is required'),
  body('position').trim().notEmpty().withMessage('Position is required'),
  body('score').isInt({ min: 0 }).withMessage('Score must be a non-negative integer'),
  handleValidationErrors
];

