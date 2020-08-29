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
 * The InlineObject46 model module.
 * @module model/InlineObject46
 * @version 0.0.5
 */
var InlineObject46 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject46</code>.
   * @alias module:model/InlineObject46
   */
  function InlineObject46() {
    _classCallCheck(this, InlineObject46);

    InlineObject46.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject46, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject46</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject46} obj Optional instance to populate.
     * @return {module:model/InlineObject46} The populated <code>InlineObject46</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject46();

        if (data.hasOwnProperty('allow_merge_commit')) {
          obj['allow_merge_commit'] = _ApiClient["default"].convertToType(data['allow_merge_commit'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_rebase_merge')) {
          obj['allow_rebase_merge'] = _ApiClient["default"].convertToType(data['allow_rebase_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_squash_merge')) {
          obj['allow_squash_merge'] = _ApiClient["default"].convertToType(data['allow_squash_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }

        if (data.hasOwnProperty('default_branch')) {
          obj['default_branch'] = _ApiClient["default"].convertToType(data['default_branch'], 'String');
        }

        if (data.hasOwnProperty('delete_branch_on_merge')) {
          obj['delete_branch_on_merge'] = _ApiClient["default"].convertToType(data['delete_branch_on_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('has_issues')) {
          obj['has_issues'] = _ApiClient["default"].convertToType(data['has_issues'], 'Boolean');
        }

        if (data.hasOwnProperty('has_projects')) {
          obj['has_projects'] = _ApiClient["default"].convertToType(data['has_projects'], 'Boolean');
        }

        if (data.hasOwnProperty('has_wiki')) {
          obj['has_wiki'] = _ApiClient["default"].convertToType(data['has_wiki'], 'Boolean');
        }

        if (data.hasOwnProperty('homepage')) {
          obj['homepage'] = _ApiClient["default"].convertToType(data['homepage'], 'String');
        }

        if (data.hasOwnProperty('is_template')) {
          obj['is_template'] = _ApiClient["default"].convertToType(data['is_template'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject46;
}();
/**
 * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
 * @member {Boolean} allow_merge_commit
 * @default true
 */


InlineObject46.prototype['allow_merge_commit'] = true;
/**
 * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
 * @member {Boolean} allow_rebase_merge
 * @default true
 */

InlineObject46.prototype['allow_rebase_merge'] = true;
/**
 * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
 * @member {Boolean} allow_squash_merge
 * @default true
 */

InlineObject46.prototype['allow_squash_merge'] = true;
/**
 * `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
 * @member {Boolean} archived
 * @default false
 */

InlineObject46.prototype['archived'] = false;
/**
 * Updates the default branch for this repository.
 * @member {String} default_branch
 */

InlineObject46.prototype['default_branch'] = undefined;
/**
 * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
 * @member {Boolean} delete_branch_on_merge
 * @default false
 */

InlineObject46.prototype['delete_branch_on_merge'] = false;
/**
 * A short description of the repository.
 * @member {String} description
 */

InlineObject46.prototype['description'] = undefined;
/**
 * Either `true` to enable issues for this repository or `false` to disable them.
 * @member {Boolean} has_issues
 * @default true
 */

InlineObject46.prototype['has_issues'] = true;
/**
 * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
 * @member {Boolean} has_projects
 * @default true
 */

InlineObject46.prototype['has_projects'] = true;
/**
 * Either `true` to enable the wiki for this repository or `false` to disable it.
 * @member {Boolean} has_wiki
 * @default true
 */

InlineObject46.prototype['has_wiki'] = true;
/**
 * A URL with more information about the repository.
 * @member {String} homepage
 */

InlineObject46.prototype['homepage'] = undefined;
/**
 * Either `true` to make this repo available as a template repository or `false` to prevent it.
 * @member {Boolean} is_template
 * @default false
 */

InlineObject46.prototype['is_template'] = false;
/**
 * The name of the repository.
 * @member {String} name
 */

InlineObject46.prototype['name'] = undefined;
/**
 * Either `true` to make the repository private or `false` to make it public. Default: `false`.   **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private. **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
 * @member {Boolean} private
 * @default false
 */

InlineObject46.prototype['private'] = false;
/**
 * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. The `visibility` parameter overrides the `private` parameter when you use both along with the `nebula-preview` preview header.
 * @member {module:model/InlineObject46.VisibilityEnum} visibility
 */

InlineObject46.prototype['visibility'] = undefined;
/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject46['VisibilityEnum'] = {
  /**
   * value: "public"
   * @const
   */
  "public": "public",

  /**
   * value: "private"
   * @const
   */
  "private": "private",

  /**
   * value: "visibility"
   * @const
   */
  "visibility": "visibility",

  /**
   * value: "internal"
   * @const
   */
  "internal": "internal"
};
var _default = InlineObject46;
exports["default"] = _default;