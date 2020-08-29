"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProjectPermissions = _interopRequireDefault(require("./ProjectPermissions"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Project model module.
 * @module model/Project
 * @version 0.0.5
 */
var Project = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Project</code>.
   * Projects are a way to organize columns and cards of work.
   * @alias module:model/Project
   * @param body {String} Body of the project
   * @param columnsUrl {String} 
   * @param createdAt {Date} 
   * @param creator {module:model/SimpleUser} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param name {String} Name of the project
   * @param nodeId {String} 
   * @param _number {Number} 
   * @param ownerUrl {String} 
   * @param state {String} State of the project; either 'open' or 'closed'
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function Project(body, columnsUrl, createdAt, creator, htmlUrl, id, name, nodeId, _number, ownerUrl, state, updatedAt, url) {
    _classCallCheck(this, Project);

    Project.initialize(this, body, columnsUrl, createdAt, creator, htmlUrl, id, name, nodeId, _number, ownerUrl, state, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Project, null, [{
    key: "initialize",
    value: function initialize(obj, body, columnsUrl, createdAt, creator, htmlUrl, id, name, nodeId, _number, ownerUrl, state, updatedAt, url) {
      obj['body'] = body;
      obj['columns_url'] = columnsUrl;
      obj['created_at'] = createdAt;
      obj['creator'] = creator;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['number'] = _number;
      obj['owner_url'] = ownerUrl;
      obj['state'] = state;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Project();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('cards_url')) {
          obj['cards_url'] = _ApiClient["default"].convertToType(data['cards_url'], 'String');
        }

        if (data.hasOwnProperty('columns_url')) {
          obj['columns_url'] = _ApiClient["default"].convertToType(data['columns_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _ApiClient["default"].convertToType(data['creator'], _SimpleUser["default"]);
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

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('organization_permission')) {
          obj['organization_permission'] = _ApiClient["default"].convertToType(data['organization_permission'], 'String');
        }

        if (data.hasOwnProperty('owner_url')) {
          obj['owner_url'] = _ApiClient["default"].convertToType(data['owner_url'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ProjectPermissions["default"].constructFromObject(data['permissions']);
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
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

  return Project;
}();
/**
 * Body of the project
 * @member {String} body
 */


Project.prototype['body'] = undefined;
/**
 * @member {String} cards_url
 */

Project.prototype['cards_url'] = undefined;
/**
 * @member {String} columns_url
 */

Project.prototype['columns_url'] = undefined;
/**
 * @member {Date} created_at
 */

Project.prototype['created_at'] = undefined;
/**
 * @member {module:model/SimpleUser} creator
 */

Project.prototype['creator'] = undefined;
/**
 * @member {String} html_url
 */

Project.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Project.prototype['id'] = undefined;
/**
 * Name of the project
 * @member {String} name
 */

Project.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Project.prototype['node_id'] = undefined;
/**
 * @member {Number} number
 */

Project.prototype['number'] = undefined;
/**
 * The baseline permission that all organization members have on this project
 * @member {module:model/Project.OrganizationPermissionEnum} organization_permission
 */

Project.prototype['organization_permission'] = undefined;
/**
 * @member {String} owner_url
 */

Project.prototype['owner_url'] = undefined;
/**
 * @member {module:model/ProjectPermissions} permissions
 */

Project.prototype['permissions'] = undefined;
/**
 * Whether or not this project can be seen by everyone.
 * @member {Boolean} private
 */

Project.prototype['private'] = undefined;
/**
 * State of the project; either 'open' or 'closed'
 * @member {String} state
 */

Project.prototype['state'] = undefined;
/**
 * @member {Date} updated_at
 */

Project.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Project.prototype['url'] = undefined;
/**
 * Allowed values for the <code>organization_permission</code> property.
 * @enum {String}
 * @readonly
 */

Project['OrganizationPermissionEnum'] = {
  /**
   * value: "read"
   * @const
   */
  "read": "read",

  /**
   * value: "write"
   * @const
   */
  "write": "write",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
var _default = Project;
exports["default"] = _default;