const check = (type)=>{
    return (schema)=>{
        return (req, res, next)=>{
            try {
                req[type] = schema.parse(req[type]); // validation & sanitazation at the same time.
                next();
            } catch (error) {
                next({
                    statusCode: 400,
                    message: 'BAD REQUEST',
                    errors: error
                });
            }
        };
    };
};
export const body = check("body");
export const params = check("params");
export const query = check("query");

//# sourceMappingURL=validate.js.map