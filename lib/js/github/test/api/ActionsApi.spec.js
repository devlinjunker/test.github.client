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
    instance = new GitHubV3RestApi.ActionsApi();
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

  describe('ActionsApi', function() {
    describe('actionsAddSelectedRepoToOrgSecret', function() {
      it('should call actionsAddSelectedRepoToOrgSecret successfully', function(done) {
        //uncomment below and update the code to test actionsAddSelectedRepoToOrgSecret
        //instance.actionsAddSelectedRepoToOrgSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsCancelWorkflowRun', function() {
      it('should call actionsCancelWorkflowRun successfully', function(done) {
        //uncomment below and update the code to test actionsCancelWorkflowRun
        //instance.actionsCancelWorkflowRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsCreateOrUpdateOrgSecret', function() {
      it('should call actionsCreateOrUpdateOrgSecret successfully', function(done) {
        //uncomment below and update the code to test actionsCreateOrUpdateOrgSecret
        //instance.actionsCreateOrUpdateOrgSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsCreateOrUpdateRepoSecret', function() {
      it('should call actionsCreateOrUpdateRepoSecret successfully', function(done) {
        //uncomment below and update the code to test actionsCreateOrUpdateRepoSecret
        //instance.actionsCreateOrUpdateRepoSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsCreateRegistrationTokenForOrg', function() {
      it('should call actionsCreateRegistrationTokenForOrg successfully', function(done) {
        //uncomment below and update the code to test actionsCreateRegistrationTokenForOrg
        //instance.actionsCreateRegistrationTokenForOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsCreateRegistrationTokenForRepo', function() {
      it('should call actionsCreateRegistrationTokenForRepo successfully', function(done) {
        //uncomment below and update the code to test actionsCreateRegistrationTokenForRepo
        //instance.actionsCreateRegistrationTokenForRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsCreateRemoveTokenForOrg', function() {
      it('should call actionsCreateRemoveTokenForOrg successfully', function(done) {
        //uncomment below and update the code to test actionsCreateRemoveTokenForOrg
        //instance.actionsCreateRemoveTokenForOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsCreateRemoveTokenForRepo', function() {
      it('should call actionsCreateRemoveTokenForRepo successfully', function(done) {
        //uncomment below and update the code to test actionsCreateRemoveTokenForRepo
        //instance.actionsCreateRemoveTokenForRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsCreateWorkflowDispatch', function() {
      it('should call actionsCreateWorkflowDispatch successfully', function(done) {
        //uncomment below and update the code to test actionsCreateWorkflowDispatch
        //instance.actionsCreateWorkflowDispatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDeleteArtifact', function() {
      it('should call actionsDeleteArtifact successfully', function(done) {
        //uncomment below and update the code to test actionsDeleteArtifact
        //instance.actionsDeleteArtifact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDeleteOrgSecret', function() {
      it('should call actionsDeleteOrgSecret successfully', function(done) {
        //uncomment below and update the code to test actionsDeleteOrgSecret
        //instance.actionsDeleteOrgSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDeleteRepoSecret', function() {
      it('should call actionsDeleteRepoSecret successfully', function(done) {
        //uncomment below and update the code to test actionsDeleteRepoSecret
        //instance.actionsDeleteRepoSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDeleteSelfHostedRunnerFromOrg', function() {
      it('should call actionsDeleteSelfHostedRunnerFromOrg successfully', function(done) {
        //uncomment below and update the code to test actionsDeleteSelfHostedRunnerFromOrg
        //instance.actionsDeleteSelfHostedRunnerFromOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDeleteSelfHostedRunnerFromRepo', function() {
      it('should call actionsDeleteSelfHostedRunnerFromRepo successfully', function(done) {
        //uncomment below and update the code to test actionsDeleteSelfHostedRunnerFromRepo
        //instance.actionsDeleteSelfHostedRunnerFromRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDeleteWorkflowRun', function() {
      it('should call actionsDeleteWorkflowRun successfully', function(done) {
        //uncomment below and update the code to test actionsDeleteWorkflowRun
        //instance.actionsDeleteWorkflowRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDeleteWorkflowRunLogs', function() {
      it('should call actionsDeleteWorkflowRunLogs successfully', function(done) {
        //uncomment below and update the code to test actionsDeleteWorkflowRunLogs
        //instance.actionsDeleteWorkflowRunLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDownloadArtifact', function() {
      it('should call actionsDownloadArtifact successfully', function(done) {
        //uncomment below and update the code to test actionsDownloadArtifact
        //instance.actionsDownloadArtifact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDownloadJobLogsForWorkflowRun', function() {
      it('should call actionsDownloadJobLogsForWorkflowRun successfully', function(done) {
        //uncomment below and update the code to test actionsDownloadJobLogsForWorkflowRun
        //instance.actionsDownloadJobLogsForWorkflowRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsDownloadWorkflowRunLogs', function() {
      it('should call actionsDownloadWorkflowRunLogs successfully', function(done) {
        //uncomment below and update the code to test actionsDownloadWorkflowRunLogs
        //instance.actionsDownloadWorkflowRunLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetArtifact', function() {
      it('should call actionsGetArtifact successfully', function(done) {
        //uncomment below and update the code to test actionsGetArtifact
        //instance.actionsGetArtifact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetJobForWorkflowRun', function() {
      it('should call actionsGetJobForWorkflowRun successfully', function(done) {
        //uncomment below and update the code to test actionsGetJobForWorkflowRun
        //instance.actionsGetJobForWorkflowRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetOrgPublicKey', function() {
      it('should call actionsGetOrgPublicKey successfully', function(done) {
        //uncomment below and update the code to test actionsGetOrgPublicKey
        //instance.actionsGetOrgPublicKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetOrgSecret', function() {
      it('should call actionsGetOrgSecret successfully', function(done) {
        //uncomment below and update the code to test actionsGetOrgSecret
        //instance.actionsGetOrgSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetRepoPublicKey', function() {
      it('should call actionsGetRepoPublicKey successfully', function(done) {
        //uncomment below and update the code to test actionsGetRepoPublicKey
        //instance.actionsGetRepoPublicKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetRepoSecret', function() {
      it('should call actionsGetRepoSecret successfully', function(done) {
        //uncomment below and update the code to test actionsGetRepoSecret
        //instance.actionsGetRepoSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetSelfHostedRunnerForOrg', function() {
      it('should call actionsGetSelfHostedRunnerForOrg successfully', function(done) {
        //uncomment below and update the code to test actionsGetSelfHostedRunnerForOrg
        //instance.actionsGetSelfHostedRunnerForOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetSelfHostedRunnerForRepo', function() {
      it('should call actionsGetSelfHostedRunnerForRepo successfully', function(done) {
        //uncomment below and update the code to test actionsGetSelfHostedRunnerForRepo
        //instance.actionsGetSelfHostedRunnerForRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetWorkflow', function() {
      it('should call actionsGetWorkflow successfully', function(done) {
        //uncomment below and update the code to test actionsGetWorkflow
        //instance.actionsGetWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetWorkflowRun', function() {
      it('should call actionsGetWorkflowRun successfully', function(done) {
        //uncomment below and update the code to test actionsGetWorkflowRun
        //instance.actionsGetWorkflowRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetWorkflowRunUsage', function() {
      it('should call actionsGetWorkflowRunUsage successfully', function(done) {
        //uncomment below and update the code to test actionsGetWorkflowRunUsage
        //instance.actionsGetWorkflowRunUsage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsGetWorkflowUsage', function() {
      it('should call actionsGetWorkflowUsage successfully', function(done) {
        //uncomment below and update the code to test actionsGetWorkflowUsage
        //instance.actionsGetWorkflowUsage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListArtifactsForRepo', function() {
      it('should call actionsListArtifactsForRepo successfully', function(done) {
        //uncomment below and update the code to test actionsListArtifactsForRepo
        //instance.actionsListArtifactsForRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListJobsForWorkflowRun', function() {
      it('should call actionsListJobsForWorkflowRun successfully', function(done) {
        //uncomment below and update the code to test actionsListJobsForWorkflowRun
        //instance.actionsListJobsForWorkflowRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListOrgSecrets', function() {
      it('should call actionsListOrgSecrets successfully', function(done) {
        //uncomment below and update the code to test actionsListOrgSecrets
        //instance.actionsListOrgSecrets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListRepoSecrets', function() {
      it('should call actionsListRepoSecrets successfully', function(done) {
        //uncomment below and update the code to test actionsListRepoSecrets
        //instance.actionsListRepoSecrets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListRepoWorkflows', function() {
      it('should call actionsListRepoWorkflows successfully', function(done) {
        //uncomment below and update the code to test actionsListRepoWorkflows
        //instance.actionsListRepoWorkflows(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListRunnerApplicationsForOrg', function() {
      it('should call actionsListRunnerApplicationsForOrg successfully', function(done) {
        //uncomment below and update the code to test actionsListRunnerApplicationsForOrg
        //instance.actionsListRunnerApplicationsForOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListRunnerApplicationsForRepo', function() {
      it('should call actionsListRunnerApplicationsForRepo successfully', function(done) {
        //uncomment below and update the code to test actionsListRunnerApplicationsForRepo
        //instance.actionsListRunnerApplicationsForRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListSelectedReposForOrgSecret', function() {
      it('should call actionsListSelectedReposForOrgSecret successfully', function(done) {
        //uncomment below and update the code to test actionsListSelectedReposForOrgSecret
        //instance.actionsListSelectedReposForOrgSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListSelfHostedRunnersForOrg', function() {
      it('should call actionsListSelfHostedRunnersForOrg successfully', function(done) {
        //uncomment below and update the code to test actionsListSelfHostedRunnersForOrg
        //instance.actionsListSelfHostedRunnersForOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListSelfHostedRunnersForRepo', function() {
      it('should call actionsListSelfHostedRunnersForRepo successfully', function(done) {
        //uncomment below and update the code to test actionsListSelfHostedRunnersForRepo
        //instance.actionsListSelfHostedRunnersForRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListWorkflowRunArtifacts', function() {
      it('should call actionsListWorkflowRunArtifacts successfully', function(done) {
        //uncomment below and update the code to test actionsListWorkflowRunArtifacts
        //instance.actionsListWorkflowRunArtifacts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListWorkflowRuns', function() {
      it('should call actionsListWorkflowRuns successfully', function(done) {
        //uncomment below and update the code to test actionsListWorkflowRuns
        //instance.actionsListWorkflowRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsListWorkflowRunsForRepo', function() {
      it('should call actionsListWorkflowRunsForRepo successfully', function(done) {
        //uncomment below and update the code to test actionsListWorkflowRunsForRepo
        //instance.actionsListWorkflowRunsForRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsReRunWorkflow', function() {
      it('should call actionsReRunWorkflow successfully', function(done) {
        //uncomment below and update the code to test actionsReRunWorkflow
        //instance.actionsReRunWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsRemoveSelectedRepoFromOrgSecret', function() {
      it('should call actionsRemoveSelectedRepoFromOrgSecret successfully', function(done) {
        //uncomment below and update the code to test actionsRemoveSelectedRepoFromOrgSecret
        //instance.actionsRemoveSelectedRepoFromOrgSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionsSetSelectedReposForOrgSecret', function() {
      it('should call actionsSetSelectedReposForOrgSecret successfully', function(done) {
        //uncomment below and update the code to test actionsSetSelectedReposForOrgSecret
        //instance.actionsSetSelectedReposForOrgSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));