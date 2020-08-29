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
 * The PackagesBillingUsage model module.
 * @module model/PackagesBillingUsage
 * @version 0.0.5
 */
var PackagesBillingUsage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PackagesBillingUsage</code>.
   * @alias module:model/PackagesBillingUsage
   */
  function PackagesBillingUsage() {
    _classCallCheck(this, PackagesBillingUsage);

    PackagesBillingUsage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PackagesBillingUsage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PackagesBillingUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PackagesBillingUsage} obj Optional instance to populate.
     * @return {module:model/PackagesBillingUsage} The populated <code>PackagesBillingUsage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PackagesBillingUsage();

        if (data.hasOwnProperty('included_gigabytes_bandwidth')) {
          obj['included_gigabytes_bandwidth'] = _ApiClient["default"].convertToType(data['included_gigabytes_bandwidth'], 'Number');
        }

        if (data.hasOwnProperty('total_gigabytes_bandwidth_used')) {
          obj['total_gigabytes_bandwidth_used'] = _ApiClient["default"].convertToType(data['total_gigabytes_bandwidth_used'], 'Number');
        }

        if (data.hasOwnProperty('total_paid_gigabytes_bandwidth_used')) {
          obj['total_paid_gigabytes_bandwidth_used'] = _ApiClient["default"].convertToType(data['total_paid_gigabytes_bandwidth_used'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PackagesBillingUsage;
}();
/**
 * Free storage space (GB) for GitHub Packages.
 * @member {Number} included_gigabytes_bandwidth
 */


PackagesBillingUsage.prototype['included_gigabytes_bandwidth'] = undefined;
/**
 * Sum of the free and paid storage space (GB) for GitHuub Packages.
 * @member {Number} total_gigabytes_bandwidth_used
 */

PackagesBillingUsage.prototype['total_gigabytes_bandwidth_used'] = undefined;
/**
 * Total paid storage space (GB) for GitHuub Packages.
 * @member {Number} total_paid_gigabytes_bandwidth_used
 */

PackagesBillingUsage.prototype['total_paid_gigabytes_bandwidth_used'] = undefined;
var _default = PackagesBillingUsage;
exports["default"] = _default;