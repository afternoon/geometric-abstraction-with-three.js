"use strict";

class Scene {
  constructor() {
    var scene = new THREE.Scene(),
        sceneElements = [],
        camera = this.makeACameraForLookingWith(),
        renderer = this.makeARenderer(),
        sceneElements = this.createSomeHotSceneElementsToGazeUpon(scene);
    sceneElements.forEach(function (elem) { scene.add(elem); })
    this.renderScene(scene, renderer, camera, sceneElements);
  }

  backgroundColour() { return 0xffffff; };

  makeACameraForLookingWith() {
    var camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -500, 1000);
    return camera;
  }

  makeARenderer() {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(this.backgroundColour(), 1);

    document.body.appendChild(renderer.domElement);

    return renderer;
  }

  createSomeHotSceneElementsToGazeUpon(scene) {
    // does nothing
  }

  updateScene(sceneElements) {
    // does nothing
  }

  renderScene(scene, renderer, camera, sceneElements) {
    var that = this;
    requestAnimationFrame(function () {
      that.updateScene(sceneElements);
      that.renderScene(scene, renderer, camera, sceneElements);
    });
    renderer.render(scene, camera);
  }
}
