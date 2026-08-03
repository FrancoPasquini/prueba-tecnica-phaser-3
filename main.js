// ============================================================
//  EL RECOLECTOR - Proyecto base
//  Esto es todo lo que te damos hecho. El resto es tuyo.
// ============================================================

const VELOCIDAD_JUGADOR = 400;

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1d1d2b',
  physics: {
    default: 'arcade',
    arcade: {
      // Poné esto en true para ver las cajas de colisión. Te va a servir.
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// Variables del juego. Van a crecer.
let jugador;
let teclas;

new Phaser.Game(config);

// ------------------------------------------------------------
// preload: acá se cargan imágenes, sonidos, spritesheets.
// Por ahora está vacío porque usamos formas geométricas.
// ------------------------------------------------------------
function preload() {
}

// ------------------------------------------------------------
// create: se ejecuta UNA vez, al arrancar la escena.
// Acá se crean las cosas.
// ------------------------------------------------------------
function create() {
  // Un rectángulo celeste como jugador. Podés reemplazarlo por un sprite.
  jugador = this.add.rectangle(400, 550, 70, 20, 0x66ccff);

  // Le damos un cuerpo de física para poder detectar colisiones más adelante.
  this.physics.add.existing(jugador);
  jugador.body.setCollideWorldBounds(true);

  // Las flechas del teclado.
  teclas = this.input.keyboard.createCursorKeys();
}

// ------------------------------------------------------------
// update: se ejecuta ~60 veces por segundo, siempre.
// Acá va lo que cambia con el tiempo.
// ------------------------------------------------------------
function update() {
  if (teclas.left.isDown) {
    jugador.body.setVelocityX(-VELOCIDAD_JUGADOR);
  } else if (teclas.right.isDown) {
    jugador.body.setVelocityX(VELOCIDAD_JUGADOR);
  } else {
    jugador.body.setVelocityX(0);
  }
}

// ============================================================
//  PARA CORRERLO:
//  - VS Code: extensión Live Server, botón "Go Live"
//  - Terminal: npx serve  (y abrí la URL que te muestra)
//
//  Abrir index.html con doble clic puede parecer que funciona
//  ahora, pero te va a romper cuando cargues imágenes o audio.
//
//  DOCUMENTACIÓN: https://docs.phaser.io/
//  EJEMPLOS CON CÓDIGO: https://labs.phaser.io/
// ============================================================
