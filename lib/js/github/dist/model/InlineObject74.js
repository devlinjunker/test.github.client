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
 * The InlineObject74 model module.
 * @module model/InlineObject74
 * @version 0.0.5
 */
var InlineObject74 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject74</code>.
   * @alias module:model/InlineObject74
   * @param vcsUrl {String} The URL of the originating repository.
   */
  function InlineObject74(vcsUrl) {
    _classCallCheck(this, InlineObject74);

    InlineObject74.initialize(this, vcsUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject74, null, [{
    key: "initialize",
    value: function initialize(obj, vcsUrl) {
      obj['vcs_url'] = vcsUrl;
    }
    /**
     * Constructs a <code>InlineObject74</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject74} obj Optional instance to populate.
     * @return {module:model/InlineObject74} The populated <code>InlineObject74</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject74();

        if (data.hasOwnProperty('tfvc_project')) {
          obj['tfvc_project'] = _ApiClient["default"].convertToType(data['tfvc_project'], 'String');
        }

        if (data.hasOwnProperty('vcs')) {
          obj['vcs'] = _ApiClient["default"].convertToType(data['vcs'], 'String');
        }

        if (data.hasOwnProperty('vcs_password')) {
          obj['vcs_password'] = _ApiClient["default"].convertToType(data['vcs_password'], 'String');
        }

        if (data.hasOwnProperty('vcs_url')) {
          obj['vcs_url'] = _ApiClient["default"].convertToType(data['vcs_url'], 'String');
        }

        if (data.hasOwnProperty('vcs_username')) {
          obj['vcs_username'] = _ApiClient["default"].convertToType(data['vcs_username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject74;
}();
/**
 * For a tfvc import, the name of the project that is being imported.
 * @member {String} tfvc_project
 */


InlineObject74.prototype['tfvc_project'] = undefined;
/**
 * The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 * @member {module:model/InlineObject74.VcsEnum} vcs
 */

InlineObject74.prototype['vcs'] = undefined;
/**
 * If authentication is required, the password to provide to `vcs_url`.
 * @member {String} vcs_password
 */

InlineObject74.prototype['vcs_password'] = undefined;
/**
 * The URL of the originating repository.
 * @member {String} vcs_url
 */

InlineObject74.prototype['vcs_url'] = undefined;
/**
 * If authentication is required, the username to provide to `vcs_url`.
 * @member {String} vcs_username
 */

InlineObject74.prototype['vcs_username'] = undefined;
/**
 * Allowed values for the <code>vcs</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject74['VcsEnum'] = {
  /**
   * value: "subversion"
   * @const
   */
  "subversion": "subversion",

  /**
   * value: "git"
   * @const
   */
  "git": "git",

  /**
   * value: "mercurial"
   * @const
   */
  "mercurial": "mercurial",

  /**
   * value: "tfvc"
   * @const
   */
  "tfvc": "tfvc"
};
var _default = InlineObject74;
exports["default"] = _default;