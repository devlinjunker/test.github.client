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
 * The InlineObject121 model module.
 * @module model/InlineObject121
 * @version 0.0.5
 */
var InlineObject121 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject121</code>.
   * @alias module:model/InlineObject121
   */
  function InlineObject121() {
    _classCallCheck(this, InlineObject121);

    InlineObject121.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject121, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject121</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject121} obj Optional instance to populate.
     * @return {module:model/InlineObject121} The populated <code>InlineObject121</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject121();

        if (data.hasOwnProperty('new_owner')) {
          obj['new_owner'] = _ApiClient["default"].convertToType(data['new_owner'], 'String');
        }

        if (data.hasOwnProperty('team_ids')) {
          obj['team_ids'] = _ApiClient["default"].convertToType(data['team_ids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject121;
}();
/**
 * **Required:** The username or organization name the repository will be transferred to.
 * @member {String} new_owner
 */


InlineObject121.prototype['new_owner'] = undefined;
/**
 * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
 * @member {Array.<Number>} team_ids
 */

InlineObject121.prototype['team_ids'] = undefined;
var _default = InlineObject121;
exports["default"] = _default;