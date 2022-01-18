module.exports = (sequelize, DataTypes) => {
        const User = sequelize.define('User', {
            username: {
                type: DataTypes.STRING,
                unique: true,
            },
            password: DataTypes.STRING,
            name: DataTypes.STRING,
            lastname: DataTypes.STRING,
            status: DataTypes.STRING,
            image: DataTypes.STRING,
        })


        return User
    }
    //dont touch