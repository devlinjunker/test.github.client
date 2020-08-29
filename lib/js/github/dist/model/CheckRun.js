"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CheckRunCheckSuite = _interopRequireDefault(require("./CheckRunCheckSuite"));

var _CheckRunOutput = _interopRequireDefault(require("./CheckRunOutput"));

var _Integration = _interopRequireDefault(require("./Integration"));

var _PullRequestMinimal = _interopRequireDefault(require("./PullRequestMinimal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CheckRun model module.
 * @module model/CheckRun
 * @version 0.0.5
 */
var CheckRun = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckRun</code>.
   * A check performed on the code of a given code change
   * @alias module:model/CheckRun
   * @param app {module:model/Integration} 
   * @param checkSuite {module:model/CheckRunCheckSuite} 
   * @param completedAt {Date} 
   * @param conclusion {String} 
   * @param detailsUrl {String} 
   * @param externalId {String} 
   * @param headSha {String} The SHA of the commit that is being checked.
   * @param htmlUrl {String} 
   * @param id {Number} The id of the check.
   * @param name {String} The name of the check.
   * @param nodeId {String} 
   * @param output {module:model/CheckRunOutput} 
   * @param pullRequests {Array.<module:model/PullRequestMinimal>} 
   * @param startedAt {Date} 
   * @param status {module:model/CheckRun.StatusEnum} The phase of the lifecycle that the check is currently in.
   * @param url {String} 
   */
  function CheckRun(app, checkSuite, completedAt, conclusion, detailsUrl, externalId, headSha, htmlUrl, id, name, nodeId, output, pullRequests, startedAt, status, url) {
    _classCallCheck(this, CheckRun);

    CheckRun.initialize(this, app, checkSuite, completedAt, conclusion, detailsUrl, externalId, headSha, htmlUrl, id, name, nodeId, output, pullRequests, startedAt, status, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckRun, null, [{
    key: "initialize",
    value: function initialize(obj, app, checkSuite, completedAt, conclusion, detailsUrl, externalId, headSha, htmlUrl, id, name, nodeId, output, pullRequests, startedAt, status, url) {
      obj['app'] = app;
      obj['check_suite'] = checkSuite;
      obj['completed_at'] = completedAt;
      obj['conclusion'] = conclusion;
      obj['details_url'] = detailsUrl;
      obj['external_id'] = externalId;
      obj['head_sha'] = headSha;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['output'] = output;
      obj['pull_requests'] = pullRequests;
      obj['started_at'] = startedAt;
      obj['status'] = status;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CheckRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckRun} obj Optional instance to populate.
     * @return {module:model/CheckRun} The populated <code>CheckRun</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckRun();

        if (data.hasOwnProperty('app')) {
          obj['app'] = _ApiClient["default"].convertToType(data['app'], _Integration["default"]);
        }

        if (data.hasOwnProperty('check_suite')) {
          obj['check_suite'] = _CheckRunCheckSuite["default"].constructFromObject(data['check_suite']);
        }

        if (data.hasOwnProperty('completed_at')) {
          obj['completed_at'] = _ApiClient["default"].convertToType(data['completed_at'], 'Date');
        }

        if (data.hasOwnProperty('conclusion')) {
          obj['conclusion'] = _ApiClient["default"].convertToType(data['conclusion'], 'String');
        }

        if (data.hasOwnProperty('details_url')) {
          obj['details_url'] = _ApiClient["default"].convertToType(data['details_url'], 'String');
        }

        if (data.hasOwnProperty('external_id')) {
          obj['external_id'] = _ApiClient["default"].convertToType(data['external_id'], 'String');
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

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('output')) {
          obj['output'] = _CheckRunOutput["default"].constructFromObject(data['output']);
        }

        if (data.hasOwnProperty('pull_requests')) {
          obj['pull_requests'] = _ApiClient["default"].convertToType(data['pull_requests'], [_PullRequestMinimal["default"]]);
        }

        if (data.hasOwnProperty('started_at')) {
          obj['started_at'] = _ApiClient["default"].convertToType(data['started_at'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CheckRun;
}();
/**
 * @member {module:model/Integration} app
 */


CheckRun.prototype['app'] = undefined;
/**
 * @member {module:model/CheckRunCheckSuite} check_suite
 */

CheckRun.prototype['check_suite'] = undefined;
/**
 * @member {Date} completed_at
 */

CheckRun.prototype['completed_at'] = undefined;
/**
 * @member {String} conclusion
 */

CheckRun.prototype['conclusion'] = undefined;
/**
 * @member {String} details_url
 */

CheckRun.prototype['details_url'] = undefined;
/**
 * @member {String} external_id
 */

CheckRun.prototype['external_id'] = undefined;
/**
 * The SHA of the commit that is being checked.
 * @member {String} head_sha
 */

CheckRun.prototype['head_sha'] = undefined;
/**
 * @member {String} html_url
 */

CheckRun.prototype['html_url'] = undefined;
/**
 * The id of the check.
 * @member {Number} id
 */

CheckRun.prototype['id'] = undefined;
/**
 * The name of the check.
 * @member {String} name
 */

CheckRun.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

CheckRun.prototype['node_id'] = undefined;
/**
 * @member {module:model/CheckRunOutput} output
 */

CheckRun.prototype['output'] = undefined;
/**
 * @member {Array.<module:model/PullRequestMinimal>} pull_requests
 */

CheckRun.prototype['pull_requests'] = undefined;
/**
 * @member {Date} started_at
 */

CheckRun.prototype['started_at'] = undefined;
/**
 * The phase of the lifecycle that the check is currently in.
 * @member {module:model/CheckRun.StatusEnum} status
 */

CheckRun.prototype['status'] = undefined;
/**
 * @member {String} url
 */

CheckRun.prototype['url'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

CheckRun['StatusEnum'] = {
  /**
   * value: "queued"
   * @const
   */
  "queued": "queued",

  /**
   * value: "in_progress"
   * @const
   */
  "in_progress": "in_progress",

  /**
   * value: "completed"
   * @const
   */
  "completed": "completed"
};
var _default = CheckRun;
exports["default"] = _default;