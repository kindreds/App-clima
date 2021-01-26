import yargs from 'yargs';

const argv = yargs(process.argv.slice(2)).options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true,
    type: 'string',
  },
});

export default argv.argv;
