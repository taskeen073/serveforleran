module.exports = (sequelize, DataTypes) => {
        const Group_chat = sequelize.define('Group_chat', {


        })
        Group_chat.associate = function(models) {
            Group_chat.belongsTo(models.Host),
                Group_chat.belongsTo(models.Customer)

        }

        return Group_chat
    }
    //dont touch