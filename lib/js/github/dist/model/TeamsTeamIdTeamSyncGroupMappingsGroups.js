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
 * The TeamsTeamIdTeamSyncGroupMappingsGroups model module.
 * @module model/TeamsTeamIdTeamSyncGroupMappingsGroups
 * @version 0.0.5
 */
var TeamsTeamIdTeamSyncGroupMappingsGroups = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamsTeamIdTeamSyncGroupMappingsGroups</code>.
   * @alias module:model/TeamsTeamIdTeamSyncGroupMappingsGroups
   * @param groupDescription {String} Description of the IdP group.
   * @param groupId {String} ID of the IdP group.
   * @param groupName {String} Name of the IdP group.
   */
  function TeamsTeamIdTeamSyncGroupMappingsGroups(groupDescription, groupId, groupName) {
    _classCallCheck(this, TeamsTeamIdTeamSyncGroupMappingsGroups);

    TeamsTeamIdTeamSyncGroupMappingsGroups.initialize(this, groupDescription, groupId, groupName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamsTeamIdTeamSyncGroupMappingsGroups, null, [{
    key: "initialize",
    value: function initialize(obj, groupDescription, groupId, groupName) {
      obj['group_description'] = groupDescription;
      obj['group_id'] = groupId;
      obj['group_name'] = groupName;
    }
    /**
     * Constructs a <code>TeamsTeamIdTeamSyncGroupMappingsGroups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamsTeamIdTeamSyncGroupMappingsGroups} obj Optional instance to populate.
     * @return {module:model/TeamsTeamIdTeamSyncGroupMappingsGroups} The populated <code>TeamsTeamIdTeamSyncGroupMappingsGroups</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamsTeamIdTeamSyncGroupMappingsGroups();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('group_description')) {
          obj['group_description'] = _ApiClient["default"].convertToType(data['group_description'], 'String');
        }

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient["default"].convertToType(data['group_id'], 'String');
        }

        if (data.hasOwnProperty('group_name')) {
          obj['group_name'] = _ApiClient["default"].convertToType(data['group_name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TeamsTeamIdTeamSyncGroupMappingsGroups;
}();
/**
 * @member {String} description
 */


TeamsTeamIdTeamSyncGroupMappingsGroups.prototype['description'] = undefined;
/**
 * Description of the IdP group.
 * @member {String} group_description
 */

TeamsTeamIdTeamSyncGroupMappingsGroups.prototype['group_description'] = undefined;
/**
 * ID of the IdP group.
 * @member {String} group_id
 */

TeamsTeamIdTeamSyncGroupMappingsGroups.prototype['group_id'] = undefined;
/**
 * Name of the IdP group.
 * @member {String} group_name
 */

TeamsTeamIdTeamSyncGroupMappingsGroups.prototype['group_name'] = undefined;
/**
 * @member {String} id
 */

TeamsTeamIdTeamSyncGroupMappingsGroups.prototype['id'] = undefined;
/**
 * @member {String} name
 */

TeamsTeamIdTeamSyncGroupMappingsGroups.prototype['name'] = undefined;
var _default = TeamsTeamIdTeamSyncGroupMappingsGroups;
exports["default"] = _default;