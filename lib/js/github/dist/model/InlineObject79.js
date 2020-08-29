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
 * The InlineObject79 model module.
 * @module model/InlineObject79
 * @version 0.0.5
 */
var InlineObject79 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject79</code>.
   * @alias module:model/InlineObject79
   */
  function InlineObject79() {
    _classCallCheck(this, InlineObject79);

    InlineObject79.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject79, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject79</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject79} obj Optional instance to populate.
     * @return {module:model/InlineObject79} The populated <code>InlineObject79</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject79();

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject79;
}();
/**
 * The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.
 * @member {module:model/InlineObject79.PermissionsEnum} permissions
 */


InlineObject79.prototype['permissions'] = undefined;
/**
 * Allowed values for the <code>permissions</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject79['PermissionsEnum'] = {
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
   * value: "maintain"
   * @const
   */
  "maintain": "maintain",

  /**
   * value: "triage"
   * @const
   */
  "triage": "triage",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin"
};
var _default = InlineObject79;
exports["default"] = _default;