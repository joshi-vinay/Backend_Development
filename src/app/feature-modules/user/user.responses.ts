import { ResponseFormat } from "../../../utilities/response-format.js";

export const user_response = {
    USER_NOT_FOUND : new ResponseFormat(404, "USER NOT FOUND"),
    USER_NOT_CREATED : new ResponseFormat(500, "USER NOT CREATED"),
    USER_NOT_DELETED : new ResponseFormat(500, "USER NOT DELETED"),
    USER_CREATED : new ResponseFormat(200, "USER CREATED"),
    USER_DELETED : new ResponseFormat(200, "USER DELETED"),
    USER_UPDATED : new ResponseFormat(200, "USER UPDATED")
}