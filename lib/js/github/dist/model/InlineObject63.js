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
 * The InlineObject63 model module.
 * @module model/InlineObject63
 * @version 0.0.5
 */
var InlineObject63 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject63</code>.
   * @alias module:model/InlineObject63
   * @param state {module:model/InlineObject63.StateEnum} The state of the status. Can be one of `error`, `failure`, `inactive`, `in_progress`, `queued` `pending`, or `success`. **Note:** To use the `inactive` state, you must provide the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. To use the `in_progress` and `queued` states, you must provide the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.
   */
  function InlineObject63(state) {
    _classCallCheck(this, InlineObject63);

    InlineObject63.initialize(this, state);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject63, null, [{
    key: "initialize",
    value: function initialize(obj, state) {
      obj['state'] = state;
    }
    /**
     * Constructs a <code>InlineObject63</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject63} obj Optional instance to populate.
     * @return {module:model/InlineObject63} The populated <code>InlineObject63</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject63();

        if (data.hasOwnProperty('auto_inactive')) {
          obj['auto_inactive'] = _ApiClient["default"].convertToType(data['auto_inactive'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }

        if (data.hasOwnProperty('environment_url')) {
          obj['environment_url'] = _ApiClient["default"].convertToType(data['environment_url'], 'String');
        }

        if (data.hasOwnProperty('log_url')) {
          obj['log_url'] = _ApiClient["default"].convertToType(data['log_url'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('target_url')) {
          obj['target_url'] = _ApiClient["default"].convertToType(data['target_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject63;
}();
/**
 * Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`   **Note:** To add an `inactive` status to `production` environments, you must use the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type.   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.
 * @member {Boolean} auto_inactive
 */


InlineObject63.prototype['auto_inactive'] = undefined;
/**
 * A short description of the status. The maximum description length is 140 characters.
 * @member {String} description
 * @default ''
 */

InlineObject63.prototype['description'] = '';
/**
 * Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`. **Note:** This parameter requires you to use the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type.
 * @member {module:model/InlineObject63.EnvironmentEnum} environment
 */

InlineObject63.prototype['environment'] = undefined;
/**
 * Sets the URL for accessing your environment. Default: `\"\"`   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.
 * @member {String} environment_url
 * @default ''
 */

InlineObject63.prototype['environment_url'] = '';
/**
 * The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `\"\"`   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.
 * @member {String} log_url
 * @default ''
 */

InlineObject63.prototype['log_url'] = '';
/**
 * The state of the status. Can be one of `error`, `failure`, `inactive`, `in_progress`, `queued` `pending`, or `success`. **Note:** To use the `inactive` state, you must provide the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. To use the `in_progress` and `queued` states, you must provide the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.
 * @member {module:model/InlineObject63.StateEnum} state
 */

InlineObject63.prototype['state'] = undefined;
/**
 * The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`.
 * @member {String} target_url
 * @default ''
 */

InlineObject63.prototype['target_url'] = '';
/**
 * Allowed values for the <code>environment</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject63['EnvironmentEnum'] = {
  /**
   * value: "production"
   * @const
   */
  "production": "production",

  /**
   * value: "staging"
   * @const
   */
  "staging": "staging",

  /**
   * value: "qa"
   * @const
   */
  "qa": "qa"
};
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject63['StateEnum'] = {
  /**
   * value: "error"
   * @const
   */
  "error": "error",

  /**
   * value: "failure"
   * @const
   */
  "failure": "failure",

  /**
   * value: "inactive"
   * @const
   */
  "inactive": "inactive",

  /**
   * value: "in_progress"
   * @const
   */
  "in_progress": "in_progress",

  /**
   * value: "queued"
   * @const
   */
  "queued": "queued",

  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "success"
   * @const
   */
  "success": "success"
};
var _default = InlineObject63;
exports["default"] = _default;