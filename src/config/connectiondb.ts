import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://postgres:example@example.com:5432/botequeen',
);

async function ConnectDb(sequelize: any): Promise<boolean> {
  try {
    await sequelize.authenticate();
    console.log('Conexão com BD estabelecida');
    return true;
  } catch (error) {
    console.error('Nao foi possivel conexao com BD', error);
    return false;
  }
}
