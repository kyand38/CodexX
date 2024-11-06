import sequelize from '';
import { UserFactory} from '../';

const User = UserFactory(sequelize);

export { User};