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
 * The InlineObject140 model module.
 * @module model/InlineObject140
 * @version 0.0.5
 */
var InlineObject140 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject140</code>.
   * @alias module:model/InlineObject140
   * @param key {String} The public SSH key to add to your GitHub account.
   */
  function InlineObject140(key) {
    _classCallCheck(this, InlineObject140);

    InlineObject140.initialize(this, key);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject140, null, [{
    key: "initialize",
    value: function initialize(obj, key) {
      obj['key'] = key;
    }
    /**
     * Constructs a <code>InlineObject140</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject140} obj Optional instance to populate.
     * @return {module:model/InlineObject140} The populated <code>InlineObject140</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject140();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject140;
}();
/**
 * The public SSH key to add to your GitHub account.
 * @member {String} key
 */


InlineObject140.prototype['key'] = undefined;
/**
 * A descriptive name for the new key.
 * @member {String} title
 */

InlineObject140.prototype['title'] = undefined;
var _default = InlineObject140;
exports["default"] = _default;