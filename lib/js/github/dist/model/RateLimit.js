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
 * The RateLimit model module.
 * @module model/RateLimit
 * @version 0.0.5
 */
var RateLimit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RateLimit</code>.
   * @alias module:model/RateLimit
   * @param limit {Number} 
   * @param remaining {Number} 
   * @param reset {Number} 
   */
  function RateLimit(limit, remaining, reset) {
    _classCallCheck(this, RateLimit);

    RateLimit.initialize(this, limit, remaining, reset);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RateLimit, null, [{
    key: "initialize",
    value: function initialize(obj, limit, remaining, reset) {
      obj['limit'] = limit;
      obj['remaining'] = remaining;
      obj['reset'] = reset;
    }
    /**
     * Constructs a <code>RateLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimit} obj Optional instance to populate.
     * @return {module:model/RateLimit} The populated <code>RateLimit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RateLimit();

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('remaining')) {
          obj['remaining'] = _ApiClient["default"].convertToType(data['remaining'], 'Number');
        }

        if (data.hasOwnProperty('reset')) {
          obj['reset'] = _ApiClient["default"].convertToType(data['reset'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RateLimit;
}();
/**
 * @member {Number} limit
 */


RateLimit.prototype['limit'] = undefined;
/**
 * @member {Number} remaining
 */

RateLimit.prototype['remaining'] = undefined;
/**
 * @member {Number} reset
 */

RateLimit.prototype['reset'] = undefined;
var _default = RateLimit;
exports["default"] = _default;