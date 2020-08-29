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
 * The InlineObject94 model module.
 * @module model/InlineObject94
 * @version 0.0.5
 */
var InlineObject94 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject94</code>.
   * @alias module:model/InlineObject94
   * @param base {String} The name of the base branch that the head will be merged into.
   * @param head {String} The head to merge. This can be a branch name or a commit SHA1.
   */
  function InlineObject94(base, head) {
    _classCallCheck(this, InlineObject94);

    InlineObject94.initialize(this, base, head);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject94, null, [{
    key: "initialize",
    value: function initialize(obj, base, head) {
      obj['base'] = base;
      obj['head'] = head;
    }
    /**
     * Constructs a <code>InlineObject94</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject94} obj Optional instance to populate.
     * @return {module:model/InlineObject94} The populated <code>InlineObject94</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject94();

        if (data.hasOwnProperty('base')) {
          obj['base'] = _ApiClient["default"].convertToType(data['base'], 'String');
        }

        if (data.hasOwnProperty('commit_message')) {
          obj['commit_message'] = _ApiClient["default"].convertToType(data['commit_message'], 'String');
        }

        if (data.hasOwnProperty('head')) {
          obj['head'] = _ApiClient["default"].convertToType(data['head'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject94;
}();
/**
 * The name of the base branch that the head will be merged into.
 * @member {String} base
 */


InlineObject94.prototype['base'] = undefined;
/**
 * Commit message to use for the merge commit. If omitted, a default message will be used.
 * @member {String} commit_message
 */

InlineObject94.prototype['commit_message'] = undefined;
/**
 * The head to merge. This can be a branch name or a commit SHA1.
 * @member {String} head
 */

InlineObject94.prototype['head'] = undefined;
var _default = InlineObject94;
exports["default"] = _default;