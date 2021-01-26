import { weatherAPI } from './api/weatherAPI.js';
import argv from './config/yargs.js';

const { direccion } = argv;

weatherAPI(direccion).then(console.log).catch(console.log);
