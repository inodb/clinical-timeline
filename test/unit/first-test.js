'use strict'
var expect = require('chai').expect;

describe('clinicalTimeline', function() {
    it('should exist', function() {
        var clinicalTimeline = require('../../js/clinicalTimeline.js');
        expect(clinicalTimeline).to.not.be.undefined;
    });
});

describe('clinicalTimeline.getTrack', function() {
    it('should return the track Status when requesting track Status', function() {
        var clinicalTimeline = require('../../js/clinicalTimeline.js');
        var data1 = require('../data/data1.json');
        expect("Status").to.equal(clinicalTimeline.getTrack(data1, "Status").label);
    });
});
