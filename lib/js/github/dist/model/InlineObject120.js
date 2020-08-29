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
 * The InlineObject120 model module.
 * @module model/InlineObject120
 * @version 0.0.5
 */
var InlineObject120 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject120</code>.
   * @alias module:model/InlineObject120
   * @param names {Array.<String>} An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.
   */
  function InlineObject120(names) {
    _classCallCheck(this, InlineObject120);

    InlineObject120.initialize(this, names);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject120, null, [{
    key: "initialize",
    value: function initialize(obj, names) {
      obj['names'] = names;
    }
    /**
     * Constructs a <code>InlineObject120</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject120} obj Optional instance to populate.
     * @return {module:model/InlineObject120} The populated <code>InlineObject120</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject120();

        if (data.hasOwnProperty('names')) {
          obj['names'] = _ApiClient["default"].convertToType(data['names'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject120;
}();
/**
 * An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.
 * @member {Array.<String>} names
 */


InlineObject120.prototype['names'] = undefined;
var _default = InlineObject120;
exports["default"] = _default;