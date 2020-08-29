"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AppInstallationsInstallationIdAccessTokensPermissions = _interopRequireDefault(require("./AppInstallationsInstallationIdAccessTokensPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 0.0.5
 */
var InlineObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject</code>.
   * @alias module:model/InlineObject
   */
  function InlineObject() {
    _classCallCheck(this, InlineObject);

    InlineObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject();

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _AppInstallationsInstallationIdAccessTokensPermissions["default"].constructFromObject(data['permissions']);
        }

        if (data.hasOwnProperty('repositories')) {
          obj['repositories'] = _ApiClient["default"].convertToType(data['repositories'], ['String']);
        }

        if (data.hasOwnProperty('repository_ids')) {
          obj['repository_ids'] = _ApiClient["default"].convertToType(data['repository_ids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject;
}();
/**
 * @member {module:model/AppInstallationsInstallationIdAccessTokensPermissions} permissions
 */


InlineObject.prototype['permissions'] = undefined;
/**
 * List of repository names that the token should have access to
 * @member {Array.<String>} repositories
 */

InlineObject.prototype['repositories'] = undefined;
/**
 * List of repository IDs that the token should have access to
 * @member {Array.<Number>} repository_ids
 */

InlineObject.prototype['repository_ids'] = undefined;
var _default = InlineObject;
exports["default"] = _default;