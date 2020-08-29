"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

var _TeamProjectPermissions = _interopRequireDefault(require("./TeamProjectPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TeamProject model module.
 * @module model/TeamProject
 * @version 0.0.5
 */
var TeamProject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamProject</code>.
   * A team&#39;s access to a project.
   * @alias module:model/TeamProject
   */
  function TeamProject() {
    _classCallCheck(this, TeamProject);

    TeamProject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamProject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TeamProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamProject} obj Optional instance to populate.
     * @return {module:model/TeamProject} The populated <code>TeamProject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamProject();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('columns_url')) {
          obj['columns_url'] = _ApiClient["default"].convertToType(data['columns_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _SimpleUser["default"].constructFromObject(data['creator']);
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
          obj['permissions'] = _TeamProjectPermissions["default"].constructFromObject(data['permissions']);
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TeamProject;
}();
/**
 * @member {String} body
 */


TeamProject.prototype['body'] = undefined;
/**
 * @member {String} columns_url
 */

TeamProject.prototype['columns_url'] = undefined;
/**
 * @member {String} created_at
 */

TeamProject.prototype['created_at'] = undefined;
/**
 * @member {module:model/SimpleUser} creator
 */

TeamProject.prototype['creator'] = undefined;
/**
 * @member {String} html_url
 */

TeamProject.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

TeamProject.prototype['id'] = undefined;
/**
 * @member {String} name
 */

TeamProject.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

TeamProject.prototype['node_id'] = undefined;
/**
 * @member {Number} number
 */

TeamProject.prototype['number'] = undefined;
/**
 * @member {String} organization_permission
 */

TeamProject.prototype['organization_permission'] = undefined;
/**
 * @member {String} owner_url
 */

TeamProject.prototype['owner_url'] = undefined;
/**
 * @member {module:model/TeamProjectPermissions} permissions
 */

TeamProject.prototype['permissions'] = undefined;
/**
 * @member {Boolean} private
 */

TeamProject.prototype['private'] = undefined;
/**
 * @member {String} state
 */

TeamProject.prototype['state'] = undefined;
/**
 * @member {String} updated_at
 */

TeamProject.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

TeamProject.prototype['url'] = undefined;
var _default = TeamProject;
exports["default"] = _default;