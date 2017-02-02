/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.10.dev12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.FleetsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FleetsApi', function() {
    describe('deleteFleetsFleetIdMembersMemberId', function() {
      it('should call deleteFleetsFleetIdMembersMemberId successfully', function(done) {
        //uncomment below and update the code to test deleteFleetsFleetIdMembersMemberId
        //instance.deleteFleetsFleetIdMembersMemberId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFleetsFleetIdSquadsSquadId', function() {
      it('should call deleteFleetsFleetIdSquadsSquadId successfully', function(done) {
        //uncomment below and update the code to test deleteFleetsFleetIdSquadsSquadId
        //instance.deleteFleetsFleetIdSquadsSquadId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFleetsFleetIdWingsWingId', function() {
      it('should call deleteFleetsFleetIdWingsWingId successfully', function(done) {
        //uncomment below and update the code to test deleteFleetsFleetIdWingsWingId
        //instance.deleteFleetsFleetIdWingsWingId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetsFleetId', function() {
      it('should call getFleetsFleetId successfully', function(done) {
        //uncomment below and update the code to test getFleetsFleetId
        //instance.getFleetsFleetId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetsFleetIdMembers', function() {
      it('should call getFleetsFleetIdMembers successfully', function(done) {
        //uncomment below and update the code to test getFleetsFleetIdMembers
        //instance.getFleetsFleetIdMembers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetsFleetIdWings', function() {
      it('should call getFleetsFleetIdWings successfully', function(done) {
        //uncomment below and update the code to test getFleetsFleetIdWings
        //instance.getFleetsFleetIdWings(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postFleetsFleetIdMembers', function() {
      it('should call postFleetsFleetIdMembers successfully', function(done) {
        //uncomment below and update the code to test postFleetsFleetIdMembers
        //instance.postFleetsFleetIdMembers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postFleetsFleetIdWings', function() {
      it('should call postFleetsFleetIdWings successfully', function(done) {
        //uncomment below and update the code to test postFleetsFleetIdWings
        //instance.postFleetsFleetIdWings(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postFleetsFleetIdWingsWingIdSquads', function() {
      it('should call postFleetsFleetIdWingsWingIdSquads successfully', function(done) {
        //uncomment below and update the code to test postFleetsFleetIdWingsWingIdSquads
        //instance.postFleetsFleetIdWingsWingIdSquads(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putFleetsFleetId', function() {
      it('should call putFleetsFleetId successfully', function(done) {
        //uncomment below and update the code to test putFleetsFleetId
        //instance.putFleetsFleetId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putFleetsFleetIdMembersMemberId', function() {
      it('should call putFleetsFleetIdMembersMemberId successfully', function(done) {
        //uncomment below and update the code to test putFleetsFleetIdMembersMemberId
        //instance.putFleetsFleetIdMembersMemberId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putFleetsFleetIdSquadsSquadId', function() {
      it('should call putFleetsFleetIdSquadsSquadId successfully', function(done) {
        //uncomment below and update the code to test putFleetsFleetIdSquadsSquadId
        //instance.putFleetsFleetIdSquadsSquadId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putFleetsFleetIdWingsWingId', function() {
      it('should call putFleetsFleetIdWingsWingId successfully', function(done) {
        //uncomment below and update the code to test putFleetsFleetIdWingsWingId
        //instance.putFleetsFleetIdWingsWingId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
