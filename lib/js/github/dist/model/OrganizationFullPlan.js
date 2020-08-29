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
 * The OrganizationFullPlan model module.
 * @module model/OrganizationFullPlan
 * @version 0.0.5
 */
var OrganizationFullPlan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationFullPlan</code>.
   * @alias module:model/OrganizationFullPlan
   * @param name {String} 
   * @param privateRepos {Number} 
   * @param space {Number} 
   */
  function OrganizationFullPlan(name, privateRepos, space) {
    _classCallCheck(this, OrganizationFullPlan);

    OrganizationFullPlan.initialize(this, name, privateRepos, space);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganizationFullPlan, null, [{
    key: "initialize",
    value: function initialize(obj, name, privateRepos, space) {
      obj['name'] = name;
      obj['private_repos'] = privateRepos;
      obj['space'] = space;
    }
    /**
     * Constructs a <code>OrganizationFullPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationFullPlan} obj Optional instance to populate.
     * @return {module:model/OrganizationFullPlan} The populated <code>OrganizationFullPlan</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationFullPlan();

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

  return OrganizationFullPlan;
}();
/**
 * @member {Number} filled_seats
 */


OrganizationFullPlan.prototype['filled_seats'] = undefined;
/**
 * @member {String} name
 */

OrganizationFullPlan.prototype['name'] = undefined;
/**
 * @member {Number} private_repos
 */

OrganizationFullPlan.prototype['private_repos'] = undefined;
/**
 * @member {Number} seats
 */

OrganizationFullPlan.prototype['seats'] = undefined;
/**
 * @member {Number} space
 */

OrganizationFullPlan.prototype['space'] = undefined;
var _default = OrganizationFullPlan;
exports["default"] = _default;