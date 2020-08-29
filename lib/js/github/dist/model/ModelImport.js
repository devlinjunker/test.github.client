"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ImportProjectChoices = _interopRequireDefault(require("./ImportProjectChoices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModelImport model module.
 * @module model/ModelImport
 * @version 0.0.5
 */
var ModelImport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelImport</code>.
   * A repository import from an external source.
   * @alias module:model/ModelImport
   * @param authorsUrl {String} 
   * @param htmlUrl {String} 
   * @param repositoryUrl {String} 
   * @param status {module:model/ModelImport.StatusEnum} 
   * @param url {String} 
   * @param vcs {String} 
   * @param vcsUrl {String} The URL of the originating repository.
   */
  function ModelImport(authorsUrl, htmlUrl, repositoryUrl, status, url, vcs, vcsUrl) {
    _classCallCheck(this, ModelImport);

    ModelImport.initialize(this, authorsUrl, htmlUrl, repositoryUrl, status, url, vcs, vcsUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelImport, null, [{
    key: "initialize",
    value: function initialize(obj, authorsUrl, htmlUrl, repositoryUrl, status, url, vcs, vcsUrl) {
      obj['authors_url'] = authorsUrl;
      obj['html_url'] = htmlUrl;
      obj['repository_url'] = repositoryUrl;
      obj['status'] = status;
      obj['url'] = url;
      obj['vcs'] = vcs;
      obj['vcs_url'] = vcsUrl;
    }
    /**
     * Constructs a <code>ModelImport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelImport} obj Optional instance to populate.
     * @return {module:model/ModelImport} The populated <code>ModelImport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelImport();

        if (data.hasOwnProperty('authors_count')) {
          obj['authors_count'] = _ApiClient["default"].convertToType(data['authors_count'], 'Number');
        }

        if (data.hasOwnProperty('authors_url')) {
          obj['authors_url'] = _ApiClient["default"].convertToType(data['authors_url'], 'String');
        }

        if (data.hasOwnProperty('commit_count')) {
          obj['commit_count'] = _ApiClient["default"].convertToType(data['commit_count'], 'Number');
        }

        if (data.hasOwnProperty('error_message')) {
          obj['error_message'] = _ApiClient["default"].convertToType(data['error_message'], 'String');
        }

        if (data.hasOwnProperty('failed_step')) {
          obj['failed_step'] = _ApiClient["default"].convertToType(data['failed_step'], 'String');
        }

        if (data.hasOwnProperty('has_large_files')) {
          obj['has_large_files'] = _ApiClient["default"].convertToType(data['has_large_files'], 'Boolean');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('import_percent')) {
          obj['import_percent'] = _ApiClient["default"].convertToType(data['import_percent'], 'Number');
        }

        if (data.hasOwnProperty('large_files_count')) {
          obj['large_files_count'] = _ApiClient["default"].convertToType(data['large_files_count'], 'Number');
        }

        if (data.hasOwnProperty('large_files_size')) {
          obj['large_files_size'] = _ApiClient["default"].convertToType(data['large_files_size'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('project_choices')) {
          obj['project_choices'] = _ApiClient["default"].convertToType(data['project_choices'], [_ImportProjectChoices["default"]]);
        }

        if (data.hasOwnProperty('push_percent')) {
          obj['push_percent'] = _ApiClient["default"].convertToType(data['push_percent'], 'Number');
        }

        if (data.hasOwnProperty('repository_url')) {
          obj['repository_url'] = _ApiClient["default"].convertToType(data['repository_url'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('status_text')) {
          obj['status_text'] = _ApiClient["default"].convertToType(data['status_text'], 'String');
        }

        if (data.hasOwnProperty('svc_root')) {
          obj['svc_root'] = _ApiClient["default"].convertToType(data['svc_root'], 'String');
        }

        if (data.hasOwnProperty('svn_root')) {
          obj['svn_root'] = _ApiClient["default"].convertToType(data['svn_root'], 'String');
        }

        if (data.hasOwnProperty('tfvc_project')) {
          obj['tfvc_project'] = _ApiClient["default"].convertToType(data['tfvc_project'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('use_lfs')) {
          obj['use_lfs'] = _ApiClient["default"].convertToType(data['use_lfs'], 'String');
        }

        if (data.hasOwnProperty('vcs')) {
          obj['vcs'] = _ApiClient["default"].convertToType(data['vcs'], 'String');
        }

        if (data.hasOwnProperty('vcs_url')) {
          obj['vcs_url'] = _ApiClient["default"].convertToType(data['vcs_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModelImport;
}();
/**
 * @member {Number} authors_count
 */


ModelImport.prototype['authors_count'] = undefined;
/**
 * @member {String} authors_url
 */

ModelImport.prototype['authors_url'] = undefined;
/**
 * @member {Number} commit_count
 */

ModelImport.prototype['commit_count'] = undefined;
/**
 * @member {String} error_message
 */

ModelImport.prototype['error_message'] = undefined;
/**
 * @member {String} failed_step
 */

ModelImport.prototype['failed_step'] = undefined;
/**
 * @member {Boolean} has_large_files
 */

ModelImport.prototype['has_large_files'] = undefined;
/**
 * @member {String} html_url
 */

ModelImport.prototype['html_url'] = undefined;
/**
 * @member {Number} import_percent
 */

ModelImport.prototype['import_percent'] = undefined;
/**
 * @member {Number} large_files_count
 */

ModelImport.prototype['large_files_count'] = undefined;
/**
 * @member {Number} large_files_size
 */

ModelImport.prototype['large_files_size'] = undefined;
/**
 * @member {String} message
 */

ModelImport.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/ImportProjectChoices>} project_choices
 */

ModelImport.prototype['project_choices'] = undefined;
/**
 * @member {Number} push_percent
 */

ModelImport.prototype['push_percent'] = undefined;
/**
 * @member {String} repository_url
 */

ModelImport.prototype['repository_url'] = undefined;
/**
 * @member {module:model/ModelImport.StatusEnum} status
 */

ModelImport.prototype['status'] = undefined;
/**
 * @member {String} status_text
 */

ModelImport.prototype['status_text'] = undefined;
/**
 * @member {String} svc_root
 */

ModelImport.prototype['svc_root'] = undefined;
/**
 * @member {String} svn_root
 */

ModelImport.prototype['svn_root'] = undefined;
/**
 * @member {String} tfvc_project
 */

ModelImport.prototype['tfvc_project'] = undefined;
/**
 * @member {String} url
 */

ModelImport.prototype['url'] = undefined;
/**
 * @member {String} use_lfs
 */

ModelImport.prototype['use_lfs'] = undefined;
/**
 * @member {String} vcs
 */

ModelImport.prototype['vcs'] = undefined;
/**
 * The URL of the originating repository.
 * @member {String} vcs_url
 */

ModelImport.prototype['vcs_url'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ModelImport['StatusEnum'] = {
  /**
   * value: "auth"
   * @const
   */
  "auth": "auth",

  /**
   * value: "error"
   * @const
   */
  "error": "error",

  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "detecting"
   * @const
   */
  "detecting": "detecting",

  /**
   * value: "choose"
   * @const
   */
  "choose": "choose",

  /**
   * value: "auth_failed"
   * @const
   */
  "auth_failed": "auth_failed",

  /**
   * value: "importing"
   * @const
   */
  "importing": "importing",

  /**
   * value: "mapping"
   * @const
   */
  "mapping": "mapping",

  /**
   * value: "waiting_to_push"
   * @const
   */
  "waiting_to_push": "waiting_to_push",

  /**
   * value: "pushing"
   * @const
   */
  "pushing": "pushing",

  /**
   * value: "complete"
   * @const
   */
  "complete": "complete",

  /**
   * value: "setup"
   * @const
   */
  "setup": "setup",

  /**
   * value: "unknown"
   * @const
   */
  "unknown": "unknown",

  /**
   * value: "detection_found_multiple"
   * @const
   */
  "detection_found_multiple": "detection_found_multiple",

  /**
   * value: "detection_found_nothing"
   * @const
   */
  "detection_found_nothing": "detection_found_nothing",

  /**
   * value: "detection_needs_auth"
   * @const
   */
  "detection_needs_auth": "detection_needs_auth"
};
var _default = ModelImport;
exports["default"] = _default;