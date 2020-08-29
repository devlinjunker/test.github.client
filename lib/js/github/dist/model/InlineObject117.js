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
 * The InlineObject117 model module.
 * @module model/InlineObject117
 * @version 0.0.5
 */
var InlineObject117 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject117</code>.
   * @alias module:model/InlineObject117
   */
  function InlineObject117() {
    _classCallCheck(this, InlineObject117);

    InlineObject117.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject117, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject117</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject117} obj Optional instance to populate.
     * @return {module:model/InlineObject117} The populated <code>InlineObject117</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject117();

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

  return InlineObject117;
}();
/**
 * Text describing the contents of the tag.
 * @member {String} body
 */


InlineObject117.prototype['body'] = undefined;
/**
 * `true` makes the release a draft, and `false` publishes the release.
 * @member {Boolean} draft
 */

InlineObject117.prototype['draft'] = undefined;
/**
 * The name of the release.
 * @member {String} name
 */

InlineObject117.prototype['name'] = undefined;
/**
 * `true` to identify the release as a prerelease, `false` to identify the release as a full release.
 * @member {Boolean} prerelease
 */

InlineObject117.prototype['prerelease'] = undefined;
/**
 * The name of the tag.
 * @member {String} tag_name
 */

InlineObject117.prototype['tag_name'] = undefined;
/**
 * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
 * @member {String} target_commitish
 */

InlineObject117.prototype['target_commitish'] = undefined;
var _default = InlineObject117;
exports["default"] = _default;