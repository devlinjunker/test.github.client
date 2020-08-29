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
 * The InlineObject23 model module.
 * @module model/InlineObject23
 * @version 0.0.5
 */
var InlineObject23 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject23</code>.
   * @alias module:model/InlineObject23
   */
  function InlineObject23() {
    _classCallCheck(this, InlineObject23);

    InlineObject23.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject23, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject23</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject23} obj Optional instance to populate.
     * @return {module:model/InlineObject23} The populated <code>InlineObject23</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject23();

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject23;
}();
/**
 * The role to give the user in the organization. Can be one of:   \\* `admin` - The user will become an owner of the organization.   \\* `member` - The user will become a non-owner member of the organization.
 * @member {module:model/InlineObject23.RoleEnum} role
 * @default 'member'
 */


InlineObject23.prototype['role'] = 'member';
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject23['RoleEnum'] = {
  /**
   * value: "admin"
   * @const
   */
  "admin": "admin",

  /**
   * value: "member"
   * @const
   */
  "member": "member"
};
var _default = InlineObject23;
exports["default"] = _default;