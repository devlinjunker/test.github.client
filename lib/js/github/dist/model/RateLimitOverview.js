"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RateLimit = _interopRequireDefault(require("./RateLimit"));

var _RateLimitOverviewResources = _interopRequireDefault(require("./RateLimitOverviewResources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RateLimitOverview model module.
 * @module model/RateLimitOverview
 * @version 0.0.5
 */
var RateLimitOverview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RateLimitOverview</code>.
   * Rate Limit Overview
   * @alias module:model/RateLimitOverview
   * @param rate {module:model/RateLimit} 
   * @param resources {module:model/RateLimitOverviewResources} 
   */
  function RateLimitOverview(rate, resources) {
    _classCallCheck(this, RateLimitOverview);

    RateLimitOverview.initialize(this, rate, resources);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RateLimitOverview, null, [{
    key: "initialize",
    value: function initialize(obj, rate, resources) {
      obj['rate'] = rate;
      obj['resources'] = resources;
    }
    /**
     * Constructs a <code>RateLimitOverview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimitOverview} obj Optional instance to populate.
     * @return {module:model/RateLimitOverview} The populated <code>RateLimitOverview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RateLimitOverview();

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _RateLimit["default"].constructFromObject(data['rate']);
        }

        if (data.hasOwnProperty('resources')) {
          obj['resources'] = _RateLimitOverviewResources["default"].constructFromObject(data['resources']);
        }
      }

      return obj;
    }
  }]);

  return RateLimitOverview;
}();
/**
 * @member {module:model/RateLimit} rate
 */


RateLimitOverview.prototype['rate'] = undefined;
/**
 * @member {module:model/RateLimitOverviewResources} resources
 */

RateLimitOverview.prototype['resources'] = undefined;
var _default = RateLimitOverview;
exports["default"] = _default;