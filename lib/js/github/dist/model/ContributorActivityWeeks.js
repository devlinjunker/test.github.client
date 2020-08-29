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
 * The ContributorActivityWeeks model module.
 * @module model/ContributorActivityWeeks
 * @version 0.0.5
 */
var ContributorActivityWeeks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContributorActivityWeeks</code>.
   * @alias module:model/ContributorActivityWeeks
   */
  function ContributorActivityWeeks() {
    _classCallCheck(this, ContributorActivityWeeks);

    ContributorActivityWeeks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContributorActivityWeeks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContributorActivityWeeks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContributorActivityWeeks} obj Optional instance to populate.
     * @return {module:model/ContributorActivityWeeks} The populated <code>ContributorActivityWeeks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContributorActivityWeeks();

        if (data.hasOwnProperty('a')) {
          obj['a'] = _ApiClient["default"].convertToType(data['a'], 'Number');
        }

        if (data.hasOwnProperty('c')) {
          obj['c'] = _ApiClient["default"].convertToType(data['c'], 'Number');
        }

        if (data.hasOwnProperty('d')) {
          obj['d'] = _ApiClient["default"].convertToType(data['d'], 'Number');
        }

        if (data.hasOwnProperty('w')) {
          obj['w'] = _ApiClient["default"].convertToType(data['w'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContributorActivityWeeks;
}();
/**
 * @member {Number} a
 */


ContributorActivityWeeks.prototype['a'] = undefined;
/**
 * @member {Number} c
 */

ContributorActivityWeeks.prototype['c'] = undefined;
/**
 * @member {Number} d
 */

ContributorActivityWeeks.prototype['d'] = undefined;
/**
 * @member {String} w
 */

ContributorActivityWeeks.prototype['w'] = undefined;
var _default = ContributorActivityWeeks;
exports["default"] = _default;