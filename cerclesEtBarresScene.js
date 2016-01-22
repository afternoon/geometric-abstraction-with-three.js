"use strict";

var cerclesCouleurs = [
  0xddbb22,
  0x3355aa,
  0x777777,
  0x336644
];

var barresCouleur = 0x555555;

/*
 * Reproduce Cercles et Barres by Sophie Taeuber-Arp
 * http://www.oddpears.com/wp-content/uploads/2015/11/STA_Cercles-et-barres.jpg
 */
class CerclesEtBarresScene extends Scene {
  backgroundColour() {
    return 0xdddddd;
  }

  createSomeHotSceneElementsToGazeUpon(scene) {
    var sceneElements = [],
        largeSizeMin = window.innerWidth * 0.1,
        largeSizeMax = window.innerWidth * 0.2,
        largeSize = randomInRange(largeSizeMin, largeSizeMax),
        scaleFactor = 0.5,
        smallSizeMin = window.innerWidth * 0.01,
        smallSizeMax = window.innerWidth * 0.1;

    // some discontiguous circles of various sizes
    for (var i = 1; i < randomInRange(5, 8); i++) {
      var iterations = 0,
          maxIterations = 50,
          c = cerclesCouleurs[i % cerclesCouleurs.length],
          candidateCircle = circle(randomLocationInScene(), largeSize, c);

      while (overlapsCircles(candidateCircle, sceneElements)) {
        candidateCircle = circle(randomLocationInScene(), largeSize, c);

        iterations++;
        if (iterations > maxIterations) {
          iterations = 0;
          break;
        }
      }

      sceneElements.push(candidateCircle);

      // reduce size for next shape
      // see http://paulbourke.net/texture_colour/randomtile/paper.pdf
      largeSize = largeSize * (1 / Math.pow(i, scaleFactor));
    }

    // 3 angular line segments
    for (var i = 1; i < randomInRange(2, 4); i++) {
      var start = randomLocationInScene(),
          mid = randomLocationInScene(),
          end = randomLocationInScene(),
          l;
      if (i === 1) l = line([start, mid, end], barresCouleur);
      else l = line([start, end], barresCouleur);
      sceneElements.push(l);
    }

    // 2 line fans
    // create an initial line, replicate n times, rotating by some fixed amount
    var start = randomLocationInScene(),
        end = randomLocationInScene(),
        l;
    l = line([[0, 0, 0], end], barresCouleur);
    for (var i = 1; i < randomInRange(4, 8); i++) {
      sceneElements.push(l);
      l = l.clone();
      l.rotation.z += Math.PI / randomInRange(6, 12);
    }

    return sceneElements;
  }

  updateScene(sceneElements) {
    sceneElements.forEach(function (elem) {
      elem.rotation.z += 0.001;
      elem.translateX(randomInRange(-1, 1));
      elem.translateY(randomInRange(-1, 1));
    })
  }
}
