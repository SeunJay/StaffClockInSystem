import AppError from '../utils/appError.js';

const sendErrorDev = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error(`error : ${err}`);
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong',
    });
  }
};

function globalErrorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  }
}

export default globalErrorHandler;
