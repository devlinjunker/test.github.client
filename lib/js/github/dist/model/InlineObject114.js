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
 * The InlineObject114 model module.
 * @module model/InlineObject114
 * @version 0.0.5
 */
var InlineObject114 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject114</code>.
   * @alias module:model/InlineObject114
   */
  function InlineObject114() {
    _classCallCheck(this, InlineObject114);

    InlineObject114.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject114, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject114</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject114} obj Optional instance to populate.
     * @return {module:model/InlineObject114} The populated <code>InlineObject114</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject114();

        if (data.hasOwnProperty('expected_head_sha')) {
          obj['expected_head_sha'] = _ApiClient["default"].convertToType(data['expected_head_sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject114;
}();
/**
 * The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the \"[List commits](https://developer.github.com/v3/repos/commits/#list-commits)\" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.
 * @member {String} expected_head_sha
 */


InlineObject114.prototype['expected_head_sha'] = undefined;
var _default = InlineObject114;
exports["default"] = _default;