/* For node, use global instead of window */
if (typeof window == "undefined") {
    window = global;
}
window.d3 = require('d3');
window.d3.timeline = require('./lib/d3-timeline.js');
window.clinicalTimeline = require('./clinicalTimeline.js');
window.clinicalTimelineParser = require('./parser.js');
window.clinicalTimelineSanityChecker = require('./sanity.js');
