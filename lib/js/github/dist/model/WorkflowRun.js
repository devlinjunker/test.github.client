"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MinimalRepository = _interopRequireDefault(require("./MinimalRepository"));

var _PullRequestMinimal = _interopRequireDefault(require("./PullRequestMinimal"));

var _SimpleCommit = _interopRequireDefault(require("./SimpleCommit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowRun model module.
 * @module model/WorkflowRun
 * @version 0.0.5
 */
var WorkflowRun = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowRun</code>.
   * An invocation of a workflow
   * @alias module:model/WorkflowRun
   * @param artifactsUrl {String} The URL to the artifacts for the workflow run.
   * @param cancelUrl {String} The URL to cancel the workflow run.
   * @param checkSuiteUrl {String} The URL to the associated check suite.
   * @param conclusion {String} 
   * @param createdAt {Date} 
   * @param event {String} 
   * @param headBranch {String} 
   * @param headCommit {module:model/SimpleCommit} 
   * @param headRepository {module:model/MinimalRepository} 
   * @param headSha {String} The SHA of the head commit that points to the version of the worflow being run.
   * @param htmlUrl {String} 
   * @param id {Number} The ID of the workflow run.
   * @param jobsUrl {String} The URL to the jobs for the workflow run.
   * @param logsUrl {String} The URL to download the logs for the workflow run.
   * @param nodeId {String} 
   * @param pullRequests {Array.<module:model/PullRequestMinimal>} 
   * @param repository {module:model/MinimalRepository} 
   * @param rerunUrl {String} The URL to rerun the workflow run.
   * @param runNumber {Number} The auto incrementing run number for the workflow run.
   * @param status {String} 
   * @param updatedAt {Date} 
   * @param url {String} The URL to the workflow run.
   * @param workflowId {Number} The ID of the parent workflow.
   * @param workflowUrl {String} The URL to the workflow.
   */
  function WorkflowRun(artifactsUrl, cancelUrl, checkSuiteUrl, conclusion, createdAt, event, headBranch, headCommit, headRepository, headSha, htmlUrl, id, jobsUrl, logsUrl, nodeId, pullRequests, repository, rerunUrl, runNumber, status, updatedAt, url, workflowId, workflowUrl) {
    _classCallCheck(this, WorkflowRun);

    WorkflowRun.initialize(this, artifactsUrl, cancelUrl, checkSuiteUrl, conclusion, createdAt, event, headBranch, headCommit, headRepository, headSha, htmlUrl, id, jobsUrl, logsUrl, nodeId, pullRequests, repository, rerunUrl, runNumber, status, updatedAt, url, workflowId, workflowUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowRun, null, [{
    key: "initialize",
    value: function initialize(obj, artifactsUrl, cancelUrl, checkSuiteUrl, conclusion, createdAt, event, headBranch, headCommit, headRepository, headSha, htmlUrl, id, jobsUrl, logsUrl, nodeId, pullRequests, repository, rerunUrl, runNumber, status, updatedAt, url, workflowId, workflowUrl) {
      obj['artifacts_url'] = artifactsUrl;
      obj['cancel_url'] = cancelUrl;
      obj['check_suite_url'] = checkSuiteUrl;
      obj['conclusion'] = conclusion;
      obj['created_at'] = createdAt;
      obj['event'] = event;
      obj['head_branch'] = headBranch;
      obj['head_commit'] = headCommit;
      obj['head_repository'] = headRepository;
      obj['head_sha'] = headSha;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['jobs_url'] = jobsUrl;
      obj['logs_url'] = logsUrl;
      obj['node_id'] = nodeId;
      obj['pull_requests'] = pullRequests;
      obj['repository'] = repository;
      obj['rerun_url'] = rerunUrl;
      obj['run_number'] = runNumber;
      obj['status'] = status;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['workflow_id'] = workflowId;
      obj['workflow_url'] = workflowUrl;
    }
    /**
     * Constructs a <code>WorkflowRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowRun} obj Optional instance to populate.
     * @return {module:model/WorkflowRun} The populated <code>WorkflowRun</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowRun();

        if (data.hasOwnProperty('artifacts_url')) {
          obj['artifacts_url'] = _ApiClient["default"].convertToType(data['artifacts_url'], 'String');
        }

        if (data.hasOwnProperty('cancel_url')) {
          obj['cancel_url'] = _ApiClient["default"].convertToType(data['cancel_url'], 'String');
        }

        if (data.hasOwnProperty('check_suite_url')) {
          obj['check_suite_url'] = _ApiClient["default"].convertToType(data['check_suite_url'], 'String');
        }

        if (data.hasOwnProperty('conclusion')) {
          obj['conclusion'] = _ApiClient["default"].convertToType(data['conclusion'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('head_branch')) {
          obj['head_branch'] = _ApiClient["default"].convertToType(data['head_branch'], 'String');
        }

        if (data.hasOwnProperty('head_commit')) {
          obj['head_commit'] = _SimpleCommit["default"].constructFromObject(data['head_commit']);
        }

        if (data.hasOwnProperty('head_repository')) {
          obj['head_repository'] = _MinimalRepository["default"].constructFromObject(data['head_repository']);
        }

        if (data.hasOwnProperty('head_repository_id')) {
          obj['head_repository_id'] = _ApiClient["default"].convertToType(data['head_repository_id'], 'Number');
        }

        if (data.hasOwnProperty('head_sha')) {
          obj['head_sha'] = _ApiClient["default"].convertToType(data['head_sha'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('jobs_url')) {
          obj['jobs_url'] = _ApiClient["default"].convertToType(data['jobs_url'], 'String');
        }

        if (data.hasOwnProperty('logs_url')) {
          obj['logs_url'] = _ApiClient["default"].convertToType(data['logs_url'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('pull_requests')) {
          obj['pull_requests'] = _ApiClient["default"].convertToType(data['pull_requests'], [_PullRequestMinimal["default"]]);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _MinimalRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('rerun_url')) {
          obj['rerun_url'] = _ApiClient["default"].convertToType(data['rerun_url'], 'String');
        }

        if (data.hasOwnProperty('run_number')) {
          obj['run_number'] = _ApiClient["default"].convertToType(data['run_number'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('workflow_id')) {
          obj['workflow_id'] = _ApiClient["default"].convertToType(data['workflow_id'], 'Number');
        }

        if (data.hasOwnProperty('workflow_url')) {
          obj['workflow_url'] = _ApiClient["default"].convertToType(data['workflow_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WorkflowRun;
}();
/**
 * The URL to the artifacts for the workflow run.
 * @member {String} artifacts_url
 */


WorkflowRun.prototype['artifacts_url'] = undefined;
/**
 * The URL to cancel the workflow run.
 * @member {String} cancel_url
 */

WorkflowRun.prototype['cancel_url'] = undefined;
/**
 * The URL to the associated check suite.
 * @member {String} check_suite_url
 */

WorkflowRun.prototype['check_suite_url'] = undefined;
/**
 * @member {String} conclusion
 */

WorkflowRun.prototype['conclusion'] = undefined;
/**
 * @member {Date} created_at
 */

WorkflowRun.prototype['created_at'] = undefined;
/**
 * @member {String} event
 */

WorkflowRun.prototype['event'] = undefined;
/**
 * @member {String} head_branch
 */

WorkflowRun.prototype['head_branch'] = undefined;
/**
 * @member {module:model/SimpleCommit} head_commit
 */

WorkflowRun.prototype['head_commit'] = undefined;
/**
 * @member {module:model/MinimalRepository} head_repository
 */

WorkflowRun.prototype['head_repository'] = undefined;
/**
 * @member {Number} head_repository_id
 */

WorkflowRun.prototype['head_repository_id'] = undefined;
/**
 * The SHA of the head commit that points to the version of the worflow being run.
 * @member {String} head_sha
 */

WorkflowRun.prototype['head_sha'] = undefined;
/**
 * @member {String} html_url
 */

WorkflowRun.prototype['html_url'] = undefined;
/**
 * The ID of the workflow run.
 * @member {Number} id
 */

WorkflowRun.prototype['id'] = undefined;
/**
 * The URL to the jobs for the workflow run.
 * @member {String} jobs_url
 */

WorkflowRun.prototype['jobs_url'] = undefined;
/**
 * The URL to download the logs for the workflow run.
 * @member {String} logs_url
 */

WorkflowRun.prototype['logs_url'] = undefined;
/**
 * @member {String} node_id
 */

WorkflowRun.prototype['node_id'] = undefined;
/**
 * @member {Array.<module:model/PullRequestMinimal>} pull_requests
 */

WorkflowRun.prototype['pull_requests'] = undefined;
/**
 * @member {module:model/MinimalRepository} repository
 */

WorkflowRun.prototype['repository'] = undefined;
/**
 * The URL to rerun the workflow run.
 * @member {String} rerun_url
 */

WorkflowRun.prototype['rerun_url'] = undefined;
/**
 * The auto incrementing run number for the workflow run.
 * @member {Number} run_number
 */

WorkflowRun.prototype['run_number'] = undefined;
/**
 * @member {String} status
 */

WorkflowRun.prototype['status'] = undefined;
/**
 * @member {Date} updated_at
 */

WorkflowRun.prototype['updated_at'] = undefined;
/**
 * The URL to the workflow run.
 * @member {String} url
 */

WorkflowRun.prototype['url'] = undefined;
/**
 * The ID of the parent workflow.
 * @member {Number} workflow_id
 */

WorkflowRun.prototype['workflow_id'] = undefined;
/**
 * The URL to the workflow.
 * @member {String} workflow_url
 */

WorkflowRun.prototype['workflow_url'] = undefined;
var _default = WorkflowRun;
exports["default"] = _default;