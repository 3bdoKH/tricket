const validateUser = (schema, userData) => {
    const result = schema.safeParse(userData);
    if (!result.success) {
        const errors = result.error.issues.map((err) => err.message);
        return { isValid: false, data: null, errors };
    }
    return { isValid: true, data: result.data, errors: [] };
};


export default validateUser;