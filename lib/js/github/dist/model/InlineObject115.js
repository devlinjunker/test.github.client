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
 * The InlineObject115 model module.
 * @module model/InlineObject115
 * @version 0.0.5
 */
var InlineObject115 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject115</code>.
   * @alias module:model/InlineObject115
   * @param tagName {String} The name of the tag.
   */
  function InlineObject115(tagName) {
    _classCallCheck(this, InlineObject115);

    InlineObject115.initialize(this, tagName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject115, null, [{
    key: "initialize",
    value: function initialize(obj, tagName) {
      obj['tag_name'] = tagName;
    }
    /**
     * Constructs a <code>InlineObject115</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject115} obj Optional instance to populate.
     * @return {module:model/InlineObject115} The populated <code>InlineObject115</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject115();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('prerelease')) {
          obj['prerelease'] = _ApiClient["default"].convertToType(data['prerelease'], 'Boolean');
        }

        if (data.hasOwnProperty('tag_name')) {
          obj['tag_name'] = _ApiClient["default"].convertToType(data['tag_name'], 'String');
        }

        if (data.hasOwnProperty('target_commitish')) {
          obj['target_commitish'] = _ApiClient["default"].convertToType(data['target_commitish'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject115;
}();
/**
 * Text describing the contents of the tag.
 * @member {String} body
 */


InlineObject115.prototype['body'] = undefined;
/**
 * `true` to create a draft (unpublished) release, `false` to create a published one.
 * @member {Boolean} draft
 * @default false
 */

InlineObject115.prototype['draft'] = false;
/**
 * The name of the release.
 * @member {String} name
 */

InlineObject115.prototype['name'] = undefined;
/**
 * `true` to identify the release as a prerelease. `false` to identify the release as a full release.
 * @member {Boolean} prerelease
 * @default false
 */

InlineObject115.prototype['prerelease'] = false;
/**
 * The name of the tag.
 * @member {String} tag_name
 */

InlineObject115.prototype['tag_name'] = undefined;
/**
 * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
 * @member {String} target_commitish
 */

InlineObject115.prototype['target_commitish'] = undefined;
var _default = InlineObject115;
exports["default"] = _default;