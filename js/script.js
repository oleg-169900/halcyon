"use strict";

(function () {
  var features = document.querySelector('.features__center');
  var featuresSlider = document.querySelector('.features__list');
  var toggleFeature1 = document.querySelector('#features-toggle-1');
  var toggleFeature2 = document.querySelector('#features-toggle-2');
  var toggleFeature3 = document.querySelector('#features-toggle-3');

  var team = document.querySelector('.team__center');
  var teamSlider = document.querySelector('.team__list');
  var toggleTeam1 = document.querySelector('#team-toggle-1');
  var toggleTeam2 = document.querySelector('#team-toggle-2');
  var toggleTeam3 = document.querySelector('#team-toggle-3');

  if (features.classList.contains('features__center--nojs')) {
      features.classList.remove('features__center--nojs');
  }

  if (team.classList.contains('team__center--nojs')) {
      team.classList.remove('team__center--nojs');
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

  toggleTeam1.onclick = function() {
    toggleTeam2.classList.remove('team__toggle--active');
    toggleTeam3.classList.remove('team__toggle--active');
    toggleTeam1.classList.add('team__toggle--active');
    teamSlider.style.left = 0;
  };

  toggleTeam2.onclick = function() {
    toggleTeam1.classList.remove('team__toggle--active');
    toggleTeam3.classList.remove('team__toggle--active');
    toggleTeam2.classList.add('team__toggle--active');
    teamSlider.style.left = '-100%';
  };

  toggleTeam3.onclick = function() {
    toggleTeam1.classList.remove('team__toggle--active');
    toggleTeam2.classList.remove('team__toggle--active');
    toggleTeam3.classList.add('team__toggle--active');
    teamSlider.style.left = '-200%';
  };
})();
