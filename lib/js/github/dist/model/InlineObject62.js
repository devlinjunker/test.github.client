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
 * The InlineObject62 model module.
 * @module model/InlineObject62
 * @version 0.0.5
 */
var InlineObject62 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject62</code>.
   * @alias module:model/InlineObject62
   * @param ref {String} The ref to deploy. This can be a branch, tag, or SHA.
   */
  function InlineObject62(ref) {
    _classCallCheck(this, InlineObject62);

    InlineObject62.initialize(this, ref);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject62, null, [{
    key: "initialize",
    value: function initialize(obj, ref) {
      obj['ref'] = ref;
    }
    /**
     * Constructs a <code>InlineObject62</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject62} obj Optional instance to populate.
     * @return {module:model/InlineObject62} The populated <code>InlineObject62</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject62();

        if (data.hasOwnProperty('auto_merge')) {
          obj['auto_merge'] = _ApiClient["default"].convertToType(data['auto_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }

        if (data.hasOwnProperty('payload')) {
          obj['payload'] = _ApiClient["default"].convertToType(data['payload'], 'String');
        }

        if (data.hasOwnProperty('production_environment')) {
          obj['production_environment'] = _ApiClient["default"].convertToType(data['production_environment'], 'Boolean');
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('required_contexts')) {
          obj['required_contexts'] = _ApiClient["default"].convertToType(data['required_contexts'], ['String']);
        }

        if (data.hasOwnProperty('task')) {
          obj['task'] = _ApiClient["default"].convertToType(data['task'], 'String');
        }

        if (data.hasOwnProperty('transient_environment')) {
          obj['transient_environment'] = _ApiClient["default"].convertToType(data['transient_environment'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject62;
}();
/**
 * Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
 * @member {Boolean} auto_merge
 * @default true
 */


InlineObject62.prototype['auto_merge'] = true;
/**
 * @member {String} created_at
 */

InlineObject62.prototype['created_at'] = undefined;
/**
 * Short description of the deployment.
 * @member {String} description
 * @default ''
 */

InlineObject62.prototype['description'] = '';
/**
 * Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
 * @member {String} environment
 * @default 'production'
 */

InlineObject62.prototype['environment'] = 'production';
/**
 * JSON payload with extra information about the deployment.
 * @member {String} payload
 * @default ''
 */

InlineObject62.prototype['payload'] = '';
/**
 * Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.
 * @member {Boolean} production_environment
 */

InlineObject62.prototype['production_environment'] = undefined;
/**
 * The ref to deploy. This can be a branch, tag, or SHA.
 * @member {String} ref
 */

InlineObject62.prototype['ref'] = undefined;
/**
 * The [status](https://developer.github.com/v3/repos/statuses/) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
 * @member {Array.<String>} required_contexts
 */

InlineObject62.prototype['required_contexts'] = undefined;
/**
 * Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
 * @member {String} task
 * @default 'deploy'
 */

InlineObject62.prototype['task'] = 'deploy';
/**
 * Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.
 * @member {Boolean} transient_environment
 * @default false
 */

InlineObject62.prototype['transient_environment'] = false;
var _default = InlineObject62;
exports["default"] = _default;