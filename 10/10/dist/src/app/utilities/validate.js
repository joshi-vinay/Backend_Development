const check = (type)=>{
    return (schema)=>{
        return (req, res, next)=>{
            try {
                req[type] = schema.parse(req[type]);
                next();
            } catch (e) {
                next({
                    statusCode: 400,
                    message: 'BAD REQUEST',
                    errors: e
                });
            }
        };
    };
};
export const body = check("body");
export const query = check("query");
export const params = check("params");

//# sourceMappingURL=validate.js.map