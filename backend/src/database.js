import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

const PRODUCTION_URI = process.env.PRODUCTION;

const sequelize = new Sequelize(PRODUCTION_URI,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection was successful");
  } catch (error) {
    console.error("An error occurred while connecting to the database", error);
  }
};


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

export { sequelize };
