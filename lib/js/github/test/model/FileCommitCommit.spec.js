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
    instance = new GitHubV3RestApi.FileCommitCommit();
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

  describe('FileCommitCommit', function() {
    it('should create an instance of FileCommitCommit', function() {
      // uncomment below and update the code to test FileCommitCommit
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be.a(GitHubV3RestApi.FileCommitCommit);
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property committer (base name: "committer")', function() {
      // uncomment below and update the code to test the property committer
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property nodeId (base name: "node_id")', function() {
      // uncomment below and update the code to test the property nodeId
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property parents (base name: "parents")', function() {
      // uncomment below and update the code to test the property parents
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property sha (base name: "sha")', function() {
      // uncomment below and update the code to test the property sha
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property tree (base name: "tree")', function() {
      // uncomment below and update the code to test the property tree
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

    it('should have the property verification (base name: "verification")', function() {
      // uncomment below and update the code to test the property verification
      //var instane = new GitHubV3RestApi.FileCommitCommit();
      //expect(instance).to.be();
    });

  });

}));
