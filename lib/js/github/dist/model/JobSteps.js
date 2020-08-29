"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobSteps model module.
 * @module model/JobSteps
 * @version 0.0.5
 */
var JobSteps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobSteps</code>.
   * @alias module:model/JobSteps
   * @param conclusion {String} The outcome of the job.
   * @param name {String} The name of the job.
   * @param _number {Number} 
   * @param status {module:model/JobSteps.StatusEnum} The phase of the lifecycle that the job is currently in.
   */
  function JobSteps(conclusion, name, _number, status) {
    _classCallCheck(this, JobSteps);

    JobSteps.initialize(this, conclusion, name, _number, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobSteps, null, [{
    key: "initialize",
    value: function initialize(obj, conclusion, name, _number, status) {
      obj['conclusion'] = conclusion;
      obj['name'] = name;
      obj['number'] = _number;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>JobSteps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobSteps} obj Optional instance to populate.
     * @return {module:model/JobSteps} The populated <code>JobSteps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobSteps();

        if (data.hasOwnProperty('completed_at')) {
          obj['completed_at'] = _ApiClient["default"].convertToType(data['completed_at'], 'Date');
        }

        if (data.hasOwnProperty('conclusion')) {
          obj['conclusion'] = _ApiClient["default"].convertToType(data['conclusion'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('started_at')) {
          obj['started_at'] = _ApiClient["default"].convertToType(data['started_at'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JobSteps;
}();
/**
 * The time that the job finished, in ISO 8601 format.
 * @member {Date} completed_at
 */


JobSteps.prototype['completed_at'] = undefined;
/**
 * The outcome of the job.
 * @member {String} conclusion
 */

JobSteps.prototype['conclusion'] = undefined;
/**
 * The name of the job.
 * @member {String} name
 */

JobSteps.prototype['name'] = undefined;
/**
 * @member {Number} number
 */

JobSteps.prototype['number'] = undefined;
/**
 * The time that the step started, in ISO 8601 format.
 * @member {Date} started_at
 */

JobSteps.prototype['started_at'] = undefined;
/**
 * The phase of the lifecycle that the job is currently in.
 * @member {module:model/JobSteps.StatusEnum} status
 */

JobSteps.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

JobSteps['StatusEnum'] = {
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
var _default = JobSteps;
exports["default"] = _default;