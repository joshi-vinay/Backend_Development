import { DataTypes, Model} from "sequelize";
import type { User } from "./user.types.js";
import { sequelize } from "../../connections/pg.connection.js";


export class UserSchema extends Model<User>{
    declare id: string;
    declare name: string;
    declare email: string;
    declare password: string;
}

UserSchema.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    tableName: "users",
    timestamps: false
})