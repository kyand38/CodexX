import sequelize from '../config/connection.js';
import { UserFactory} from './user.js';
import { GameFactory} from './game.js';
import { LibraryEntryFactory} from './libraryEntry.js';

//initialize models
const User = UserFactory(sequelize);
const Game = GameFactory(sequelize);
const LibraryEntry = LibraryEntryFactory(sequelize);

//associations between models
User.hasMany(LibraryEntry, { foreignKey: 'userId', onDelete: 'CASCADE' });
LibraryEntry.belongsTo(User, { foreignKey: 'userId' });

Game.hasMany(LibraryEntry, { foreignKey: 'gameId', onDelete: 'CASCADE' });
LibraryEntry.belongsTo(Game, { foreignKey: 'gameId' });

//export
export { User, Game, LibraryEntry};