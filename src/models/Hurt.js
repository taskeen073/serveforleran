module.exports = (sequelize, DataTypes) => {
        const Hurt = sequelize.define('Hurt', {
            hurt_name: DataTypes.STRING

        })


        return Hurt
    }
    //dont touch