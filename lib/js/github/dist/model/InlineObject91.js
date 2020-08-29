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
 * The InlineObject91 model module.
 * @module model/InlineObject91
 * @version 0.0.5
 */
var InlineObject91 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject91</code>.
   * @alias module:model/InlineObject91
   * @param key {String} The contents of the key.
   */
  function InlineObject91(key) {
    _classCallCheck(this, InlineObject91);

    InlineObject91.initialize(this, key);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject91, null, [{
    key: "initialize",
    value: function initialize(obj, key) {
      obj['key'] = key;
    }
    /**
     * Constructs a <code>InlineObject91</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject91} obj Optional instance to populate.
     * @return {module:model/InlineObject91} The populated <code>InlineObject91</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject91();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('read_only')) {
          obj['read_only'] = _ApiClient["default"].convertToType(data['read_only'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject91;
}();
/**
 * The contents of the key.
 * @member {String} key
 */


InlineObject91.prototype['key'] = undefined;
/**
 * If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.      Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see \"[Repository permission levels for an organization](https://help.github.com/articles/repository-permission-levels-for-an-organization/)\" and \"[Permission levels for a user account repository](https://help.github.com/articles/permission-levels-for-a-user-account-repository/).\"
 * @member {Boolean} read_only
 */

InlineObject91.prototype['read_only'] = undefined;
/**
 * A name for the key.
 * @member {String} title
 */

InlineObject91.prototype['title'] = undefined;
var _default = InlineObject91;
exports["default"] = _default;