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
 * The InlineObject16 model module.
 * @module model/InlineObject16
 * @version 0.0.5
 */
var InlineObject16 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject16</code>.
   * @alias module:model/InlineObject16
   */
  function InlineObject16() {
    _classCallCheck(this, InlineObject16);

    InlineObject16.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject16, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject16</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject16} obj Optional instance to populate.
     * @return {module:model/InlineObject16} The populated <code>InlineObject16</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject16();

        if (data.hasOwnProperty('billing_email')) {
          obj['billing_email'] = _ApiClient["default"].convertToType(data['billing_email'], 'String');
        }

        if (data.hasOwnProperty('blog')) {
          obj['blog'] = _ApiClient["default"].convertToType(data['blog'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('default_repository_permission')) {
          obj['default_repository_permission'] = _ApiClient["default"].convertToType(data['default_repository_permission'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('has_organization_projects')) {
          obj['has_organization_projects'] = _ApiClient["default"].convertToType(data['has_organization_projects'], 'Boolean');
        }

        if (data.hasOwnProperty('has_repository_projects')) {
          obj['has_repository_projects'] = _ApiClient["default"].convertToType(data['has_repository_projects'], 'Boolean');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('members_allowed_repository_creation_type')) {
          obj['members_allowed_repository_creation_type'] = _ApiClient["default"].convertToType(data['members_allowed_repository_creation_type'], 'String');
        }

        if (data.hasOwnProperty('members_can_create_internal_repositories')) {
          obj['members_can_create_internal_repositories'] = _ApiClient["default"].convertToType(data['members_can_create_internal_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('members_can_create_private_repositories')) {
          obj['members_can_create_private_repositories'] = _ApiClient["default"].convertToType(data['members_can_create_private_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('members_can_create_public_repositories')) {
          obj['members_can_create_public_repositories'] = _ApiClient["default"].convertToType(data['members_can_create_public_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('members_can_create_repositories')) {
          obj['members_can_create_repositories'] = _ApiClient["default"].convertToType(data['members_can_create_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('twitter_username')) {
          obj['twitter_username'] = _ApiClient["default"].convertToType(data['twitter_username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject16;
}();
/**
 * Billing email address. This address is not publicized.
 * @member {String} billing_email
 */


InlineObject16.prototype['billing_email'] = undefined;
/**
 * @member {String} blog
 */

InlineObject16.prototype['blog'] = undefined;
/**
 * The company name.
 * @member {String} company
 */

InlineObject16.prototype['company'] = undefined;
/**
 * Default permission level members have for organization repositories:   \\* `read` - can pull, but not push to or administer this repository.   \\* `write` - can pull and push, but not administer this repository.   \\* `admin` - can pull, push, and administer this repository.   \\* `none` - no permissions granted by default.
 * @member {module:model/InlineObject16.DefaultRepositoryPermissionEnum} default_repository_permission
 * @default 'read'
 */

InlineObject16.prototype['default_repository_permission'] = 'read';
/**
 * The description of the company.
 * @member {String} description
 */

InlineObject16.prototype['description'] = undefined;
/**
 * The publicly visible email address.
 * @member {String} email
 */

InlineObject16.prototype['email'] = undefined;
/**
 * Toggles whether an organization can use organization projects.
 * @member {Boolean} has_organization_projects
 */

InlineObject16.prototype['has_organization_projects'] = undefined;
/**
 * Toggles whether repositories that belong to the organization can use repository projects.
 * @member {Boolean} has_repository_projects
 */

InlineObject16.prototype['has_repository_projects'] = undefined;
/**
 * The location.
 * @member {String} location
 */

InlineObject16.prototype['location'] = undefined;
/**
 * Specifies which types of repositories non-admin organization members can create. Can be one of:   \\* `all` - all organization members can create public and private repositories.   \\* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on GitHub Enterprise Cloud.   \\* `none` - only admin members can create repositories.   **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See [this note](https://developer.github.com/v3/orgs/#members_can_create_repositories) for details.
 * @member {module:model/InlineObject16.MembersAllowedRepositoryCreationTypeEnum} members_allowed_repository_creation_type
 */

InlineObject16.prototype['members_allowed_repository_creation_type'] = undefined;
/**
 * Toggles whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. Can be one of:   \\* `true` - all organization members can create internal repositories.   \\* `false` - only organization owners can create internal repositories.   Default: `true`. For more information, see \"[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.
 * @member {Boolean} members_can_create_internal_repositories
 */

InlineObject16.prototype['members_can_create_internal_repositories'] = undefined;
/**
 * Toggles whether organization members can create private repositories, which are visible to organization members with permission. Can be one of:   \\* `true` - all organization members can create private repositories.   \\* `false` - only organization owners can create private repositories.   Default: `true`. For more information, see \"[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.
 * @member {Boolean} members_can_create_private_repositories
 */

InlineObject16.prototype['members_can_create_private_repositories'] = undefined;
/**
 * Toggles whether organization members can create public repositories, which are visible to anyone. Can be one of:   \\* `true` - all organization members can create public repositories.   \\* `false` - only organization owners can create public repositories.   Default: `true`. For more information, see \"[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.
 * @member {Boolean} members_can_create_public_repositories
 */

InlineObject16.prototype['members_can_create_public_repositories'] = undefined;
/**
 * Toggles the ability of non-admin organization members to create repositories. Can be one of:   \\* `true` - all organization members can create repositories.   \\* `false` - only organization owners can create repositories.   Default: `true`   **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
 * @member {Boolean} members_can_create_repositories
 * @default true
 */

InlineObject16.prototype['members_can_create_repositories'] = true;
/**
 * The shorthand name of the company.
 * @member {String} name
 */

InlineObject16.prototype['name'] = undefined;
/**
 * The Twitter username of the company.
 * @member {String} twitter_username
 */

InlineObject16.prototype['twitter_username'] = undefined;
/**
 * Allowed values for the <code>default_repository_permission</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject16['DefaultRepositoryPermissionEnum'] = {
  /**
   * value: "read"
   * @const
   */
  "read": "read",

  /**
   * value: "write"
   * @const
   */
  "write": "write",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
/**
 * Allowed values for the <code>members_allowed_repository_creation_type</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject16['MembersAllowedRepositoryCreationTypeEnum'] = {
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
   * value: "none"
   * @const
   */
  "none": "none"
};
var _default = InlineObject16;
exports["default"] = _default;