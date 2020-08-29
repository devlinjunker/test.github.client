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
 * The ActionsSecret model module.
 * @module model/ActionsSecret
 * @version 0.0.5
 */
var ActionsSecret = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionsSecret</code>.
   * Set secrets for GitHub Actions.
   * @alias module:model/ActionsSecret
   * @param createdAt {Date} 
   * @param name {String} The name of the secret.
   * @param updatedAt {Date} 
   */
  function ActionsSecret(createdAt, name, updatedAt) {
    _classCallCheck(this, ActionsSecret);

    ActionsSecret.initialize(this, createdAt, name, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionsSecret, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, name, updatedAt) {
      obj['created_at'] = createdAt;
      obj['name'] = name;
      obj['updated_at'] = updatedAt;
    }
    /**
     * Constructs a <code>ActionsSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsSecret} obj Optional instance to populate.
     * @return {module:model/ActionsSecret} The populated <code>ActionsSecret</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionsSecret();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ActionsSecret;
}();
/**
 * @member {Date} created_at
 */


ActionsSecret.prototype['created_at'] = undefined;
/**
 * The name of the secret.
 * @member {String} name
 */

ActionsSecret.prototype['name'] = undefined;
/**
 * @member {Date} updated_at
 */

ActionsSecret.prototype['updated_at'] = undefined;
var _default = ActionsSecret;
exports["default"] = _default;