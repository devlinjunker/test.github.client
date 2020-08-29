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
 * The OrganizationPlan model module.
 * @module model/OrganizationPlan
 * @version 0.0.5
 */
var OrganizationPlan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationPlan</code>.
   * @alias module:model/OrganizationPlan
   */
  function OrganizationPlan() {
    _classCallCheck(this, OrganizationPlan);

    OrganizationPlan.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganizationPlan, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrganizationPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationPlan} obj Optional instance to populate.
     * @return {module:model/OrganizationPlan} The populated <code>OrganizationPlan</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationPlan();

        if (data.hasOwnProperty('filled_seats')) {
          obj['filled_seats'] = _ApiClient["default"].convertToType(data['filled_seats'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('private_repos')) {
          obj['private_repos'] = _ApiClient["default"].convertToType(data['private_repos'], 'Number');
        }

        if (data.hasOwnProperty('seats')) {
          obj['seats'] = _ApiClient["default"].convertToType(data['seats'], 'Number');
        }

        if (data.hasOwnProperty('space')) {
          obj['space'] = _ApiClient["default"].convertToType(data['space'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrganizationPlan;
}();
/**
 * @member {Number} filled_seats
 */


OrganizationPlan.prototype['filled_seats'] = undefined;
/**
 * @member {String} name
 */

OrganizationPlan.prototype['name'] = undefined;
/**
 * @member {Number} private_repos
 */

OrganizationPlan.prototype['private_repos'] = undefined;
/**
 * @member {Number} seats
 */

OrganizationPlan.prototype['seats'] = undefined;
/**
 * @member {Number} space
 */

OrganizationPlan.prototype['space'] = undefined;
var _default = OrganizationPlan;
exports["default"] = _default;