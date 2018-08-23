"use strict";

(function () {
  var features = document.querySelector('.features__center');
  var featuresSlider = document.querySelector('.features__list');
  var toggleFeature1 = document.querySelector('#features-toggle-1');
  var toggleFeature2 = document.querySelector('#features-toggle-2');
  var toggleFeature3 = document.querySelector('#features-toggle-3');

  if (features.classList.contains('features__center--nojs')) {
      features.classList.remove('features__center--nojs');
  }

  toggleFeature1.onclick = function() {
    toggleFeature2.classList.remove('features__toggle--active');
    toggleFeature3.classList.remove('features__toggle--active');
    toggleFeature1.classList.add('features__toggle--active');
    featuresSlider.style.left = 0;
  };

  toggleFeature2.onclick = function() {
    toggleFeature1.classList.remove('features__toggle--active');
    toggleFeature3.classList.remove('features__toggle--active');
    toggleFeature2.classList.add('features__toggle--active');
    featuresSlider.style.left = '-100%';
  };

  toggleFeature3.onclick = function() {
    toggleFeature1.classList.remove('features__toggle--active');
    toggleFeature2.classList.remove('features__toggle--active');
    toggleFeature3.classList.add('features__toggle--active');
    featuresSlider.style.left = '-200%';
  };
})();
