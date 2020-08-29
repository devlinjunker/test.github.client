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
 * The OrgMembershipPermissions model module.
 * @module model/OrgMembershipPermissions
 * @version 0.0.5
 */
var OrgMembershipPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrgMembershipPermissions</code>.
   * @alias module:model/OrgMembershipPermissions
   * @param canCreateRepository {Boolean} 
   */
  function OrgMembershipPermissions(canCreateRepository) {
    _classCallCheck(this, OrgMembershipPermissions);

    OrgMembershipPermissions.initialize(this, canCreateRepository);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrgMembershipPermissions, null, [{
    key: "initialize",
    value: function initialize(obj, canCreateRepository) {
      obj['can_create_repository'] = canCreateRepository;
    }
    /**
     * Constructs a <code>OrgMembershipPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgMembershipPermissions} obj Optional instance to populate.
     * @return {module:model/OrgMembershipPermissions} The populated <code>OrgMembershipPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrgMembershipPermissions();

        if (data.hasOwnProperty('can_create_repository')) {
          obj['can_create_repository'] = _ApiClient["default"].convertToType(data['can_create_repository'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrgMembershipPermissions;
}();
/**
 * @member {Boolean} can_create_repository
 */


OrgMembershipPermissions.prototype['can_create_repository'] = undefined;
var _default = OrgMembershipPermissions;
exports["default"] = _default;