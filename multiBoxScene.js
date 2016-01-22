"use strict";

var colours = [
  0x22aabb,
  0xffee00,
  0x007733,
  0xcc0000,
  0x776655,
  0x002277,
  0x333333
];

class MultiBoxScene extends Scene {
  createSomeHotSceneElementsToGazeUpon(scene) {
    var i, j, loc, size, colour, elem, sceneElements = [];

    for (i = 0; i < 20; i++) {
      loc = randomLocation(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2)
      size = randomInRange(5, 400);
      colour = randomPick(colours);

      elem = box(loc, size, colour)
      elem.rotation.z = randomInRange(0, Math.PI);
      sceneElements.push(elem);
    }
    return sceneElements;
  }
}
