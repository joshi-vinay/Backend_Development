import { Sequelize } from "sequelize"
import { env } from "../validate-env.js"
import e from "express";


export const sequelize = new Sequelize(
    env.DB_NAME,
    env.DB_USERNAME,
    env.DB_PASSWORD,
    {
        dialect: "postgres"
    }

)
export const connectToPG = async() => {
    try {
        sequelize.authenticate();
        console.log("DB CONNECTED SUCESSFULLY..");
        
    } catch (error) {
        throw e;
    }

}