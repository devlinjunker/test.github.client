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
 * The GroupMappingGroups model module.
 * @module model/GroupMappingGroups
 * @version 0.0.5
 */
var GroupMappingGroups = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupMappingGroups</code>.
   * @alias module:model/GroupMappingGroups
   * @param groupDescription {String} a description of the group
   * @param groupId {String} The ID of the group
   * @param groupName {String} The name of the group
   */
  function GroupMappingGroups(groupDescription, groupId, groupName) {
    _classCallCheck(this, GroupMappingGroups);

    GroupMappingGroups.initialize(this, groupDescription, groupId, groupName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupMappingGroups, null, [{
    key: "initialize",
    value: function initialize(obj, groupDescription, groupId, groupName) {
      obj['group_description'] = groupDescription;
      obj['group_id'] = groupId;
      obj['group_name'] = groupName;
    }
    /**
     * Constructs a <code>GroupMappingGroups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupMappingGroups} obj Optional instance to populate.
     * @return {module:model/GroupMappingGroups} The populated <code>GroupMappingGroups</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupMappingGroups();

        if (data.hasOwnProperty('group_description')) {
          obj['group_description'] = _ApiClient["default"].convertToType(data['group_description'], 'String');
        }

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient["default"].convertToType(data['group_id'], 'String');
        }

        if (data.hasOwnProperty('group_name')) {
          obj['group_name'] = _ApiClient["default"].convertToType(data['group_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GroupMappingGroups;
}();
/**
 * a description of the group
 * @member {String} group_description
 */


GroupMappingGroups.prototype['group_description'] = undefined;
/**
 * The ID of the group
 * @member {String} group_id
 */

GroupMappingGroups.prototype['group_id'] = undefined;
/**
 * The name of the group
 * @member {String} group_name
 */

GroupMappingGroups.prototype['group_name'] = undefined;
var _default = GroupMappingGroups;
exports["default"] = _default;