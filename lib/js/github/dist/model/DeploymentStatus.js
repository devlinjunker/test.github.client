"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Integration = _interopRequireDefault(require("./Integration"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStatus model module.
 * @module model/DeploymentStatus
 * @version 0.0.5
 */
var DeploymentStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentStatus</code>.
   * The status of a deployment.
   * @alias module:model/DeploymentStatus
   * @param createdAt {Date} 
   * @param creator {module:model/SimpleUser} 
   * @param deploymentUrl {String} 
   * @param description {String} A short description of the status.
   * @param id {Number} 
   * @param nodeId {String} 
   * @param repositoryUrl {String} 
   * @param state {module:model/DeploymentStatus.StateEnum} The state of the status.
   * @param targetUrl {String} Deprecated: the URL to associate with this status.
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function DeploymentStatus(createdAt, creator, deploymentUrl, description, id, nodeId, repositoryUrl, state, targetUrl, updatedAt, url) {
    _classCallCheck(this, DeploymentStatus);

    DeploymentStatus.initialize(this, createdAt, creator, deploymentUrl, description, id, nodeId, repositoryUrl, state, targetUrl, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStatus, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, creator, deploymentUrl, description, id, nodeId, repositoryUrl, state, targetUrl, updatedAt, url) {
      obj['created_at'] = createdAt;
      obj['creator'] = creator;
      obj['deployment_url'] = deploymentUrl;
      obj['description'] = description;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['repository_url'] = repositoryUrl;
      obj['state'] = state;
      obj['target_url'] = targetUrl;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>DeploymentStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStatus} obj Optional instance to populate.
     * @return {module:model/DeploymentStatus} The populated <code>DeploymentStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStatus();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _ApiClient["default"].convertToType(data['creator'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('deployment_url')) {
          obj['deployment_url'] = _ApiClient["default"].convertToType(data['deployment_url'], 'String');
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

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('log_url')) {
          obj['log_url'] = _ApiClient["default"].convertToType(data['log_url'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('performed_via_github_app')) {
          obj['performed_via_github_app'] = _ApiClient["default"].convertToType(data['performed_via_github_app'], _Integration["default"]);
        }

        if (data.hasOwnProperty('repository_url')) {
          obj['repository_url'] = _ApiClient["default"].convertToType(data['repository_url'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('target_url')) {
          obj['target_url'] = _ApiClient["default"].convertToType(data['target_url'], 'String');
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

  return DeploymentStatus;
}();
/**
 * @member {Date} created_at
 */


DeploymentStatus.prototype['created_at'] = undefined;
/**
 * @member {module:model/SimpleUser} creator
 */

DeploymentStatus.prototype['creator'] = undefined;
/**
 * @member {String} deployment_url
 */

DeploymentStatus.prototype['deployment_url'] = undefined;
/**
 * A short description of the status.
 * @member {String} description
 * @default ''
 */

DeploymentStatus.prototype['description'] = '';
/**
 * The environment of the deployment that the status is for.
 * @member {String} environment
 * @default ''
 */

DeploymentStatus.prototype['environment'] = '';
/**
 * The URL for accessing your environment.
 * @member {String} environment_url
 * @default ''
 */

DeploymentStatus.prototype['environment_url'] = '';
/**
 * @member {Number} id
 */

DeploymentStatus.prototype['id'] = undefined;
/**
 * The URL to associate with this status.
 * @member {String} log_url
 * @default ''
 */

DeploymentStatus.prototype['log_url'] = '';
/**
 * @member {String} node_id
 */

DeploymentStatus.prototype['node_id'] = undefined;
/**
 * @member {module:model/Integration} performed_via_github_app
 */

DeploymentStatus.prototype['performed_via_github_app'] = undefined;
/**
 * @member {String} repository_url
 */

DeploymentStatus.prototype['repository_url'] = undefined;
/**
 * The state of the status.
 * @member {module:model/DeploymentStatus.StateEnum} state
 */

DeploymentStatus.prototype['state'] = undefined;
/**
 * Deprecated: the URL to associate with this status.
 * @member {String} target_url
 * @default ''
 */

DeploymentStatus.prototype['target_url'] = '';
/**
 * @member {Date} updated_at
 */

DeploymentStatus.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

DeploymentStatus.prototype['url'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStatus['StateEnum'] = {
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
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "success"
   * @const
   */
  "success": "success",

  /**
   * value: "queued"
   * @const
   */
  "queued": "queued",

  /**
   * value: "in_progress"
   * @const
   */
  "in_progress": "in_progress"
};
var _default = DeploymentStatus;
exports["default"] = _default;