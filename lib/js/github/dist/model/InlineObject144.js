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
 * The InlineObject144 model module.
 * @module model/InlineObject144
 * @version 0.0.5
 */
var InlineObject144 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject144</code>.
   * @alias module:model/InlineObject144
   * @param name {String} The name of the repository.
   */
  function InlineObject144(name) {
    _classCallCheck(this, InlineObject144);

    InlineObject144.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject144, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineObject144</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject144} obj Optional instance to populate.
     * @return {module:model/InlineObject144} The populated <code>InlineObject144</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject144();

        if (data.hasOwnProperty('allow_merge_commit')) {
          obj['allow_merge_commit'] = _ApiClient["default"].convertToType(data['allow_merge_commit'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_rebase_merge')) {
          obj['allow_rebase_merge'] = _ApiClient["default"].convertToType(data['allow_rebase_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_squash_merge')) {
          obj['allow_squash_merge'] = _ApiClient["default"].convertToType(data['allow_squash_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('auto_init')) {
          obj['auto_init'] = _ApiClient["default"].convertToType(data['auto_init'], 'Boolean');
        }

        if (data.hasOwnProperty('delete_branch_on_merge')) {
          obj['delete_branch_on_merge'] = _ApiClient["default"].convertToType(data['delete_branch_on_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('gitignore_template')) {
          obj['gitignore_template'] = _ApiClient["default"].convertToType(data['gitignore_template'], 'String');
        }

        if (data.hasOwnProperty('has_downloads')) {
          obj['has_downloads'] = _ApiClient["default"].convertToType(data['has_downloads'], 'Boolean');
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

        if (data.hasOwnProperty('license_template')) {
          obj['license_template'] = _ApiClient["default"].convertToType(data['license_template'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('team_id')) {
          obj['team_id'] = _ApiClient["default"].convertToType(data['team_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineObject144;
}();
/**
 * Whether to allow merge commits for pull requests.
 * @member {Boolean} allow_merge_commit
 * @default true
 */


InlineObject144.prototype['allow_merge_commit'] = true;
/**
 * Whether to allow rebase merges for pull requests.
 * @member {Boolean} allow_rebase_merge
 * @default true
 */

InlineObject144.prototype['allow_rebase_merge'] = true;
/**
 * Whether to allow squash merges for pull requests.
 * @member {Boolean} allow_squash_merge
 * @default true
 */

InlineObject144.prototype['allow_squash_merge'] = true;
/**
 * Whether the repository is initialized with a minimal README.
 * @member {Boolean} auto_init
 * @default false
 */

InlineObject144.prototype['auto_init'] = false;
/**
 * Whether to delete head branches when pull requests are merged
 * @member {Boolean} delete_branch_on_merge
 * @default false
 */

InlineObject144.prototype['delete_branch_on_merge'] = false;
/**
 * A short description of the repository.
 * @member {String} description
 */

InlineObject144.prototype['description'] = undefined;
/**
 * The desired language or platform to apply to the .gitignore.
 * @member {String} gitignore_template
 */

InlineObject144.prototype['gitignore_template'] = undefined;
/**
 * Whether downloads are enabled.
 * @member {Boolean} has_downloads
 * @default true
 */

InlineObject144.prototype['has_downloads'] = true;
/**
 * Whether issues are enabled.
 * @member {Boolean} has_issues
 * @default true
 */

InlineObject144.prototype['has_issues'] = true;
/**
 * Whether projects are enabled.
 * @member {Boolean} has_projects
 * @default true
 */

InlineObject144.prototype['has_projects'] = true;
/**
 * Whether the wiki is enabled.
 * @member {Boolean} has_wiki
 * @default true
 */

InlineObject144.prototype['has_wiki'] = true;
/**
 * A URL with more information about the repository.
 * @member {String} homepage
 */

InlineObject144.prototype['homepage'] = undefined;
/**
 * Whether this repository acts as a template that can be used to generate new repositories.
 * @member {Boolean} is_template
 * @default false
 */

InlineObject144.prototype['is_template'] = false;
/**
 * The license keyword of the open source license for this repository.
 * @member {String} license_template
 */

InlineObject144.prototype['license_template'] = undefined;
/**
 * The name of the repository.
 * @member {String} name
 */

InlineObject144.prototype['name'] = undefined;
/**
 * Whether the repository is private or public.
 * @member {Boolean} private
 * @default false
 */

InlineObject144.prototype['private'] = false;
/**
 * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @member {Number} team_id
 */

InlineObject144.prototype['team_id'] = undefined;
var _default = InlineObject144;
exports["default"] = _default;