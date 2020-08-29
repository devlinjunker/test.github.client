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
 * The Traffic model module.
 * @module model/Traffic
 * @version 0.0.5
 */
var Traffic = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Traffic</code>.
   * @alias module:model/Traffic
   * @param count {Number} 
   * @param timestamp {Date} 
   * @param uniques {Number} 
   */
  function Traffic(count, timestamp, uniques) {
    _classCallCheck(this, Traffic);

    Traffic.initialize(this, count, timestamp, uniques);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Traffic, null, [{
    key: "initialize",
    value: function initialize(obj, count, timestamp, uniques) {
      obj['count'] = count;
      obj['timestamp'] = timestamp;
      obj['uniques'] = uniques;
    }
    /**
     * Constructs a <code>Traffic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Traffic} obj Optional instance to populate.
     * @return {module:model/Traffic} The populated <code>Traffic</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Traffic();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Date');
        }

        if (data.hasOwnProperty('uniques')) {
          obj['uniques'] = _ApiClient["default"].convertToType(data['uniques'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Traffic;
}();
/**
 * @member {Number} count
 */


Traffic.prototype['count'] = undefined;
/**
 * @member {Date} timestamp
 */

Traffic.prototype['timestamp'] = undefined;
/**
 * @member {Number} uniques
 */

Traffic.prototype['uniques'] = undefined;
var _default = Traffic;
exports["default"] = _default;