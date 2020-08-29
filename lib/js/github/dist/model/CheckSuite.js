"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Integration = _interopRequireDefault(require("./Integration"));

var _MinimalRepository = _interopRequireDefault(require("./MinimalRepository"));

var _PullRequestMinimal = _interopRequireDefault(require("./PullRequestMinimal"));

var _SimpleCommit = _interopRequireDefault(require("./SimpleCommit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CheckSuite model module.
 * @module model/CheckSuite
 * @version 0.0.5
 */
var CheckSuite = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckSuite</code>.
   * A suite of checks performed on the code of a given code change
   * @alias module:model/CheckSuite
   * @param after {String} 
   * @param app {module:model/Integration} 
   * @param before {String} 
   * @param checkRunsUrl {String} 
   * @param conclusion {String} 
   * @param createdAt {Date} 
   * @param headBranch {String} 
   * @param headCommit {module:model/SimpleCommit} 
   * @param headSha {String} The SHA of the head commit that is being checked.
   * @param id {Number} 
   * @param latestCheckRunsCount {Number} 
   * @param nodeId {String} 
   * @param pullRequests {Array.<module:model/PullRequestMinimal>} 
   * @param repository {module:model/MinimalRepository} 
   * @param status {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function CheckSuite(after, app, before, checkRunsUrl, conclusion, createdAt, headBranch, headCommit, headSha, id, latestCheckRunsCount, nodeId, pullRequests, repository, status, updatedAt, url) {
    _classCallCheck(this, CheckSuite);

    CheckSuite.initialize(this, after, app, before, checkRunsUrl, conclusion, createdAt, headBranch, headCommit, headSha, id, latestCheckRunsCount, nodeId, pullRequests, repository, status, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckSuite, null, [{
    key: "initialize",
    value: function initialize(obj, after, app, before, checkRunsUrl, conclusion, createdAt, headBranch, headCommit, headSha, id, latestCheckRunsCount, nodeId, pullRequests, repository, status, updatedAt, url) {
      obj['after'] = after;
      obj['app'] = app;
      obj['before'] = before;
      obj['check_runs_url'] = checkRunsUrl;
      obj['conclusion'] = conclusion;
      obj['created_at'] = createdAt;
      obj['head_branch'] = headBranch;
      obj['head_commit'] = headCommit;
      obj['head_sha'] = headSha;
      obj['id'] = id;
      obj['latest_check_runs_count'] = latestCheckRunsCount;
      obj['node_id'] = nodeId;
      obj['pull_requests'] = pullRequests;
      obj['repository'] = repository;
      obj['status'] = status;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CheckSuite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckSuite} obj Optional instance to populate.
     * @return {module:model/CheckSuite} The populated <code>CheckSuite</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckSuite();

        if (data.hasOwnProperty('after')) {
          obj['after'] = _ApiClient["default"].convertToType(data['after'], 'String');
        }

        if (data.hasOwnProperty('app')) {
          obj['app'] = _ApiClient["default"].convertToType(data['app'], _Integration["default"]);
        }

        if (data.hasOwnProperty('before')) {
          obj['before'] = _ApiClient["default"].convertToType(data['before'], 'String');
        }

        if (data.hasOwnProperty('check_runs_url')) {
          obj['check_runs_url'] = _ApiClient["default"].convertToType(data['check_runs_url'], 'String');
        }

        if (data.hasOwnProperty('conclusion')) {
          obj['conclusion'] = _ApiClient["default"].convertToType(data['conclusion'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('head_branch')) {
          obj['head_branch'] = _ApiClient["default"].convertToType(data['head_branch'], 'String');
        }

        if (data.hasOwnProperty('head_commit')) {
          obj['head_commit'] = _SimpleCommit["default"].constructFromObject(data['head_commit']);
        }

        if (data.hasOwnProperty('head_sha')) {
          obj['head_sha'] = _ApiClient["default"].convertToType(data['head_sha'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('latest_check_runs_count')) {
          obj['latest_check_runs_count'] = _ApiClient["default"].convertToType(data['latest_check_runs_count'], 'Number');
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

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CheckSuite;
}();
/**
 * @member {String} after
 */


CheckSuite.prototype['after'] = undefined;
/**
 * @member {module:model/Integration} app
 */

CheckSuite.prototype['app'] = undefined;
/**
 * @member {String} before
 */

CheckSuite.prototype['before'] = undefined;
/**
 * @member {String} check_runs_url
 */

CheckSuite.prototype['check_runs_url'] = undefined;
/**
 * @member {String} conclusion
 */

CheckSuite.prototype['conclusion'] = undefined;
/**
 * @member {Date} created_at
 */

CheckSuite.prototype['created_at'] = undefined;
/**
 * @member {String} head_branch
 */

CheckSuite.prototype['head_branch'] = undefined;
/**
 * @member {module:model/SimpleCommit} head_commit
 */

CheckSuite.prototype['head_commit'] = undefined;
/**
 * The SHA of the head commit that is being checked.
 * @member {String} head_sha
 */

CheckSuite.prototype['head_sha'] = undefined;
/**
 * @member {Number} id
 */

CheckSuite.prototype['id'] = undefined;
/**
 * @member {Number} latest_check_runs_count
 */

CheckSuite.prototype['latest_check_runs_count'] = undefined;
/**
 * @member {String} node_id
 */

CheckSuite.prototype['node_id'] = undefined;
/**
 * @member {Array.<module:model/PullRequestMinimal>} pull_requests
 */

CheckSuite.prototype['pull_requests'] = undefined;
/**
 * @member {module:model/MinimalRepository} repository
 */

CheckSuite.prototype['repository'] = undefined;
/**
 * @member {String} status
 */

CheckSuite.prototype['status'] = undefined;
/**
 * @member {Date} updated_at
 */

CheckSuite.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

CheckSuite.prototype['url'] = undefined;
var _default = CheckSuite;
exports["default"] = _default;