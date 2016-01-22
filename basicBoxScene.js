"use strict";

class BasicBoxScene extends Scene {
  createSomeHotSceneElementsToGazeUpon(scene) {
    return [box([0, 0, 0], window.innerWidth / 3, 0x22aadd)];
  }

  updateScene(sceneElements) {
    sceneElements.forEach(function (elem) {
      elem.rotation.z += 0.01;
    })
  }
}
