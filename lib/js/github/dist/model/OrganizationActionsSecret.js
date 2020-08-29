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
 * The OrganizationActionsSecret model module.
 * @module model/OrganizationActionsSecret
 * @version 0.0.5
 */
var OrganizationActionsSecret = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationActionsSecret</code>.
   * Secrets for GitHub Actions for an organization.
   * @alias module:model/OrganizationActionsSecret
   * @param createdAt {Date} 
   * @param name {String} The name of the secret.
   * @param updatedAt {Date} 
   * @param visibility {module:model/OrganizationActionsSecret.VisibilityEnum} Visibility of a secret
   */
  function OrganizationActionsSecret(createdAt, name, updatedAt, visibility) {
    _classCallCheck(this, OrganizationActionsSecret);

    OrganizationActionsSecret.initialize(this, createdAt, name, updatedAt, visibility);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganizationActionsSecret, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, name, updatedAt, visibility) {
      obj['created_at'] = createdAt;
      obj['name'] = name;
      obj['updated_at'] = updatedAt;
      obj['visibility'] = visibility;
    }
    /**
     * Constructs a <code>OrganizationActionsSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationActionsSecret} obj Optional instance to populate.
     * @return {module:model/OrganizationActionsSecret} The populated <code>OrganizationActionsSecret</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationActionsSecret();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('selected_repositories_url')) {
          obj['selected_repositories_url'] = _ApiClient["default"].convertToType(data['selected_repositories_url'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrganizationActionsSecret;
}();
/**
 * @member {Date} created_at
 */


OrganizationActionsSecret.prototype['created_at'] = undefined;
/**
 * The name of the secret.
 * @member {String} name
 */

OrganizationActionsSecret.prototype['name'] = undefined;
/**
 * @member {String} selected_repositories_url
 */

OrganizationActionsSecret.prototype['selected_repositories_url'] = undefined;
/**
 * @member {Date} updated_at
 */

OrganizationActionsSecret.prototype['updated_at'] = undefined;
/**
 * Visibility of a secret
 * @member {module:model/OrganizationActionsSecret.VisibilityEnum} visibility
 */

OrganizationActionsSecret.prototype['visibility'] = undefined;
/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */

OrganizationActionsSecret['VisibilityEnum'] = {
  /**
   * value: "all"
   * @const
   */
  "all": "all",

  /**
   * value: "private"
   * @const
   */
  "private": "private",

  /**
   * value: "selected"
   * @const
   */
  "selected": "selected"
};
var _default = OrganizationActionsSecret;
exports["default"] = _default;