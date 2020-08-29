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
 * The InteractionLimit model module.
 * @module model/InteractionLimit
 * @version 0.0.5
 */
var InteractionLimit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InteractionLimit</code>.
   * Interaction limit settings.
   * @alias module:model/InteractionLimit
   * @param expiresAt {Date} 
   * @param limit {module:model/InteractionLimit.LimitEnum} The interaction limit to enable.
   * @param origin {String} 
   */
  function InteractionLimit(expiresAt, limit, origin) {
    _classCallCheck(this, InteractionLimit);

    InteractionLimit.initialize(this, expiresAt, limit, origin);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InteractionLimit, null, [{
    key: "initialize",
    value: function initialize(obj, expiresAt, limit, origin) {
      obj['expires_at'] = expiresAt;
      obj['limit'] = limit;
      obj['origin'] = origin;
    }
    /**
     * Constructs a <code>InteractionLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteractionLimit} obj Optional instance to populate.
     * @return {module:model/InteractionLimit} The populated <code>InteractionLimit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InteractionLimit();

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'Date');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'String');
        }

        if (data.hasOwnProperty('origin')) {
          obj['origin'] = _ApiClient["default"].convertToType(data['origin'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InteractionLimit;
}();
/**
 * @member {Date} expires_at
 */


InteractionLimit.prototype['expires_at'] = undefined;
/**
 * The interaction limit to enable.
 * @member {module:model/InteractionLimit.LimitEnum} limit
 */

InteractionLimit.prototype['limit'] = undefined;
/**
 * @member {String} origin
 */

InteractionLimit.prototype['origin'] = undefined;
/**
 * Allowed values for the <code>limit</code> property.
 * @enum {String}
 * @readonly
 */

InteractionLimit['LimitEnum'] = {
  /**
   * value: "existing_users"
   * @const
   */
  "existing_users": "existing_users",

  /**
   * value: "contributors_only"
   * @const
   */
  "contributors_only": "contributors_only",

  /**
   * value: "collaborators_only"
   * @const
   */
  "collaborators_only": "collaborators_only"
};
var _default = InteractionLimit;
exports["default"] = _default;