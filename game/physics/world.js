import * as CANNON from 'cannon-es';

// Création d'un monde
const world = new CANNON.World();

// La gravité du monde
world.gravity.set(0, -14, 0);

// Exporter le monde
export { world };