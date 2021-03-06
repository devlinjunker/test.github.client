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
    instance = new GitHubV3RestApi.TopicSearchResultItem();
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

  describe('TopicSearchResultItem', function() {
    it('should create an instance of TopicSearchResultItem', function() {
      // uncomment below and update the code to test TopicSearchResultItem
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be.a(GitHubV3RestApi.TopicSearchResultItem);
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property curated (base name: "curated")', function() {
      // uncomment below and update the code to test the property curated
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property featured (base name: "featured")', function() {
      // uncomment below and update the code to test the property featured
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property logoUrl (base name: "logo_url")', function() {
      // uncomment below and update the code to test the property logoUrl
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property related (base name: "related")', function() {
      // uncomment below and update the code to test the property related
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property released (base name: "released")', function() {
      // uncomment below and update the code to test the property released
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property repositoryCount (base name: "repository_count")', function() {
      // uncomment below and update the code to test the property repositoryCount
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property textMatches (base name: "text_matches")', function() {
      // uncomment below and update the code to test the property textMatches
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new GitHubV3RestApi.TopicSearchResultItem();
      //expect(instance).to.be();
    });

  });

}));
