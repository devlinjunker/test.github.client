"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TeamsTeamIdTeamSyncGroupMappingsGroups = _interopRequireDefault(require("./TeamsTeamIdTeamSyncGroupMappingsGroups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject136 model module.
 * @module model/InlineObject136
 * @version 0.0.5
 */
var InlineObject136 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject136</code>.
   * @alias module:model/InlineObject136
   * @param groups {Array.<module:model/TeamsTeamIdTeamSyncGroupMappingsGroups>} The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
   */
  function InlineObject136(groups) {
    _classCallCheck(this, InlineObject136);

    InlineObject136.initialize(this, groups);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject136, null, [{
    key: "initialize",
    value: function initialize(obj, groups) {
      obj['groups'] = groups;
    }
    /**
     * Constructs a <code>InlineObject136</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject136} obj Optional instance to populate.
     * @return {module:model/InlineObject136} The populated <code>InlineObject136</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject136();

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_TeamsTeamIdTeamSyncGroupMappingsGroups["default"]]);
        }

        if (data.hasOwnProperty('synced_at')) {
          obj['synced_at'] = _ApiClient["default"].convertToType(data['synced_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject136;
}();
/**
 * The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
 * @member {Array.<module:model/TeamsTeamIdTeamSyncGroupMappingsGroups>} groups
 */


InlineObject136.prototype['groups'] = undefined;
/**
 * @member {String} synced_at
 */

InlineObject136.prototype['synced_at'] = undefined;
var _default = InlineObject136;
exports["default"] = _default;