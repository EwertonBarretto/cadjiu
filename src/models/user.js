const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      fullName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: {
            notEmpty: true,
            args: [0, 50],
            msg: 'Max. caracteres is 50'
          }
        }
      },
      cellPhone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: {
          args: true,
          msg: 'Email address already in use!'
        },
        validate: {
          isEmail: {
            msg: 'E-mail invalid!'
          },
          notEmpty: true
        }
      },
      belt:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: "White"
      },  
      weight:{
        type:DataTypes.BOOLEAN,
        allowNull: true,
      },
      status:{
        type:DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: "1"
      },
      dt_birth:{
        type:DataTypes.DATEONLY,
        allowNull: true,
      },
      dt_lastpay:{
        type:DataTypes.DATEONLY,
        allowNull: true,
      },
      dt_due:{
        type:DataTypes.DATEONLY,
        allowNull: true,
      },
    });
    
    // User.associate = models => {
    //   User.hasMany(models.Pet, { onDelete: 'CASCADE' });
    // };

    User.findByLogin = async login => {
      let user = await User.findOne({
        where: { username: fullName },
      });
  
      if (!user) {
        user = await User.findOne({
          where: { email: fullName },
        });
      }
  
      return user;
    };
  
    return User;
  };
  
   module.exports = user;