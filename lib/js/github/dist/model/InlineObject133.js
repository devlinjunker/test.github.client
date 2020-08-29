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
 * The InlineObject133 model module.
 * @module model/InlineObject133
 * @version 0.0.5
 */
var InlineObject133 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject133</code>.
   * @alias module:model/InlineObject133
   */
  function InlineObject133() {
    _classCallCheck(this, InlineObject133);

    InlineObject133.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject133, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject133</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject133} obj Optional instance to populate.
     * @return {module:model/InlineObject133} The populated <code>InlineObject133</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject133();

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject133;
}();
/**
 * The role that this user should have in the team. Can be one of:   \\* `member` - a normal member of the team.   \\* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
 * @member {module:model/InlineObject133.RoleEnum} role
 * @default 'member'
 */


InlineObject133.prototype['role'] = 'member';
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject133['RoleEnum'] = {
  /**
   * value: "member"
   * @const
   */
  "member": "member",

  /**
   * value: "maintainer"
   * @const
   */
  "maintainer": "maintainer"
};
var _default = InlineObject133;
exports["default"] = _default;