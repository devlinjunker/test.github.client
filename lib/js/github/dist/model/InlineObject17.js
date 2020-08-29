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
 * The InlineObject17 model module.
 * @module model/InlineObject17
 * @version 0.0.5
 */
var InlineObject17 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject17</code>.
   * @alias module:model/InlineObject17
   */
  function InlineObject17() {
    _classCallCheck(this, InlineObject17);

    InlineObject17.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject17, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject17</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject17} obj Optional instance to populate.
     * @return {module:model/InlineObject17} The populated <code>InlineObject17</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject17();

        if (data.hasOwnProperty('encrypted_value')) {
          obj['encrypted_value'] = _ApiClient["default"].convertToType(data['encrypted_value'], 'String');
        }

        if (data.hasOwnProperty('key_id')) {
          obj['key_id'] = _ApiClient["default"].convertToType(data['key_id'], 'String');
        }

        if (data.hasOwnProperty('selected_repository_ids')) {
          obj['selected_repository_ids'] = _ApiClient["default"].convertToType(data['selected_repository_ids'], ['String']);
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject17;
}();
/**
 * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://developer.github.com/v3/actions/secrets/#get-an-organization-public-key) endpoint.
 * @member {String} encrypted_value
 */


InlineObject17.prototype['encrypted_value'] = undefined;
/**
 * ID of the key you used to encrypt the secret.
 * @member {String} key_id
 */

InlineObject17.prototype['key_id'] = undefined;
/**
 * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://developer.github.com/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret) endpoints.
 * @member {Array.<String>} selected_repository_ids
 */

InlineObject17.prototype['selected_repository_ids'] = undefined;
/**
 * Configures the access that repositories have to the organization secret. Can be one of:   \\- `all` - All repositories in an organization can access the secret.   \\- `private` - Private repositories in an organization can access the secret.   \\- `selected` - Only specific repositories can access the secret.
 * @member {module:model/InlineObject17.VisibilityEnum} visibility
 */

InlineObject17.prototype['visibility'] = undefined;
/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject17['VisibilityEnum'] = {
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
var _default = InlineObject17;
exports["default"] = _default;