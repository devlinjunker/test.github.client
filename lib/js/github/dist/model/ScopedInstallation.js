"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScopedInstallation model module.
 * @module model/ScopedInstallation
 * @version 0.0.5
 */
var ScopedInstallation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScopedInstallation</code>.
   * @alias module:model/ScopedInstallation
   * @param account {module:model/SimpleUser} 
   * @param permissions {Object} 
   * @param repositoriesUrl {String} 
   * @param repositorySelection {module:model/ScopedInstallation.RepositorySelectionEnum} Describe whether all repositories have been selected or there's a selection involved
   * @param singleFileName {String} 
   */
  function ScopedInstallation(account, permissions, repositoriesUrl, repositorySelection, singleFileName) {
    _classCallCheck(this, ScopedInstallation);

    ScopedInstallation.initialize(this, account, permissions, repositoriesUrl, repositorySelection, singleFileName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScopedInstallation, null, [{
    key: "initialize",
    value: function initialize(obj, account, permissions, repositoriesUrl, repositorySelection, singleFileName) {
      obj['account'] = account;
      obj['permissions'] = permissions;
      obj['repositories_url'] = repositoriesUrl;
      obj['repository_selection'] = repositorySelection;
      obj['single_file_name'] = singleFileName;
    }
    /**
     * Constructs a <code>ScopedInstallation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScopedInstallation} obj Optional instance to populate.
     * @return {module:model/ScopedInstallation} The populated <code>ScopedInstallation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScopedInstallation();

        if (data.hasOwnProperty('account')) {
          obj['account'] = _SimpleUser["default"].constructFromObject(data['account']);
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], Object);
        }

        if (data.hasOwnProperty('repositories_url')) {
          obj['repositories_url'] = _ApiClient["default"].convertToType(data['repositories_url'], 'String');
        }

        if (data.hasOwnProperty('repository_selection')) {
          obj['repository_selection'] = _ApiClient["default"].convertToType(data['repository_selection'], 'String');
        }

        if (data.hasOwnProperty('single_file_name')) {
          obj['single_file_name'] = _ApiClient["default"].convertToType(data['single_file_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScopedInstallation;
}();
/**
 * @member {module:model/SimpleUser} account
 */


ScopedInstallation.prototype['account'] = undefined;
/**
 * @member {Object} permissions
 */

ScopedInstallation.prototype['permissions'] = undefined;
/**
 * @member {String} repositories_url
 */

ScopedInstallation.prototype['repositories_url'] = undefined;
/**
 * Describe whether all repositories have been selected or there's a selection involved
 * @member {module:model/ScopedInstallation.RepositorySelectionEnum} repository_selection
 */

ScopedInstallation.prototype['repository_selection'] = undefined;
/**
 * @member {String} single_file_name
 */

ScopedInstallation.prototype['single_file_name'] = undefined;
/**
 * Allowed values for the <code>repository_selection</code> property.
 * @enum {String}
 * @readonly
 */

ScopedInstallation['RepositorySelectionEnum'] = {
  /**
   * value: "all"
   * @const
   */
  "all": "all",

  /**
   * value: "selected"
   * @const
   */
  "selected": "selected"
};
var _default = ScopedInstallation;
exports["default"] = _default;