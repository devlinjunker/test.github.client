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
 * The Deployment model module.
 * @module model/Deployment
 * @version 0.0.5
 */
var Deployment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Deployment</code>.
   * A request for a specific ref(branch,sha,tag) to be deployed
   * @alias module:model/Deployment
   * @param createdAt {Date} 
   * @param creator {module:model/SimpleUser} 
   * @param description {String} 
   * @param environment {String} Name for the target deployment environment.
   * @param id {Number} Unique identifier of the deployment
   * @param nodeId {String} 
   * @param payload {Object} 
   * @param ref {String} The ref to deploy. This can be a branch, tag, or sha.
   * @param repositoryUrl {String} 
   * @param sha {String} 
   * @param statusesUrl {String} 
   * @param task {String} Parameter to specify a task to execute
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function Deployment(createdAt, creator, description, environment, id, nodeId, payload, ref, repositoryUrl, sha, statusesUrl, task, updatedAt, url) {
    _classCallCheck(this, Deployment);

    Deployment.initialize(this, createdAt, creator, description, environment, id, nodeId, payload, ref, repositoryUrl, sha, statusesUrl, task, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Deployment, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, creator, description, environment, id, nodeId, payload, ref, repositoryUrl, sha, statusesUrl, task, updatedAt, url) {
      obj['created_at'] = createdAt;
      obj['creator'] = creator;
      obj['description'] = description;
      obj['environment'] = environment;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['payload'] = payload;
      obj['ref'] = ref;
      obj['repository_url'] = repositoryUrl;
      obj['sha'] = sha;
      obj['statuses_url'] = statusesUrl;
      obj['task'] = task;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Deployment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deployment} obj Optional instance to populate.
     * @return {module:model/Deployment} The populated <code>Deployment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Deployment();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _ApiClient["default"].convertToType(data['creator'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('original_environment')) {
          obj['original_environment'] = _ApiClient["default"].convertToType(data['original_environment'], 'String');
        }

        if (data.hasOwnProperty('payload')) {
          obj['payload'] = _ApiClient["default"].convertToType(data['payload'], Object);
        }

        if (data.hasOwnProperty('performed_via_github_app')) {
          obj['performed_via_github_app'] = _ApiClient["default"].convertToType(data['performed_via_github_app'], _Integration["default"]);
        }

        if (data.hasOwnProperty('production_environment')) {
          obj['production_environment'] = _ApiClient["default"].convertToType(data['production_environment'], 'Boolean');
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('repository_url')) {
          obj['repository_url'] = _ApiClient["default"].convertToType(data['repository_url'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('statuses_url')) {
          obj['statuses_url'] = _ApiClient["default"].convertToType(data['statuses_url'], 'String');
        }

        if (data.hasOwnProperty('task')) {
          obj['task'] = _ApiClient["default"].convertToType(data['task'], 'String');
        }

        if (data.hasOwnProperty('transient_environment')) {
          obj['transient_environment'] = _ApiClient["default"].convertToType(data['transient_environment'], 'Boolean');
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

  return Deployment;
}();
/**
 * @member {Date} created_at
 */


Deployment.prototype['created_at'] = undefined;
/**
 * @member {module:model/SimpleUser} creator
 */

Deployment.prototype['creator'] = undefined;
/**
 * @member {String} description
 */

Deployment.prototype['description'] = undefined;
/**
 * Name for the target deployment environment.
 * @member {String} environment
 */

Deployment.prototype['environment'] = undefined;
/**
 * Unique identifier of the deployment
 * @member {Number} id
 */

Deployment.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

Deployment.prototype['node_id'] = undefined;
/**
 * @member {String} original_environment
 */

Deployment.prototype['original_environment'] = undefined;
/**
 * @member {Object} payload
 */

Deployment.prototype['payload'] = undefined;
/**
 * @member {module:model/Integration} performed_via_github_app
 */

Deployment.prototype['performed_via_github_app'] = undefined;
/**
 * Specifies if the given environment is one that end-users directly interact with. Default: false.
 * @member {Boolean} production_environment
 */

Deployment.prototype['production_environment'] = undefined;
/**
 * The ref to deploy. This can be a branch, tag, or sha.
 * @member {String} ref
 */

Deployment.prototype['ref'] = undefined;
/**
 * @member {String} repository_url
 */

Deployment.prototype['repository_url'] = undefined;
/**
 * @member {String} sha
 */

Deployment.prototype['sha'] = undefined;
/**
 * @member {String} statuses_url
 */

Deployment.prototype['statuses_url'] = undefined;
/**
 * Parameter to specify a task to execute
 * @member {String} task
 */

Deployment.prototype['task'] = undefined;
/**
 * Specifies if the given environment is will no longer exist at some point in hte future. Default: false.
 * @member {Boolean} transient_environment
 */

Deployment.prototype['transient_environment'] = undefined;
/**
 * @member {Date} updated_at
 */

Deployment.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Deployment.prototype['url'] = undefined;
var _default = Deployment;
exports["default"] = _default;