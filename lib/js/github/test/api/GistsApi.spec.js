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
    instance = new GitHubV3RestApi.GistsApi();
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

  describe('GistsApi', function() {
    describe('gistsCheckIsStarred', function() {
      it('should call gistsCheckIsStarred successfully', function(done) {
        //uncomment below and update the code to test gistsCheckIsStarred
        //instance.gistsCheckIsStarred(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsCreate', function() {
      it('should call gistsCreate successfully', function(done) {
        //uncomment below and update the code to test gistsCreate
        //instance.gistsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsCreateComment', function() {
      it('should call gistsCreateComment successfully', function(done) {
        //uncomment below and update the code to test gistsCreateComment
        //instance.gistsCreateComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsDelete', function() {
      it('should call gistsDelete successfully', function(done) {
        //uncomment below and update the code to test gistsDelete
        //instance.gistsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsDeleteComment', function() {
      it('should call gistsDeleteComment successfully', function(done) {
        //uncomment below and update the code to test gistsDeleteComment
        //instance.gistsDeleteComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsFork', function() {
      it('should call gistsFork successfully', function(done) {
        //uncomment below and update the code to test gistsFork
        //instance.gistsFork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsGet', function() {
      it('should call gistsGet successfully', function(done) {
        //uncomment below and update the code to test gistsGet
        //instance.gistsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsGetComment', function() {
      it('should call gistsGetComment successfully', function(done) {
        //uncomment below and update the code to test gistsGetComment
        //instance.gistsGetComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsGetRevision', function() {
      it('should call gistsGetRevision successfully', function(done) {
        //uncomment below and update the code to test gistsGetRevision
        //instance.gistsGetRevision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsList', function() {
      it('should call gistsList successfully', function(done) {
        //uncomment below and update the code to test gistsList
        //instance.gistsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsListComments', function() {
      it('should call gistsListComments successfully', function(done) {
        //uncomment below and update the code to test gistsListComments
        //instance.gistsListComments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsListCommits', function() {
      it('should call gistsListCommits successfully', function(done) {
        //uncomment below and update the code to test gistsListCommits
        //instance.gistsListCommits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsListForUser', function() {
      it('should call gistsListForUser successfully', function(done) {
        //uncomment below and update the code to test gistsListForUser
        //instance.gistsListForUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsListForks', function() {
      it('should call gistsListForks successfully', function(done) {
        //uncomment below and update the code to test gistsListForks
        //instance.gistsListForks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsListPublic', function() {
      it('should call gistsListPublic successfully', function(done) {
        //uncomment below and update the code to test gistsListPublic
        //instance.gistsListPublic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsListStarred', function() {
      it('should call gistsListStarred successfully', function(done) {
        //uncomment below and update the code to test gistsListStarred
        //instance.gistsListStarred(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsStar', function() {
      it('should call gistsStar successfully', function(done) {
        //uncomment below and update the code to test gistsStar
        //instance.gistsStar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsUnstar', function() {
      it('should call gistsUnstar successfully', function(done) {
        //uncomment below and update the code to test gistsUnstar
        //instance.gistsUnstar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsUpdate', function() {
      it('should call gistsUpdate successfully', function(done) {
        //uncomment below and update the code to test gistsUpdate
        //instance.gistsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gistsUpdateComment', function() {
      it('should call gistsUpdateComment successfully', function(done) {
        //uncomment below and update the code to test gistsUpdateComment
        //instance.gistsUpdateComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
