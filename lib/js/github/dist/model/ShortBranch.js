"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchProtection = _interopRequireDefault(require("./BranchProtection"));

var _CommitSearchResultItemCommitTree = _interopRequireDefault(require("./CommitSearchResultItemCommitTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ShortBranch model module.
 * @module model/ShortBranch
 * @version 0.0.5
 */
var ShortBranch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShortBranch</code>.
   * Short Branch
   * @alias module:model/ShortBranch
   * @param commit {module:model/CommitSearchResultItemCommitTree} 
   * @param name {String} 
   * @param _protected {Boolean} 
   */
  function ShortBranch(commit, name, _protected) {
    _classCallCheck(this, ShortBranch);

    ShortBranch.initialize(this, commit, name, _protected);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShortBranch, null, [{
    key: "initialize",
    value: function initialize(obj, commit, name, _protected) {
      obj['commit'] = commit;
      obj['name'] = name;
      obj['protected'] = _protected;
    }
    /**
     * Constructs a <code>ShortBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShortBranch} obj Optional instance to populate.
     * @return {module:model/ShortBranch} The populated <code>ShortBranch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShortBranch();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _CommitSearchResultItemCommitTree["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('protected')) {
          obj['protected'] = _ApiClient["default"].convertToType(data['protected'], 'Boolean');
        }

        if (data.hasOwnProperty('protection')) {
          obj['protection'] = _BranchProtection["default"].constructFromObject(data['protection']);
        }

        if (data.hasOwnProperty('protection_url')) {
          obj['protection_url'] = _ApiClient["default"].convertToType(data['protection_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ShortBranch;
}();
/**
 * @member {module:model/CommitSearchResultItemCommitTree} commit
 */


ShortBranch.prototype['commit'] = undefined;
/**
 * @member {String} name
 */

ShortBranch.prototype['name'] = undefined;
/**
 * @member {Boolean} protected
 */

ShortBranch.prototype['protected'] = undefined;
/**
 * @member {module:model/BranchProtection} protection
 */

ShortBranch.prototype['protection'] = undefined;
/**
 * @member {String} protection_url
 */

ShortBranch.prototype['protection_url'] = undefined;
var _default = ShortBranch;
exports["default"] = _default;