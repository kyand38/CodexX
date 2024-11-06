import sequelize from '../config/connection.js';
import { UserFactory} from './user.js';
import { GameFactory} from './game.js';
import { LibraryEntryFactory} from './libraryEntry.js';

const User = UserFactory(sequelize);
const Game = GameFactory(sequelize);
const LibraryEntry = LibraryEntryFactory(sequelize);

User.hasMany(LibraryEntry, { foreignKey: 'userId', onDelete: 'CASCADE' });
LibraryEntry.belongsTo(User, { foreignKey: 'userId' })

export { User, Game, LibraryEntry};