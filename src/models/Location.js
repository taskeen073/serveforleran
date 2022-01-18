module.exports = (sequelize, DataTypes) => {
        const Location = sequelize.define('Location', {

            L_name: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longtitude: DataTypes.STRING
        })
        Location.associate = function(models) {
            Location.belongsTo(models.User)

        }


        return Location
    }
    //dont touch