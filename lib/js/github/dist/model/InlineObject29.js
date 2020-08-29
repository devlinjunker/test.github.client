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
 * The InlineObject29 model module.
 * @module model/InlineObject29
 * @version 0.0.5
 */
var InlineObject29 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject29</code>.
   * @alias module:model/InlineObject29
   * @param body {String} The discussion post's body text.
   * @param title {String} The discussion post's title.
   */
  function InlineObject29(body, title) {
    _classCallCheck(this, InlineObject29);

    InlineObject29.initialize(this, body, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject29, null, [{
    key: "initialize",
    value: function initialize(obj, body, title) {
      obj['body'] = body;
      obj['title'] = title;
    }
    /**
     * Constructs a <code>InlineObject29</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject29} obj Optional instance to populate.
     * @return {module:model/InlineObject29} The populated <code>InlineObject29</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject29();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject29;
}();
/**
 * The discussion post's body text.
 * @member {String} body
 */


InlineObject29.prototype['body'] = undefined;
/**
 * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
 * @member {Boolean} private
 * @default false
 */

InlineObject29.prototype['private'] = false;
/**
 * The discussion post's title.
 * @member {String} title
 */

InlineObject29.prototype['title'] = undefined;
var _default = InlineObject29;
exports["default"] = _default;