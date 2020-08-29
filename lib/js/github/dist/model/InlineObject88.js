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
 * The InlineObject88 model module.
 * @module model/InlineObject88
 * @version 0.0.5
 */
var InlineObject88 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject88</code>.
   * @alias module:model/InlineObject88
   * @param labels {Array.<String>} The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
   */
  function InlineObject88(labels) {
    _classCallCheck(this, InlineObject88);

    InlineObject88.initialize(this, labels);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject88, null, [{
    key: "initialize",
    value: function initialize(obj, labels) {
      obj['labels'] = labels;
    }
    /**
     * Constructs a <code>InlineObject88</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject88} obj Optional instance to populate.
     * @return {module:model/InlineObject88} The populated <code>InlineObject88</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject88();

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject88;
}();
/**
 * The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
 * @member {Array.<String>} labels
 */


InlineObject88.prototype['labels'] = undefined;
var _default = InlineObject88;
exports["default"] = _default;