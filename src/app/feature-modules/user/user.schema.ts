import { DataTypes, Model } from "sequelize";
import type { User } from "./user.types.js";
import { sequelize } from "../../connections/postgres.connection.js";
import { randomUUID } from "node:crypto";


export class UserSchema extends Model<User, User> {
    declare id: string;
    declare name: string;
}

UserSchema.init({  
    id: {
        primaryKey: true,
        type: DataTypes.UUIDV4,
    }, 
    name: {
        type: DataTypes.STRING
    }
}, { 

    sequelize,
    timestamps: false,
});

