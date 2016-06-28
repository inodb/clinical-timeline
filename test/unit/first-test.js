'use strict'
var expect = require('chai').expect;

describe('clinicalTimeline', function() {
    it('should exist', function() {
        var clinicalTimeline = require('../../node_modules/d3/d3.min.js',
                                       '../../js/clinicalTimeline.js');
        expect(clinicalTimeline).to.not.be.undefined;
    });
});

describe('clinicalTimeline', function() {
    it('should return true when the track has times spanning multiple days'), function() {
        var track = {
            label: 'testTrack',
            times: [
            ]
        }

    };
});
