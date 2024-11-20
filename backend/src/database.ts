import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage:
    process.env.NODE_ENV === "PRODUCTION"
      ? "./dist/database.sqlite"
      : "./src/database.sqlite",
  logging: false,
});

export const WaitingUser = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [1, 50] },
  },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  test: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["yes", "no", "maybe"]],
    },
  },
  pro: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["yes", "no", "maybe"]],
    },
  },
  recommendFeatures: { type: DataTypes.TEXT, allowNull: true },
});

export const Volunteer = sequelize.define("volunteer", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [1, 50] },
  },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  profession: { type: DataTypes.STRING, allowNull: false },
  experience: { type: DataTypes.INTEGER, allowNull: false },
});

export const Tracker = sequelize.define("tracker", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  hits: { type: DataTypes.INTEGER },
  country: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  endpoint: { type: DataTypes.STRING },
});

async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection was successful");
  } catch (error) {
    console.error("An error occurred while connecting to the database", error);
  }
};

export { sequelize };
