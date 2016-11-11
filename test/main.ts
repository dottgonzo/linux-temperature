import temp from '../index'
import * as chai from 'chai'


const expect = chai.expect;

let t;

before(function (done) {
    temp().then(function (data) {
        t = data
        done()
    });
});

describe("tempo object", function() {
    it("should return an object", function () {
        expect(t).to.be.ok;
    });

    describe("temp entry", function(){

        it("temp structure contains interface, temperature, unit and cores", function(){
            for (var i = 0; i < t.length; i++){
                expect(t[i]).to.have.property('temperature').to.be.a('number');
                expect(t[i]).to.have.property('unit').to.be.a('string');
                expect(t[i]).to.have.property('cores').to.be.a('array');
            }
        });
    });
});