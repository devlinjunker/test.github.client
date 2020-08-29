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
 * The ViewTraffic model module.
 * @module model/ViewTraffic
 * @version 0.0.5
 */
var ViewTraffic = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewTraffic</code>.
   * View Traffic
   * @alias module:model/ViewTraffic
   * @param count {Number} 
   * @param uniques {Number} 
   * @param views {Array.<module:model/Traffic>} 
   */
  function ViewTraffic(count, uniques, views) {
    _classCallCheck(this, ViewTraffic);

    ViewTraffic.initialize(this, count, uniques, views);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewTraffic, null, [{
    key: "initialize",
    value: function initialize(obj, count, uniques, views) {
      obj['count'] = count;
      obj['uniques'] = uniques;
      obj['views'] = views;
    }
    /**
     * Constructs a <code>ViewTraffic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewTraffic} obj Optional instance to populate.
     * @return {module:model/ViewTraffic} The populated <code>ViewTraffic</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewTraffic();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('uniques')) {
          obj['uniques'] = _ApiClient["default"].convertToType(data['uniques'], 'Number');
        }

        if (data.hasOwnProperty('views')) {
          obj['views'] = _ApiClient["default"].convertToType(data['views'], [_Traffic["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ViewTraffic;
}();
/**
 * @member {Number} count
 */


ViewTraffic.prototype['count'] = undefined;
/**
 * @member {Number} uniques
 */

ViewTraffic.prototype['uniques'] = undefined;
/**
 * @member {Array.<module:model/Traffic>} views
 */

ViewTraffic.prototype['views'] = undefined;
var _default = ViewTraffic;
exports["default"] = _default;