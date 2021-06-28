import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://wzwguvtw:WrbIaI6Q7HhqVLI2zbMF3CJlx-ip6Whv@motty.db.elephantsql.com/wzwguvtw",
  {
    dialect:"postgres",
    define:{
      timestamps:false
    }  
  }
)

export default sequelize;