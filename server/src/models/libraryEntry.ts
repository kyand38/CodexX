//The LibraryEntry model links a User to a Game, acting as a many-to-many relationship table.
// It includes an additional rating attribute to represent the user’s rating of the game.
import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';