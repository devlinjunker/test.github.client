"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoGitTagsTagger = _interopRequireDefault(require("./ReposOwnerRepoGitTagsTagger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject70 model module.
 * @module model/InlineObject70
 * @version 0.0.5
 */
var InlineObject70 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject70</code>.
   * @alias module:model/InlineObject70
   * @param message {String} The tag message.
   * @param _object {String} The SHA of the git object this is tagging.
   * @param tag {String} The tag's name. This is typically a version (e.g., \"v0.0.1\").
   * @param type {module:model/InlineObject70.TypeEnum} The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
   */
  function InlineObject70(message, _object, tag, type) {
    _classCallCheck(this, InlineObject70);

    InlineObject70.initialize(this, message, _object, tag, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject70, null, [{
    key: "initialize",
    value: function initialize(obj, message, _object, tag, type) {
      obj['message'] = message;
      obj['object'] = _object;
      obj['tag'] = tag;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineObject70</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject70} obj Optional instance to populate.
     * @return {module:model/InlineObject70} The populated <code>InlineObject70</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject70();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = _ApiClient["default"].convertToType(data['object'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('tagger')) {
          obj['tagger'] = _ReposOwnerRepoGitTagsTagger["default"].constructFromObject(data['tagger']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject70;
}();
/**
 * The tag message.
 * @member {String} message
 */


InlineObject70.prototype['message'] = undefined;
/**
 * The SHA of the git object this is tagging.
 * @member {String} object
 */

InlineObject70.prototype['object'] = undefined;
/**
 * The tag's name. This is typically a version (e.g., \"v0.0.1\").
 * @member {String} tag
 */

InlineObject70.prototype['tag'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoGitTagsTagger} tagger
 */

InlineObject70.prototype['tagger'] = undefined;
/**
 * The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
 * @member {module:model/InlineObject70.TypeEnum} type
 */

InlineObject70.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject70['TypeEnum'] = {
  /**
   * value: "commit"
   * @const
   */
  "commit": "commit",

  /**
   * value: "tree"
   * @const
   */
  "tree": "tree",

  /**
   * value: "blob"
   * @const
   */
  "blob": "blob"
};
var _default = InlineObject70;
exports["default"] = _default;