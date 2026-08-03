# Prueba técnica: "El Recolector" — Phaser 3

## Qué se evalúa (leelo antes que nada)

**No se evalúa cuánto sabés de Phaser.** Nadie de la clase sabe Phaser todavía. Se evalúa
tu capacidad de aprender una tecnología nueva por tu cuenta: leer documentación, probar,
equivocarte, entender el error y volver a probar.

Por eso hay dos entregables:

1. **El juego** (El proyecto de programacion entregado).

2. Una **defensa oral de 15 minutos** donde vas a tener que explicar tu código y tener conocimiento de la estructura del proyecto. Esa parte es la que más pesa.

---

## Punto de partida

En la carpeta hay un proyecto que ya funciona: un rectángulo celeste que se mueve con las flechas izquierda/derecha y no se sale de la pantalla. Son ~40 líneas.

**Para correrlo** necesitás un servidor local (si abrís el `index.html` con doble clic, más
adelante te va a fallar la carga de imágenes y sonidos por seguridad del navegador). Dos opciones:

- Extensión **Live Server** de VS Code → botón "Go Live".
- O en la terminal, dentro de la carpeta: `npx serve`

**Versión de Phaser:** el starter usa **Phaser 3.90.0** fijada por CDN. **No la cambies.**
Aviso importante: ya existe Phaser 4, y muchos tutoriales y ejemplos que vas a encontrar
están escritos para versiones distintas de la 3.90. Si copiás código y no funciona, lo primero
que tenés que preguntarte es *"¿para qué versión estaba escrito esto?"*. Parte de la prueba es
darte cuenta de eso solo.

**No necesitás saber dibujar ni conseguir imágenes.** Podés hacer todo el juego con
`this.add.rectangle(...)` y `this.add.circle(...)`. Si querés usar sprites, hay assets
gratuitos de dominio público.

---

## La idea del juego

Un juego de una sola pantalla: el jugador se mueve abajo, caen cosas desde arriba, hay que
recolectarlas (o esquivarlas). Eso es todo. **Lo demás lo elegís vos.**

---

## Cómo funciona la selección de ítems

Hay un catálogo de ítems abajo. Cada uno vale puntos.

- El **Nivel 0 es obligatorio** (no da puntos, habilita todo lo demás).
- De ahí en adelante **armás tu propio juego eligiendo los ítems que quieras**, en el orden
  que quieras. No hace falta completar un nivel para pasar al siguiente: si querés intentar
  algo del Nivel 3 sin haber hecho nada del Nivel 2, adelante.
- **Es mejor 2 ítems bien hechos y bien entendidos que 8 a medias.** Un ítem que no funciona o que no podés explicar no se toma en cuenta.

---

## Nivel 0 — Obligatorio

| ID | Ítem |
|---|---|
| O1 | El proyecto corre en el navegador sin errores en consola |
| O2 | El jugador se mueve con el teclado y no se sale de la pantalla |
| O3 | Bitácora entregada (ver formato abajo) |

Sin los tres, la prueba no se corrige.

---

## Nivel 1 — Basico — Fundamentos

| ID | Ítem | Pista de por dónde buscar |
|---|---|---|
| B1 | Caen objetos desde arriba de forma repetida y automática | eventos de tiempo en la escena |
| B2 | Cuando el jugador toca un objeto, el objeto desaparece | detección de solapamiento |
| B3 | Hay un contador de puntos visible en pantalla que sube | objetos de texto |
| B4 | Los objetos aparecen en posiciones horizontales aleatorias | utilidades matemáticas de Phaser |
| B5 | Hay una cuenta regresiva y cuando llega a 0 el juego termina | |
| B6 | Suena un efecto cuando recolectás algo | carga de audio |
| B7 | El juego usa al menos un sprite (imagen) cargado por vos, no solo formas | carga de imágenes |
| B8 | Los objetos que salen de la pantalla se destruyen (y podés demostrarlo) | ¿por qué importa esto? explicalo en la bitácora |

## Nivel 2 — Intermedio — Estructura

| ID | Ítem |
|---|---|
| I1 | Hay dos tipos de objetos con efectos distintos (uno suma, uno resta o quita vida) |
| I2 | Sistema de vidas con feedback visual (el jugador parpadea, cambia de color, etc.) |
| I3 | Dificultad progresiva: con el tiempo caen más rápido o más seguido |
| I4 | Pantalla de "Game Over" y se puede reiniciar sin recargar la página |
| I5 | Al menos dos escenas separadas (menú → juego) con navegación entre ellas |
| I6 | Los objetos se manejan con un grupo, no creando y descartando sin control |
| I7 | El puntaje máximo se guarda y sobrevive al cierre del navegador |
| I8 | El juego también se puede jugar con mouse o touch, además del teclado |
| I9 | El juego se adapta a distintos tamaños de ventana sin romperse |

## Nivel 3 — Avanzado — Autodidactismo real

| ID | Ítem |
|---|---|
| A1 | Animaciones de sprite (spritesheet con frames, no cambio de imagen) |
| A2 | Efecto de partículas al recolectar |
| A3 | Movimiento con tweens (aparición, desaparición o rebote suavizado con easing) |
| A4 | El código está separado en varios archivos con `import` / `export` |
| A5 | El juego es data-driven: los tipos de objeto están definidos en un array/objeto de configuración y el código los lee, en vez de estar escritos a mano uno por uno |
| A6 | Creaste una clase propia que extiende una clase de Phaser y la usás |
| A7 | Power-ups con duración temporal (imán, escudo, cámara lenta, doble puntaje) |
| A8 | Efectos de cámara (shake al perder vida, flash, zoom) |
| A9 | El fondo tiene parallax o scroll infinito |
| A10 | Una escena de UI corriendo en paralelo a la del juego (no dentro de ella) |

---

## Entrega

- Repositorio Git con **commits durante el proceso**, no un único commit final. Quiero ver cómo avanzaste.
- Un `README.md` de 5 líneas: qué ítems hiciste (por ID).

**Plazo:** 7 días. **Defensa oral:** 15 minutos, agendada.

---

## Documentación oficial

- Docs de la API: https://docs.phaser.io/
- Ejemplos con código (esto es oro, usalo): https://labs.phaser.io/3.86/index.html
- Libro gratis "Phaser by Example": https://phaser.io/news

Consejo final: cuando busques , agregá `site:labs.phaser.io` o `phaser 3` a la
consulta. Y cuando algo no funcione, **abrí la consola del navegador (F12) y leé el error
completo antes de hacer cualquier otra cosa.** El 70% de los errores te los dice el navegador
en la cara.
