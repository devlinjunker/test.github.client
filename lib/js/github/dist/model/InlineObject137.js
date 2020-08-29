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
 * The InlineObject137 model module.
 * @module model/InlineObject137
 * @version 0.0.5
 */
var InlineObject137 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject137</code>.
   * @alias module:model/InlineObject137
   */
  function InlineObject137() {
    _classCallCheck(this, InlineObject137);

    InlineObject137.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject137, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject137</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject137} obj Optional instance to populate.
     * @return {module:model/InlineObject137} The populated <code>InlineObject137</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject137();

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('blog')) {
          obj['blog'] = _ApiClient["default"].convertToType(data['blog'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('hireable')) {
          obj['hireable'] = _ApiClient["default"].convertToType(data['hireable'], 'Boolean');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('twitter_username')) {
          obj['twitter_username'] = _ApiClient["default"].convertToType(data['twitter_username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject137;
}();
/**
 * The new short biography of the user.
 * @member {String} bio
 */


InlineObject137.prototype['bio'] = undefined;
/**
 * The new blog URL of the user.
 * @member {String} blog
 */

InlineObject137.prototype['blog'] = undefined;
/**
 * The new company of the user.
 * @member {String} company
 */

InlineObject137.prototype['company'] = undefined;
/**
 * The publicly visible email address of the user.
 * @member {String} email
 */

InlineObject137.prototype['email'] = undefined;
/**
 * The new hiring availability of the user.
 * @member {Boolean} hireable
 */

InlineObject137.prototype['hireable'] = undefined;
/**
 * The new location of the user.
 * @member {String} location
 */

InlineObject137.prototype['location'] = undefined;
/**
 * The new name of the user.
 * @member {String} name
 */

InlineObject137.prototype['name'] = undefined;
/**
 * The new Twitter username of the user.
 * @member {String} twitter_username
 */

InlineObject137.prototype['twitter_username'] = undefined;
var _default = InlineObject137;
exports["default"] = _default;