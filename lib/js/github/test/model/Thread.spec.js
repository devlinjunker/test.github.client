/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitHubV3RestApi);
  }
}(this, function(expect, GitHubV3RestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitHubV3RestApi.Thread();
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

  describe('Thread', function() {
    it('should create an instance of Thread', function() {
      // uncomment below and update the code to test Thread
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be.a(GitHubV3RestApi.Thread);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

    it('should have the property lastReadAt (base name: "last_read_at")', function() {
      // uncomment below and update the code to test the property lastReadAt
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

    it('should have the property repository (base name: "repository")', function() {
      // uncomment below and update the code to test the property repository
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionUrl (base name: "subscription_url")', function() {
      // uncomment below and update the code to test the property subscriptionUrl
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

    it('should have the property unread (base name: "unread")', function() {
      // uncomment below and update the code to test the property unread
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHubV3RestApi.Thread();
      //expect(instance).to.be();
    });

  });

}));