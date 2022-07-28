'use strict';

/**
 * @ngdoc service
 * @name Html5Ionic.itemStatus
 * @description
 * Constant in the Html5Ionic.
 */
angular.module('content', [])
  .constant('MANIFEST', {
    contentPath: 'content/exercises/',
    app: {
      startAction: '/app/splash',
      homeButton: 'goHome()',
      exitButton: 'closeApp()'
    },
    i18n: {
      home: 'Home',
      backButton: 'Previous',
      nextButton: 'Next',
      closeHotSpotButton: 'Close page',
      nextSection: 'Next section',
      errorMessage: 'Page does not exist',
      prevSection: 'Previous section',
      courseTitle: '',
      tableOfContents: 'Table of Contents',
      onBeforeUnloadText: 'Please use the FINISH COURSE button in order to save your progress in this course. Closing the browser window may result in losing progress.',
      returnToReport: 'Return to report',
      exceededNumberOfAttempts: 'Exceeded number of attempts.'
    },
    actions: {
      demo: {
        splash: 'CourseStartCtrl'
      }
    },
    templates: {
      assessment: {

      },
      demo: {
        splash: 'scripts/course/templates/splash.html'
      },
      book: {
        menu: 'views/menu.html'
      }
    }
  });
