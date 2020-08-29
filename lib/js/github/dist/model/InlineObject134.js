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
 * The InlineObject134 model module.
 * @module model/InlineObject134
 * @version 0.0.5
 */
var InlineObject134 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject134</code>.
   * @alias module:model/InlineObject134
   */
  function InlineObject134() {
    _classCallCheck(this, InlineObject134);

    InlineObject134.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject134, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject134</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject134} obj Optional instance to populate.
     * @return {module:model/InlineObject134} The populated <code>InlineObject134</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject134();

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject134;
}();
/**
 * The permission to grant to the team for this project. Can be one of:   \\* `read` - team members can read, but not write to or administer this project.   \\* `write` - team members can read and write, but not administer this project.   \\* `admin` - team members can read, write and administer this project.   Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
 * @member {module:model/InlineObject134.PermissionEnum} permission
 */


InlineObject134.prototype['permission'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject134['PermissionEnum'] = {
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
  "admin": "admin"
};
var _default = InlineObject134;
exports["default"] = _default;