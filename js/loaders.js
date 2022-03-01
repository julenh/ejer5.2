import Level from './Level.js';
import SpriteSheet from './SpriteSheet.js'
import {createBackgroundLayer} from './layers.js';

export function loadImage(url){

    // código del ejercicio 3
}

function loadJSON(url){

    // código del ejercicio 2
}

function createTiles(level, backgrounds){

        // código del ejercicio 5
  }

function loadSpriteSheet(){
        // código del ejercicio 4; 
  }


export function loadLevel(){
    return loadJSON('/levels/level.json') // qué tiles hay que poner y dónde dentro de este nivel
    .then(levelSpec => Promise.all([
        levelSpec, 
        loadSpriteSheet(), // cargar imágenes de un spritesheet como sprites 
      ]))
        .then(([levelSpec, backgroundSprites]) => {
            const level = new Level();
            createTiles(level, levelSpec.backgrounds); // desplegar tiles en la estrucura Matrix

            const backgroundLayer = createBackgroundLayer(level, backgroundSprites); // cargar canvas
            level.background = backgroundLayer; // canvas buffer 

            return level;
    });
    
}
