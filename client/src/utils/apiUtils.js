export const getErrorObject = err => {
    return {
        code: err?.response?.data?.Code || '',
        message: err?.response?.data?.Message || ''
    }
}