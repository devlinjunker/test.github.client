"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RateLimit = _interopRequireDefault(require("./RateLimit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RateLimitOverviewResources model module.
 * @module model/RateLimitOverviewResources
 * @version 0.0.5
 */
var RateLimitOverviewResources = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RateLimitOverviewResources</code>.
   * @alias module:model/RateLimitOverviewResources
   * @param core {module:model/RateLimit} 
   * @param search {module:model/RateLimit} 
   */
  function RateLimitOverviewResources(core, search) {
    _classCallCheck(this, RateLimitOverviewResources);

    RateLimitOverviewResources.initialize(this, core, search);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RateLimitOverviewResources, null, [{
    key: "initialize",
    value: function initialize(obj, core, search) {
      obj['core'] = core;
      obj['search'] = search;
    }
    /**
     * Constructs a <code>RateLimitOverviewResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimitOverviewResources} obj Optional instance to populate.
     * @return {module:model/RateLimitOverviewResources} The populated <code>RateLimitOverviewResources</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RateLimitOverviewResources();

        if (data.hasOwnProperty('core')) {
          obj['core'] = _RateLimit["default"].constructFromObject(data['core']);
        }

        if (data.hasOwnProperty('graphql')) {
          obj['graphql'] = _RateLimit["default"].constructFromObject(data['graphql']);
        }

        if (data.hasOwnProperty('integration_manifest')) {
          obj['integration_manifest'] = _RateLimit["default"].constructFromObject(data['integration_manifest']);
        }

        if (data.hasOwnProperty('search')) {
          obj['search'] = _RateLimit["default"].constructFromObject(data['search']);
        }

        if (data.hasOwnProperty('source_import')) {
          obj['source_import'] = _RateLimit["default"].constructFromObject(data['source_import']);
        }
      }

      return obj;
    }
  }]);

  return RateLimitOverviewResources;
}();
/**
 * @member {module:model/RateLimit} core
 */


RateLimitOverviewResources.prototype['core'] = undefined;
/**
 * @member {module:model/RateLimit} graphql
 */

RateLimitOverviewResources.prototype['graphql'] = undefined;
/**
 * @member {module:model/RateLimit} integration_manifest
 */

RateLimitOverviewResources.prototype['integration_manifest'] = undefined;
/**
 * @member {module:model/RateLimit} search
 */

RateLimitOverviewResources.prototype['search'] = undefined;
/**
 * @member {module:model/RateLimit} source_import
 */

RateLimitOverviewResources.prototype['source_import'] = undefined;
var _default = RateLimitOverviewResources;
exports["default"] = _default;