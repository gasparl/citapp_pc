// Karma configuration
// Generated on Sat Jan 26 2019 21:20:56 GMT+0100 (W. Europe Standard Time)

module.exports = function(config) {
  config.set({
    // preprocessors: {
    //   '**/*.html': ['html2js']
    // },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../js/jquery-2.1.3.min.js',
      '../js/jquery.mb.browser.min.js',
      '../js/start.js',
      '../js/utils.js',
      '../js/cit.js',
      '../js/item_base.js',
      '../js/keypress_sim.js',
      '../js/citapp_dev_test.js',
      '../css/styles.css',
      '../CITapp.html',
      //'index.html',
      'add_html.js',
      'test.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS'],
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
                '--no-sandbox',
                '--disable-gpu',
                '--enable-logging',
                '--no-default-browser-check',
                '--no-first-run',
                '--disable-default-apps',
                '--disable-popup-blocking',
                '--disable-translate',
                '--disable-background-timer-throttling',
                '--disable-renderer-backgrounding',
                '--disable-device-discovery-notifications',
                '--remote-debugging-port=9222',
                '--disable-web-security'
        ]
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // html2JsPreprocessor: {
    //   // strip this from the file path
    //   stripPrefix: 'public/',
    //
    //   // prepend this to the file path
    //   prependPrefix: 'served/',
    //
    //   // or define a custom transform function
    //   processPath: function(filePath) {
    //     // Drop the file extension
    //     return filePath.replace(/\.html$/, '');
    //   }
    // }

  })
}
