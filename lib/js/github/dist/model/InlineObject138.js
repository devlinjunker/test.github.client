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
 * The InlineObject138 model module.
 * @module model/InlineObject138
 * @version 0.0.5
 */
var InlineObject138 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject138</code>.
   * @alias module:model/InlineObject138
   * @param email {String} An email address associated with the GitHub user account to manage.
   * @param visibility {module:model/InlineObject138.VisibilityEnum} Denotes whether an email is publically visible.
   */
  function InlineObject138(email, visibility) {
    _classCallCheck(this, InlineObject138);

    InlineObject138.initialize(this, email, visibility);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject138, null, [{
    key: "initialize",
    value: function initialize(obj, email, visibility) {
      obj['email'] = email;
      obj['visibility'] = visibility;
    }
    /**
     * Constructs a <code>InlineObject138</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject138} obj Optional instance to populate.
     * @return {module:model/InlineObject138} The populated <code>InlineObject138</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject138();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject138;
}();
/**
 * An email address associated with the GitHub user account to manage.
 * @member {String} email
 */


InlineObject138.prototype['email'] = undefined;
/**
 * Denotes whether an email is publically visible.
 * @member {module:model/InlineObject138.VisibilityEnum} visibility
 */

InlineObject138.prototype['visibility'] = undefined;
/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject138['VisibilityEnum'] = {
  /**
   * value: "public"
   * @const
   */
  "public": "public",

  /**
   * value: "private"
   * @const
   */
  "private": "private"
};
var _default = InlineObject138;
exports["default"] = _default;