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
    instance = new GitHubV3RestApi.Job();
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

  describe('Job', function() {
    it('should create an instance of Job', function() {
      // uncomment below and update the code to test Job
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be.a(GitHubV3RestApi.Job);
    });

    it('should have the property checkRunUrl (base name: "check_run_url")', function() {
      // uncomment below and update the code to test the property checkRunUrl
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property completedAt (base name: "completed_at")', function() {
      // uncomment below and update the code to test the property completedAt
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property conclusion (base name: "conclusion")', function() {
      // uncomment below and update the code to test the property conclusion
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property headSha (base name: "head_sha")', function() {
      // uncomment below and update the code to test the property headSha
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property nodeId (base name: "node_id")', function() {
      // uncomment below and update the code to test the property nodeId
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property runId (base name: "run_id")', function() {
      // uncomment below and update the code to test the property runId
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property runUrl (base name: "run_url")', function() {
      // uncomment below and update the code to test the property runUrl
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property startedAt (base name: "started_at")', function() {
      // uncomment below and update the code to test the property startedAt
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property steps (base name: "steps")', function() {
      // uncomment below and update the code to test the property steps
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHubV3RestApi.Job();
      //expect(instance).to.be();
    });

  });

}));
