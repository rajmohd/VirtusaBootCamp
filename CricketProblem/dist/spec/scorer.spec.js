"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scorer_1 = require("./../scorer");
var batsman_1 = require("../batsman");
describe('Testing scorer class', function () {
    it('should be able to create a scorer object', function () {
        var scorer = new scorer_1.Scorer();
        expect(scorer).toBeDefined();
    });
    it('should be able to add batsman to list', function () {
        var scorer = new scorer_1.Scorer();
        expect(scorer.listOfBatsman.length).toEqual(0);
        var batsman = new batsman_1.Batsman('Sehwag');
        scorer.addBatsman(batsman);
        expect(scorer.listOfBatsman.length).toEqual(1);
        expect(scorer.listOfBatsman[0]).toEqual(batsman);
    });
    it('should be able to change strike', function () {
        var scorer = new scorer_1.Scorer();
        var batsman1 = new batsman_1.Batsman('Gambhir');
        var batsman2 = new batsman_1.Batsman('Dhoni');
        scorer.addBatsman(batsman1);
        scorer.addBatsman(batsman2);
        var newPlayerOnStrike = scorer.changeStrike(batsman1);
        expect(newPlayerOnStrike).toEqual(batsman2);
    });
    it('should call change strike during calculation of score', function () {
        var scorer = new scorer_1.Scorer();
        var batsman1 = new batsman_1.Batsman('Raina');
        var batsman2 = new batsman_1.Batsman('Jadeja');
        scorer.addBatsman(batsman1);
        scorer.addBatsman(batsman2);
        spyOn(scorer, "changeStrike");
        scorer.calculateScore([2, 3, 4, 5, 5, 6, 0, 1]);
        expect(scorer.changeStrike).toHaveBeenCalled();
    });
});
