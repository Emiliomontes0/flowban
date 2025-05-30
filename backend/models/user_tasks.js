"use strict";

module.exports = (sequelize, DataTypes) => {
  const UserTask = sequelize.define(
    "UserTasks",
    {
      user_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      task_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "task",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "user_tasks",
      underscored: true,
      timestamps: false,
    }
  );
  UserTask.associate = (models) => {
    UserTask.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
  };
  UserTask.associate = (models) => {
    UserTask.belongsTo(models.Task, {
      foreignKey: "task_id",
      onDelete: "CASCADE",
    });
  };
  return UserTask;
};
