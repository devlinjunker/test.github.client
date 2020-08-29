"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobSteps = _interopRequireDefault(require("./JobSteps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Job model module.
 * @module model/Job
 * @version 0.0.5
 */
var Job = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Job</code>.
   * Information of a job execution in a workflow run
   * @alias module:model/Job
   * @param checkRunUrl {String} 
   * @param completedAt {Date} The time that the job finished, in ISO 8601 format.
   * @param conclusion {String} The outcome of the job.
   * @param headSha {String} The SHA of the commit that is being run.
   * @param htmlUrl {String} 
   * @param id {Number} The id of the job.
   * @param name {String} The name of the job.
   * @param nodeId {String} 
   * @param runId {Number} The id of the associated workflow run.
   * @param runUrl {String} 
   * @param startedAt {Date} The time that the job started, in ISO 8601 format.
   * @param status {module:model/Job.StatusEnum} The phase of the lifecycle that the job is currently in.
   * @param url {String} 
   */
  function Job(checkRunUrl, completedAt, conclusion, headSha, htmlUrl, id, name, nodeId, runId, runUrl, startedAt, status, url) {
    _classCallCheck(this, Job);

    Job.initialize(this, checkRunUrl, completedAt, conclusion, headSha, htmlUrl, id, name, nodeId, runId, runUrl, startedAt, status, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Job, null, [{
    key: "initialize",
    value: function initialize(obj, checkRunUrl, completedAt, conclusion, headSha, htmlUrl, id, name, nodeId, runId, runUrl, startedAt, status, url) {
      obj['check_run_url'] = checkRunUrl;
      obj['completed_at'] = completedAt;
      obj['conclusion'] = conclusion;
      obj['head_sha'] = headSha;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['run_id'] = runId;
      obj['run_url'] = runUrl;
      obj['started_at'] = startedAt;
      obj['status'] = status;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Job} obj Optional instance to populate.
     * @return {module:model/Job} The populated <code>Job</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Job();

        if (data.hasOwnProperty('check_run_url')) {
          obj['check_run_url'] = _ApiClient["default"].convertToType(data['check_run_url'], 'String');
        }

        if (data.hasOwnProperty('completed_at')) {
          obj['completed_at'] = _ApiClient["default"].convertToType(data['completed_at'], 'Date');
        }

        if (data.hasOwnProperty('conclusion')) {
          obj['conclusion'] = _ApiClient["default"].convertToType(data['conclusion'], 'String');
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

        if (data.hasOwnProperty('run_id')) {
          obj['run_id'] = _ApiClient["default"].convertToType(data['run_id'], 'Number');
        }

        if (data.hasOwnProperty('run_url')) {
          obj['run_url'] = _ApiClient["default"].convertToType(data['run_url'], 'String');
        }

        if (data.hasOwnProperty('started_at')) {
          obj['started_at'] = _ApiClient["default"].convertToType(data['started_at'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('steps')) {
          obj['steps'] = _ApiClient["default"].convertToType(data['steps'], [_JobSteps["default"]]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Job;
}();
/**
 * @member {String} check_run_url
 */


Job.prototype['check_run_url'] = undefined;
/**
 * The time that the job finished, in ISO 8601 format.
 * @member {Date} completed_at
 */

Job.prototype['completed_at'] = undefined;
/**
 * The outcome of the job.
 * @member {String} conclusion
 */

Job.prototype['conclusion'] = undefined;
/**
 * The SHA of the commit that is being run.
 * @member {String} head_sha
 */

Job.prototype['head_sha'] = undefined;
/**
 * @member {String} html_url
 */

Job.prototype['html_url'] = undefined;
/**
 * The id of the job.
 * @member {Number} id
 */

Job.prototype['id'] = undefined;
/**
 * The name of the job.
 * @member {String} name
 */

Job.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Job.prototype['node_id'] = undefined;
/**
 * The id of the associated workflow run.
 * @member {Number} run_id
 */

Job.prototype['run_id'] = undefined;
/**
 * @member {String} run_url
 */

Job.prototype['run_url'] = undefined;
/**
 * The time that the job started, in ISO 8601 format.
 * @member {Date} started_at
 */

Job.prototype['started_at'] = undefined;
/**
 * The phase of the lifecycle that the job is currently in.
 * @member {module:model/Job.StatusEnum} status
 */

Job.prototype['status'] = undefined;
/**
 * Steps in this job.
 * @member {Array.<module:model/JobSteps>} steps
 */

Job.prototype['steps'] = undefined;
/**
 * @member {String} url
 */

Job.prototype['url'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Job['StatusEnum'] = {
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
var _default = Job;
exports["default"] = _default;