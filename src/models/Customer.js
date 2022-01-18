module.exports = (sequelize, DataTypes) => {
        const Customer = sequelize.define('Customer', {

            c_name: DataTypes.STRING,
            c_lastname: DataTypes.STRING,
            c_email: DataTypes.STRING,
            c_tel: DataTypes.STRING,
            c_address: DataTypes.STRING,
            c_sex: DataTypes.STRING,
            c_birthdat: DataTypes.DATE

        })
        Customer.associate = function(models) {
            Customer.belongsTo(models.User)

        }

        return Customer
    }
    //dont touch