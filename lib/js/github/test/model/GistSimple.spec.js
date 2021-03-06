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
    instance = new GitHubV3RestApi.GistSimple();
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

  describe('GistSimple', function() {
    it('should create an instance of GistSimple', function() {
      // uncomment below and update the code to test GistSimple
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be.a(GitHubV3RestApi.GistSimple);
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property commentsUrl (base name: "comments_url")', function() {
      // uncomment below and update the code to test the property commentsUrl
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property commitsUrl (base name: "commits_url")', function() {
      // uncomment below and update the code to test the property commitsUrl
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property forksUrl (base name: "forks_url")', function() {
      // uncomment below and update the code to test the property forksUrl
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property gitPullUrl (base name: "git_pull_url")', function() {
      // uncomment below and update the code to test the property gitPullUrl
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property gitPushUrl (base name: "git_push_url")', function() {
      // uncomment below and update the code to test the property gitPushUrl
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property nodeId (base name: "node_id")', function() {
      // uncomment below and update the code to test the property nodeId
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property _public (base name: "public")', function() {
      // uncomment below and update the code to test the property _public
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property truncated (base name: "truncated")', function() {
      // uncomment below and update the code to test the property truncated
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new GitHubV3RestApi.GistSimple();
      //expect(instance).to.be();
    });

  });

}));
