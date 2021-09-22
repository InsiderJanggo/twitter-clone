const errorTypes: any = {
    ValidationError: 422,
    UniqueViolationError: 409,
};

const errorMessages: any = {
    UniqueViolationError: 'Already exists.',
}

export const errorHandler = (error: any, req: any, res: any, next: any) => {
    var statusCode = res.statusCode == 200 ? errorTypes[error.name] || 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: errorMessages[error.name] || error.message,
        stack:  process.env.NODE_ENV === 'development' ? '😑' : error.stack,
        errors: error.errors || undefined,
    })
}

export const notFound = (req: any, res: any, next: any) => {
    var error = `Not Found - ${req.originalUrl}`;
    res.status(404);
    res.json({
        message: error,
        statusCode: 404
    })
}