"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoCheckRunsActions = _interopRequireDefault(require("./ReposOwnerRepoCheckRunsActions"));

var _ReposOwnerRepoCheckRunsCheckRunIdOutput = _interopRequireDefault(require("./ReposOwnerRepoCheckRunsCheckRunIdOutput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject53 model module.
 * @module model/InlineObject53
 * @version 0.0.5
 */
var InlineObject53 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject53</code>.
   * @alias module:model/InlineObject53
   */
  function InlineObject53() {
    _classCallCheck(this, InlineObject53);

    InlineObject53.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject53, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject53</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject53} obj Optional instance to populate.
     * @return {module:model/InlineObject53} The populated <code>InlineObject53</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject53();

        if (data.hasOwnProperty('actions')) {
          obj['actions'] = _ApiClient["default"].convertToType(data['actions'], [_ReposOwnerRepoCheckRunsActions["default"]]);
        }

        if (data.hasOwnProperty('completed_at')) {
          obj['completed_at'] = _ApiClient["default"].convertToType(data['completed_at'], 'String');
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

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('output')) {
          obj['output'] = _ReposOwnerRepoCheckRunsCheckRunIdOutput["default"].constructFromObject(data['output']);
        }

        if (data.hasOwnProperty('started_at')) {
          obj['started_at'] = _ApiClient["default"].convertToType(data['started_at'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject53;
}();
/**
 * Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\"
 * @member {Array.<module:model/ReposOwnerRepoCheckRunsActions>} actions
 */


InlineObject53.prototype['actions'] = undefined;
/**
 * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {String} completed_at
 */

InlineObject53.prototype['completed_at'] = undefined;
/**
 * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`.   **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`.
 * @member {module:model/InlineObject53.ConclusionEnum} conclusion
 */

InlineObject53.prototype['conclusion'] = undefined;
/**
 * The URL of the integrator's site that has the full details of the check.
 * @member {String} details_url
 */

InlineObject53.prototype['details_url'] = undefined;
/**
 * A reference for the run on the integrator's system.
 * @member {String} external_id
 */

InlineObject53.prototype['external_id'] = undefined;
/**
 * The name of the check. For example, \"code-coverage\".
 * @member {String} name
 */

InlineObject53.prototype['name'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoCheckRunsCheckRunIdOutput} output
 */

InlineObject53.prototype['output'] = undefined;
/**
 * This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {String} started_at
 */

InlineObject53.prototype['started_at'] = undefined;
/**
 * The current status. Can be one of `queued`, `in_progress`, or `completed`.
 * @member {module:model/InlineObject53.StatusEnum} status
 */

InlineObject53.prototype['status'] = undefined;
/**
 * Allowed values for the <code>conclusion</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject53['ConclusionEnum'] = {
  /**
   * value: "success"
   * @const
   */
  "success": "success",

  /**
   * value: "failure"
   * @const
   */
  "failure": "failure",

  /**
   * value: "neutral"
   * @const
   */
  "neutral": "neutral",

  /**
   * value: "cancelled"
   * @const
   */
  "cancelled": "cancelled",

  /**
   * value: "skipped"
   * @const
   */
  "skipped": "skipped",

  /**
   * value: "timed_out"
   * @const
   */
  "timed_out": "timed_out",

  /**
   * value: "action_required"
   * @const
   */
  "action_required": "action_required"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject53['StatusEnum'] = {
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
var _default = InlineObject53;
exports["default"] = _default;