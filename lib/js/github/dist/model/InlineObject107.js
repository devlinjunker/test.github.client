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
 * The InlineObject107 model module.
 * @module model/InlineObject107
 * @version 0.0.5
 */
var InlineObject107 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject107</code>.
   * @alias module:model/InlineObject107
   */
  function InlineObject107() {
    _classCallCheck(this, InlineObject107);

    InlineObject107.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject107, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject107</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject107} obj Optional instance to populate.
     * @return {module:model/InlineObject107} The populated <code>InlineObject107</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject107();

        if (data.hasOwnProperty('commit_message')) {
          obj['commit_message'] = _ApiClient["default"].convertToType(data['commit_message'], 'String');
        }

        if (data.hasOwnProperty('commit_title')) {
          obj['commit_title'] = _ApiClient["default"].convertToType(data['commit_title'], 'String');
        }

        if (data.hasOwnProperty('merge_method')) {
          obj['merge_method'] = _ApiClient["default"].convertToType(data['merge_method'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject107;
}();
/**
 * Extra detail to append to automatic commit message.
 * @member {String} commit_message
 */


InlineObject107.prototype['commit_message'] = undefined;
/**
 * Title for the automatic commit message.
 * @member {String} commit_title
 */

InlineObject107.prototype['commit_title'] = undefined;
/**
 * Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.
 * @member {module:model/InlineObject107.MergeMethodEnum} merge_method
 */

InlineObject107.prototype['merge_method'] = undefined;
/**
 * SHA that pull request head must match to allow merge.
 * @member {String} sha
 */

InlineObject107.prototype['sha'] = undefined;
/**
 * Allowed values for the <code>merge_method</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject107['MergeMethodEnum'] = {
  /**
   * value: "merge"
   * @const
   */
  "merge": "merge",

  /**
   * value: "squash"
   * @const
   */
  "squash": "squash",

  /**
   * value: "rebase"
   * @const
   */
  "rebase": "rebase"
};
var _default = InlineObject107;
exports["default"] = _default;