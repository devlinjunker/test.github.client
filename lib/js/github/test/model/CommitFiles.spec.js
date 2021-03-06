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
    instance = new GitHubV3RestApi.CommitFiles();
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

  describe('CommitFiles', function() {
    it('should create an instance of CommitFiles', function() {
      // uncomment below and update the code to test CommitFiles
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be.a(GitHubV3RestApi.CommitFiles);
    });

    it('should have the property additions (base name: "additions")', function() {
      // uncomment below and update the code to test the property additions
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property blobUrl (base name: "blob_url")', function() {
      // uncomment below and update the code to test the property blobUrl
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property changes (base name: "changes")', function() {
      // uncomment below and update the code to test the property changes
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property contentsUrl (base name: "contents_url")', function() {
      // uncomment below and update the code to test the property contentsUrl
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property deletions (base name: "deletions")', function() {
      // uncomment below and update the code to test the property deletions
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property patch (base name: "patch")', function() {
      // uncomment below and update the code to test the property patch
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property previousFilename (base name: "previous_filename")', function() {
      // uncomment below and update the code to test the property previousFilename
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property rawUrl (base name: "raw_url")', function() {
      // uncomment below and update the code to test the property rawUrl
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property sha (base name: "sha")', function() {
      // uncomment below and update the code to test the property sha
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new GitHubV3RestApi.CommitFiles();
      //expect(instance).to.be();
    });

  });

}));
