"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Traffic = _interopRequireDefault(require("./Traffic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CloneTraffic model module.
 * @module model/CloneTraffic
 * @version 0.0.5
 */
var CloneTraffic = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloneTraffic</code>.
   * Clone Traffic
   * @alias module:model/CloneTraffic
   * @param clones {Array.<module:model/Traffic>} 
   * @param count {Number} 
   * @param uniques {Number} 
   */
  function CloneTraffic(clones, count, uniques) {
    _classCallCheck(this, CloneTraffic);

    CloneTraffic.initialize(this, clones, count, uniques);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloneTraffic, null, [{
    key: "initialize",
    value: function initialize(obj, clones, count, uniques) {
      obj['clones'] = clones;
      obj['count'] = count;
      obj['uniques'] = uniques;
    }
    /**
     * Constructs a <code>CloneTraffic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloneTraffic} obj Optional instance to populate.
     * @return {module:model/CloneTraffic} The populated <code>CloneTraffic</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloneTraffic();

        if (data.hasOwnProperty('clones')) {
          obj['clones'] = _ApiClient["default"].convertToType(data['clones'], [_Traffic["default"]]);
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('uniques')) {
          obj['uniques'] = _ApiClient["default"].convertToType(data['uniques'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CloneTraffic;
}();
/**
 * @member {Array.<module:model/Traffic>} clones
 */


CloneTraffic.prototype['clones'] = undefined;
/**
 * @member {Number} count
 */

CloneTraffic.prototype['count'] = undefined;
/**
 * @member {Number} uniques
 */

CloneTraffic.prototype['uniques'] = undefined;
var _default = CloneTraffic;
exports["default"] = _default;