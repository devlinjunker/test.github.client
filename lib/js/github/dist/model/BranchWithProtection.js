"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchProtection = _interopRequireDefault(require("./BranchProtection"));

var _BranchWithProtectionLinks = _interopRequireDefault(require("./BranchWithProtectionLinks"));

var _Commit = _interopRequireDefault(require("./Commit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchWithProtection model module.
 * @module model/BranchWithProtection
 * @version 0.0.5
 */
var BranchWithProtection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchWithProtection</code>.
   * Branch With Protection
   * @alias module:model/BranchWithProtection
   * @param links {module:model/BranchWithProtectionLinks} 
   * @param commit {module:model/Commit} 
   * @param name {String} 
   * @param _protected {Boolean} 
   * @param protection {module:model/BranchProtection} 
   * @param protectionUrl {String} 
   */
  function BranchWithProtection(links, commit, name, _protected, protection, protectionUrl) {
    _classCallCheck(this, BranchWithProtection);

    BranchWithProtection.initialize(this, links, commit, name, _protected, protection, protectionUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchWithProtection, null, [{
    key: "initialize",
    value: function initialize(obj, links, commit, name, _protected, protection, protectionUrl) {
      obj['_links'] = links;
      obj['commit'] = commit;
      obj['name'] = name;
      obj['protected'] = _protected;
      obj['protection'] = protection;
      obj['protection_url'] = protectionUrl;
    }
    /**
     * Constructs a <code>BranchWithProtection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchWithProtection} obj Optional instance to populate.
     * @return {module:model/BranchWithProtection} The populated <code>BranchWithProtection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchWithProtection();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _BranchWithProtectionLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _Commit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pattern')) {
          obj['pattern'] = _ApiClient["default"].convertToType(data['pattern'], 'String');
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

        if (data.hasOwnProperty('required_approving_review_count')) {
          obj['required_approving_review_count'] = _ApiClient["default"].convertToType(data['required_approving_review_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BranchWithProtection;
}();
/**
 * @member {module:model/BranchWithProtectionLinks} _links
 */


BranchWithProtection.prototype['_links'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

BranchWithProtection.prototype['commit'] = undefined;
/**
 * @member {String} name
 */

BranchWithProtection.prototype['name'] = undefined;
/**
 * @member {String} pattern
 */

BranchWithProtection.prototype['pattern'] = undefined;
/**
 * @member {Boolean} protected
 */

BranchWithProtection.prototype['protected'] = undefined;
/**
 * @member {module:model/BranchProtection} protection
 */

BranchWithProtection.prototype['protection'] = undefined;
/**
 * @member {String} protection_url
 */

BranchWithProtection.prototype['protection_url'] = undefined;
/**
 * @member {Number} required_approving_review_count
 */

BranchWithProtection.prototype['required_approving_review_count'] = undefined;
var _default = BranchWithProtection;
exports["default"] = _default;