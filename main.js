const VELOCIDAD_JUGADOR = 400;


const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1d1d2b',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};


let jugador;
let teclas;
let grupoObjetos;
let score = 0;
let scoreText;
let tiempo = 30;
let timerText;
let timerEvent;
let objetoEvent;
let juegoTerminado = false;


new Phaser.Game(config);


function preload() {
}


function create() {
  jugador = this.add.rectangle(400, 550, 70, 20, 0x66ccff);
  this.physics.add.existing(jugador);
  jugador.body.setCollideWorldBounds(true);


  teclas = this.input.keyboard.createCursorKeys();
  grupoObjetos = this.physics.add.group();


  scoreText = this.add.text(20, 20, 'Puntos: 0', {
    fontSize: '24px',
    color: '#ffffff'
  });


  timerText = this.add.text(650, 20, 'Tiempo: 30', {
    fontSize: '24px',
    color: '#ffffff'
  });


  objetoEvent = this.time.addEvent({
    delay: 800,
    callback: crearObjeto,
    callbackScope: this,
    loop: true
  });


  timerEvent = this.time.addEvent({
    delay: 1000,
    callback: actualizarTiempo,
    callbackScope: this,
    loop: true
  });


  this.physics.add.overlap(
    jugador,
    grupoObjetos,
    recolectarObjeto,
    null,
    this
  );
}


function update() {
  if (juegoTerminado) {
    return;
  }


  if (teclas.left.isDown) {
    jugador.body.setVelocityX(-VELOCIDAD_JUGADOR);
  } else if (teclas.right.isDown) {
    jugador.body.setVelocityX(VELOCIDAD_JUGADOR);
  } else {
    jugador.body.setVelocityX(0);
  }


  grupoObjetos.children.each(function(objeto) {
    if (objeto.y > 620) {
      objeto.destroy();
    }
  });
}


function crearObjeto() {
  if (juegoTerminado) {
    return;
  }


  let x = Phaser.Math.Between(20, 780);


  let objeto = this.add.circle(x, -20, 15, 0xffcc33);


  this.physics.add.existing(objeto);
  objeto.body.setVelocityY(200);


  grupoObjetos.add(objeto);
}


function recolectarObjeto(jugador, objeto) {
  objeto.destroy();


  score = score + 1;


  scoreText.setText('Puntos: ' + score);
}


function actualizarTiempo() {
  tiempo = tiempo - 1;


  timerText.setText('Tiempo: ' + tiempo);


  if (tiempo <= 0) {
    tiempo = 0;
    juegoTerminado = true;


    objetoEvent.remove();
    timerEvent.remove();


    jugador.body.setVelocityX(0);
  }
}




