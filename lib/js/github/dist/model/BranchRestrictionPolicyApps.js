"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchRestrictionPolicyOwner = _interopRequireDefault(require("./BranchRestrictionPolicyOwner"));

var _BranchRestrictionPolicyPermissions = _interopRequireDefault(require("./BranchRestrictionPolicyPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchRestrictionPolicyApps model module.
 * @module model/BranchRestrictionPolicyApps
 * @version 0.0.5
 */
var BranchRestrictionPolicyApps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchRestrictionPolicyApps</code>.
   * @alias module:model/BranchRestrictionPolicyApps
   */
  function BranchRestrictionPolicyApps() {
    _classCallCheck(this, BranchRestrictionPolicyApps);

    BranchRestrictionPolicyApps.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchRestrictionPolicyApps, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchRestrictionPolicyApps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchRestrictionPolicyApps} obj Optional instance to populate.
     * @return {module:model/BranchRestrictionPolicyApps} The populated <code>BranchRestrictionPolicyApps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchRestrictionPolicyApps();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], ['String']);
        }

        if (data.hasOwnProperty('external_url')) {
          obj['external_url'] = _ApiClient["default"].convertToType(data['external_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _BranchRestrictionPolicyOwner["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _BranchRestrictionPolicyPermissions["default"].constructFromObject(data['permissions']);
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BranchRestrictionPolicyApps;
}();
/**
 * @member {String} created_at
 */


BranchRestrictionPolicyApps.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

BranchRestrictionPolicyApps.prototype['description'] = undefined;
/**
 * @member {Array.<String>} events
 */

BranchRestrictionPolicyApps.prototype['events'] = undefined;
/**
 * @member {String} external_url
 */

BranchRestrictionPolicyApps.prototype['external_url'] = undefined;
/**
 * @member {String} html_url
 */

BranchRestrictionPolicyApps.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

BranchRestrictionPolicyApps.prototype['id'] = undefined;
/**
 * @member {String} name
 */

BranchRestrictionPolicyApps.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

BranchRestrictionPolicyApps.prototype['node_id'] = undefined;
/**
 * @member {module:model/BranchRestrictionPolicyOwner} owner
 */

BranchRestrictionPolicyApps.prototype['owner'] = undefined;
/**
 * @member {module:model/BranchRestrictionPolicyPermissions} permissions
 */

BranchRestrictionPolicyApps.prototype['permissions'] = undefined;
/**
 * @member {String} slug
 */

BranchRestrictionPolicyApps.prototype['slug'] = undefined;
/**
 * @member {String} updated_at
 */

BranchRestrictionPolicyApps.prototype['updated_at'] = undefined;
var _default = BranchRestrictionPolicyApps;
exports["default"] = _default;