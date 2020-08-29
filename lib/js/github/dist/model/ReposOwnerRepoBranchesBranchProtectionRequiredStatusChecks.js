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
 * The ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks model module.
 * @module model/ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks
 * @version 0.0.5
 */
var ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks</code>.
   * Require status checks to pass before merging. Set to &#x60;null&#x60; to disable.
   * @alias module:model/ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks
   * @param contexts {Array.<String>} The list of status checks to require in order to merge into this branch
   * @param strict {Boolean} Require branches to be up to date before merging.
   */
  function ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks(contexts, strict) {
    _classCallCheck(this, ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks);

    ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks.initialize(this, contexts, strict);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks, null, [{
    key: "initialize",
    value: function initialize(obj, contexts, strict) {
      obj['contexts'] = contexts;
      obj['strict'] = strict;
    }
    /**
     * Constructs a <code>ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks} The populated <code>ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks();

        if (data.hasOwnProperty('contexts')) {
          obj['contexts'] = _ApiClient["default"].convertToType(data['contexts'], ['String']);
        }

        if (data.hasOwnProperty('strict')) {
          obj['strict'] = _ApiClient["default"].convertToType(data['strict'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks;
}();
/**
 * The list of status checks to require in order to merge into this branch
 * @member {Array.<String>} contexts
 */


ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks.prototype['contexts'] = undefined;
/**
 * Require branches to be up to date before merging.
 * @member {Boolean} strict
 */

ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks.prototype['strict'] = undefined;
var _default = ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks;
exports["default"] = _default;