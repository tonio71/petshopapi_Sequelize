import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://xxxxxxxxxxxxxxxxxxxxxxxxx",
  {
    dialect:"postgres",
    define:{
      timestamps:false
    }  
  }
)

export default sequelize;
