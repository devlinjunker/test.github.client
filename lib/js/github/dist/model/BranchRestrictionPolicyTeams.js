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
 * The BranchRestrictionPolicyTeams model module.
 * @module model/BranchRestrictionPolicyTeams
 * @version 0.0.5
 */
var BranchRestrictionPolicyTeams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchRestrictionPolicyTeams</code>.
   * @alias module:model/BranchRestrictionPolicyTeams
   */
  function BranchRestrictionPolicyTeams() {
    _classCallCheck(this, BranchRestrictionPolicyTeams);

    BranchRestrictionPolicyTeams.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchRestrictionPolicyTeams, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchRestrictionPolicyTeams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchRestrictionPolicyTeams} obj Optional instance to populate.
     * @return {module:model/BranchRestrictionPolicyTeams} The populated <code>BranchRestrictionPolicyTeams</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchRestrictionPolicyTeams();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('members_url')) {
          obj['members_url'] = _ApiClient["default"].convertToType(data['members_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('parent')) {
          obj['parent'] = _ApiClient["default"].convertToType(data['parent'], 'String');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('privacy')) {
          obj['privacy'] = _ApiClient["default"].convertToType(data['privacy'], 'String');
        }

        if (data.hasOwnProperty('repositories_url')) {
          obj['repositories_url'] = _ApiClient["default"].convertToType(data['repositories_url'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BranchRestrictionPolicyTeams;
}();
/**
 * @member {String} description
 */


BranchRestrictionPolicyTeams.prototype['description'] = undefined;
/**
 * @member {String} html_url
 */

BranchRestrictionPolicyTeams.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

BranchRestrictionPolicyTeams.prototype['id'] = undefined;
/**
 * @member {String} members_url
 */

BranchRestrictionPolicyTeams.prototype['members_url'] = undefined;
/**
 * @member {String} name
 */

BranchRestrictionPolicyTeams.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

BranchRestrictionPolicyTeams.prototype['node_id'] = undefined;
/**
 * @member {String} parent
 */

BranchRestrictionPolicyTeams.prototype['parent'] = undefined;
/**
 * @member {String} permission
 */

BranchRestrictionPolicyTeams.prototype['permission'] = undefined;
/**
 * @member {String} privacy
 */

BranchRestrictionPolicyTeams.prototype['privacy'] = undefined;
/**
 * @member {String} repositories_url
 */

BranchRestrictionPolicyTeams.prototype['repositories_url'] = undefined;
/**
 * @member {String} slug
 */

BranchRestrictionPolicyTeams.prototype['slug'] = undefined;
/**
 * @member {String} url
 */

BranchRestrictionPolicyTeams.prototype['url'] = undefined;
var _default = BranchRestrictionPolicyTeams;
exports["default"] = _default;