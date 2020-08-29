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
 * The InlineObject141 model module.
 * @module model/InlineObject141
 * @version 0.0.5
 */
var InlineObject141 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject141</code>.
   * @alias module:model/InlineObject141
   * @param state {module:model/InlineObject141.StateEnum} The state that the membership should be in. Only `\"active\"` will be accepted.
   */
  function InlineObject141(state) {
    _classCallCheck(this, InlineObject141);

    InlineObject141.initialize(this, state);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject141, null, [{
    key: "initialize",
    value: function initialize(obj, state) {
      obj['state'] = state;
    }
    /**
     * Constructs a <code>InlineObject141</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject141} obj Optional instance to populate.
     * @return {module:model/InlineObject141} The populated <code>InlineObject141</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject141();

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject141;
}();
/**
 * The state that the membership should be in. Only `\"active\"` will be accepted.
 * @member {module:model/InlineObject141.StateEnum} state
 */


InlineObject141.prototype['state'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject141['StateEnum'] = {
  /**
   * value: "active"
   * @const
   */
  "active": "active"
};
var _default = InlineObject141;
exports["default"] = _default;