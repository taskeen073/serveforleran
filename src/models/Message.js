module.exports = (sequelize, DataTypes) => {
        const Message = sequelize.define('Message', {


        })
        Message.associate = function(models) {
            Message.belongsTo(models.User)

        }

        return Message
    }
    //dont touch