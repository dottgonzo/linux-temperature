"use strict";
var index_1 = require('../index');
var chai = require('chai');
var expect = chai.expect;
var t;
before(function (done) {
    index_1.default().then(function (data) {
        t = data;
        done();
    });
});
describe("tempo object", function () {
    it("should return an object", function () {
        expect(t).to.be.ok;
    });
    describe("temp entry", function () {
        it("temp structure contains interface, temperature, unit and cores", function () {
            for (var i = 0; i < t.length; i++) {
                expect(t[i]).to.have.property('temperature').to.be.a('number');
                expect(t[i]).to.have.property('unit').to.be.a('string');
                expect(t[i]).to.have.property('cores').to.be.a('array');
            }
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQWlCLFVBQ2pCLENBQUMsQ0FEMEI7QUFDM0IsSUFBWSxJQUFJLFdBQU0sTUFHdEIsQ0FBQyxDQUgyQjtBQUc1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksQ0FBQyxDQUFDO0FBRU4sTUFBTSxDQUFDLFVBQVUsSUFBSTtJQUNqQixlQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQ3RCLENBQUMsR0FBRyxJQUFJLENBQUE7UUFDUixJQUFJLEVBQUUsQ0FBQTtJQUNWLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3JCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsWUFBWSxFQUFFO1FBRW5CLEVBQUUsQ0FBQyxnRUFBZ0UsRUFBRTtZQUNqRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZW1wIGZyb20gJy4uL2luZGV4J1xuaW1wb3J0ICogYXMgY2hhaSBmcm9tICdjaGFpJ1xuXG5cbmNvbnN0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xuXG5sZXQgdDtcblxuYmVmb3JlKGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdGVtcCgpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdCA9IGRhdGFcbiAgICAgICAgZG9uZSgpXG4gICAgfSk7XG59KTtcblxuZGVzY3JpYmUoXCJ0ZW1wbyBvYmplY3RcIiwgZnVuY3Rpb24oKSB7XG4gICAgaXQoXCJzaG91bGQgcmV0dXJuIGFuIG9iamVjdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV4cGVjdCh0KS50by5iZS5vaztcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKFwidGVtcCBlbnRyeVwiLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGl0KFwidGVtcCBzdHJ1Y3R1cmUgY29udGFpbnMgaW50ZXJmYWNlLCB0ZW1wZXJhdHVyZSwgdW5pdCBhbmQgY29yZXNcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHRbaV0pLnRvLmhhdmUucHJvcGVydHkoJ3RlbXBlcmF0dXJlJykudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHRbaV0pLnRvLmhhdmUucHJvcGVydHkoJ3VuaXQnKS50by5iZS5hKCdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICBleHBlY3QodFtpXSkudG8uaGF2ZS5wcm9wZXJ0eSgnY29yZXMnKS50by5iZS5hKCdhcnJheScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyJdfQ==
