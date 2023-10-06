import { Sequelize } from "sequelize";

const sequelize = new Sequelize('mysql://root:password@localhost:3307/tutorial');

export default sequelize;