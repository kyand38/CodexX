//Store each game by integer Id
//title, genre, platform, releaseDate, imageUrl
import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

export interface GameAttributes {
    id: number;
    title: string;
    genre: string;
    platform: string;
    releaseDate: Date;
    imageUrl: string;
}

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Game extends Model<GameAttributes, GameCreationAttributes>
    implements GameAttributes {
    public id!: number;
    public title!: string;
    public genre!: string;
    public platform!: string;
    public releaseDate!: Date;
    public imageUrl!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function GameFactory(sequelize: Sequelize): typeof Game {
    Game.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            platform: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            releaseDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'games',
            timestamps: true,
        }
    );
    return Game;
}
