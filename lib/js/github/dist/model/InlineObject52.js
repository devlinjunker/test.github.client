"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoCheckRunsActions = _interopRequireDefault(require("./ReposOwnerRepoCheckRunsActions"));

var _ReposOwnerRepoCheckRunsOutput = _interopRequireDefault(require("./ReposOwnerRepoCheckRunsOutput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject52 model module.
 * @module model/InlineObject52
 * @version 0.0.5
 */
var InlineObject52 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject52</code>.
   * @alias module:model/InlineObject52
   * @param headSha {String} The SHA of the commit.
   * @param name {String} The name of the check. For example, \"code-coverage\".
   */
  function InlineObject52(headSha, name) {
    _classCallCheck(this, InlineObject52);

    InlineObject52.initialize(this, headSha, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject52, null, [{
    key: "initialize",
    value: function initialize(obj, headSha, name) {
      obj['head_sha'] = headSha;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineObject52</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject52} obj Optional instance to populate.
     * @return {module:model/InlineObject52} The populated <code>InlineObject52</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject52();

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

        if (data.hasOwnProperty('head_sha')) {
          obj['head_sha'] = _ApiClient["default"].convertToType(data['head_sha'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('output')) {
          obj['output'] = _ReposOwnerRepoCheckRunsOutput["default"].constructFromObject(data['output']);
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

  return InlineObject52;
}();
/**
 * Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://developer.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\" To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\"
 * @member {Array.<module:model/ReposOwnerRepoCheckRunsActions>} actions
 */


InlineObject52.prototype['actions'] = undefined;
/**
 * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {String} completed_at
 */

InlineObject52.prototype['completed_at'] = undefined;
/**
 * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`. When the conclusion is `action_required`, additional details should be provided on the site specified by `details_url`.   **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`.
 * @member {module:model/InlineObject52.ConclusionEnum} conclusion
 */

InlineObject52.prototype['conclusion'] = undefined;
/**
 * The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
 * @member {String} details_url
 */

InlineObject52.prototype['details_url'] = undefined;
/**
 * A reference for the run on the integrator's system.
 * @member {String} external_id
 */

InlineObject52.prototype['external_id'] = undefined;
/**
 * The SHA of the commit.
 * @member {String} head_sha
 */

InlineObject52.prototype['head_sha'] = undefined;
/**
 * The name of the check. For example, \"code-coverage\".
 * @member {String} name
 */

InlineObject52.prototype['name'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoCheckRunsOutput} output
 */

InlineObject52.prototype['output'] = undefined;
/**
 * The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {String} started_at
 */

InlineObject52.prototype['started_at'] = undefined;
/**
 * The current status. Can be one of `queued`, `in_progress`, or `completed`.
 * @member {module:model/InlineObject52.StatusEnum} status
 * @default 'queued'
 */

InlineObject52.prototype['status'] = 'queued';
/**
 * Allowed values for the <code>conclusion</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject52['ConclusionEnum'] = {
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

InlineObject52['StatusEnum'] = {
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
var _default = InlineObject52;
exports["default"] = _default;