module.exports = (sequelize, DataTypes) => {
        const Schedule = sequelize.define('Schedule', {

            time_start: {
                type: DataTypes.TIME,
                allowNull: true,
                set(valueToBeSet) {
                    this.setDataValue('timestart', valueToBeSet)
                }
            },
            time_stop: {
                type: DataTypes.TIME,
                allowNull: true,
                set(valueToBeSet) {
                    this.setDataValue('timestop', valueToBeSet)
                }
            },
            time_date: DataTypes.DATE,
            s_sex: DataTypes.STRING,
            s_religion: DataTypes.STRING,
            s_count: DataTypes.INTEGER,
            s_status: DataTypes.STRING,
        })
        Schedule.associate = function(models) {
            Schedule.belongsTo(models.User),
                Schedule.belongsTo(models.Location)

        }

        return Schedule
    }
    //dont touch