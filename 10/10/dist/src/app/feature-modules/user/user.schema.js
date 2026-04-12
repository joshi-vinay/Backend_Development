import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";
export class UserSchema extends Model {
}
UserSchema.init({
    id: {
        type: DataTypes.UUIDV4,
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
}, {
    sequelize,
    tableName: "users",
    timestamps: false
});

//# sourceMappingURL=user.schema.js.map