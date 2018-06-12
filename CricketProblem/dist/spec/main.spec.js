"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var batsman_1 = require("./../batsman");
var scorer_1 = require("./../scorer");
describe('Testing cricket problem', function () {
    var scorer;
    var batsman1;
    var batsman2;
    beforeEach(function () {
        scorer = new scorer_1.Scorer();
        batsman1 = new batsman_1.Batsman('K L Rahul');
        batsman2 = new batsman_1.Batsman('Rohit Sharma');
        scorer.addBatsman(batsman1);
        scorer.addBatsman(batsman2);
    });
    it('should calculate score correctly', function () {
        scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
        expect(scorer.totalScore).toEqual(20);
        expect(batsman1.numberOfRuns).toEqual(4);
        expect(batsman2.numberOfRuns).toEqual(16);
    });
    it('should calculate score correctly', function () {
        scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 2]);
        expect(scorer.totalScore).toEqual(19);
        expect(batsman1.numberOfRuns).toEqual(3);
        expect(batsman2.numberOfRuns).toEqual(16);
    });
    it('should calculate score correctly when an empty array is passed', function () {
        scorer.calculateScore([]);
        expect(scorer.totalScore).toEqual(0);
        expect(batsman1.numberOfRuns).toEqual(0);
        expect(batsman2.numberOfRuns).toEqual(0);
    });
});
