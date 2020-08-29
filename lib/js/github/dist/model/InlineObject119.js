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
 * The InlineObject119 model module.
 * @module model/InlineObject119
 * @version 0.0.5
 */
var InlineObject119 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject119</code>.
   * @alias module:model/InlineObject119
   */
  function InlineObject119() {
    _classCallCheck(this, InlineObject119);

    InlineObject119.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject119, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject119</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject119} obj Optional instance to populate.
     * @return {module:model/InlineObject119} The populated <code>InlineObject119</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject119();

        if (data.hasOwnProperty('ignored')) {
          obj['ignored'] = _ApiClient["default"].convertToType(data['ignored'], 'Boolean');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject119;
}();
/**
 * Determines if all notifications should be blocked from this repository.
 * @member {Boolean} ignored
 */


InlineObject119.prototype['ignored'] = undefined;
/**
 * Determines if notifications should be received from this repository.
 * @member {Boolean} subscribed
 */

InlineObject119.prototype['subscribed'] = undefined;
var _default = InlineObject119;
exports["default"] = _default;