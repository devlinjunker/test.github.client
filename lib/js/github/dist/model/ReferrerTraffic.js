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
 * The ReferrerTraffic model module.
 * @module model/ReferrerTraffic
 * @version 0.0.5
 */
var ReferrerTraffic = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReferrerTraffic</code>.
   * Referrer Traffic
   * @alias module:model/ReferrerTraffic
   * @param count {Number} 
   * @param referrer {String} 
   * @param uniques {Number} 
   */
  function ReferrerTraffic(count, referrer, uniques) {
    _classCallCheck(this, ReferrerTraffic);

    ReferrerTraffic.initialize(this, count, referrer, uniques);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReferrerTraffic, null, [{
    key: "initialize",
    value: function initialize(obj, count, referrer, uniques) {
      obj['count'] = count;
      obj['referrer'] = referrer;
      obj['uniques'] = uniques;
    }
    /**
     * Constructs a <code>ReferrerTraffic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferrerTraffic} obj Optional instance to populate.
     * @return {module:model/ReferrerTraffic} The populated <code>ReferrerTraffic</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReferrerTraffic();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('referrer')) {
          obj['referrer'] = _ApiClient["default"].convertToType(data['referrer'], 'String');
        }

        if (data.hasOwnProperty('uniques')) {
          obj['uniques'] = _ApiClient["default"].convertToType(data['uniques'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ReferrerTraffic;
}();
/**
 * @member {Number} count
 */


ReferrerTraffic.prototype['count'] = undefined;
/**
 * @member {String} referrer
 */

ReferrerTraffic.prototype['referrer'] = undefined;
/**
 * @member {Number} uniques
 */

ReferrerTraffic.prototype['uniques'] = undefined;
var _default = ReferrerTraffic;
exports["default"] = _default;