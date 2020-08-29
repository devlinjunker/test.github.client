"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CodeOfConductSimple = _interopRequireDefault(require("./CodeOfConductSimple"));

var _CommunityHealthFile = _interopRequireDefault(require("./CommunityHealthFile"));

var _LicenseSimple = _interopRequireDefault(require("./LicenseSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommunityProfileFiles model module.
 * @module model/CommunityProfileFiles
 * @version 0.0.5
 */
var CommunityProfileFiles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommunityProfileFiles</code>.
   * @alias module:model/CommunityProfileFiles
   * @param codeOfConduct {module:model/CodeOfConductSimple} 
   * @param contributing {module:model/CommunityHealthFile} 
   * @param issueTemplate {module:model/CommunityHealthFile} 
   * @param license {module:model/LicenseSimple} 
   * @param pullRequestTemplate {module:model/CommunityHealthFile} 
   * @param readme {module:model/CommunityHealthFile} 
   */
  function CommunityProfileFiles(codeOfConduct, contributing, issueTemplate, license, pullRequestTemplate, readme) {
    _classCallCheck(this, CommunityProfileFiles);

    CommunityProfileFiles.initialize(this, codeOfConduct, contributing, issueTemplate, license, pullRequestTemplate, readme);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommunityProfileFiles, null, [{
    key: "initialize",
    value: function initialize(obj, codeOfConduct, contributing, issueTemplate, license, pullRequestTemplate, readme) {
      obj['code_of_conduct'] = codeOfConduct;
      obj['contributing'] = contributing;
      obj['issue_template'] = issueTemplate;
      obj['license'] = license;
      obj['pull_request_template'] = pullRequestTemplate;
      obj['readme'] = readme;
    }
    /**
     * Constructs a <code>CommunityProfileFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommunityProfileFiles} obj Optional instance to populate.
     * @return {module:model/CommunityProfileFiles} The populated <code>CommunityProfileFiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommunityProfileFiles();

        if (data.hasOwnProperty('code_of_conduct')) {
          obj['code_of_conduct'] = _ApiClient["default"].convertToType(data['code_of_conduct'], _CodeOfConductSimple["default"]);
        }

        if (data.hasOwnProperty('contributing')) {
          obj['contributing'] = _ApiClient["default"].convertToType(data['contributing'], _CommunityHealthFile["default"]);
        }

        if (data.hasOwnProperty('issue_template')) {
          obj['issue_template'] = _ApiClient["default"].convertToType(data['issue_template'], _CommunityHealthFile["default"]);
        }

        if (data.hasOwnProperty('license')) {
          obj['license'] = _ApiClient["default"].convertToType(data['license'], _LicenseSimple["default"]);
        }

        if (data.hasOwnProperty('pull_request_template')) {
          obj['pull_request_template'] = _ApiClient["default"].convertToType(data['pull_request_template'], _CommunityHealthFile["default"]);
        }

        if (data.hasOwnProperty('readme')) {
          obj['readme'] = _ApiClient["default"].convertToType(data['readme'], _CommunityHealthFile["default"]);
        }
      }

      return obj;
    }
  }]);

  return CommunityProfileFiles;
}();
/**
 * @member {module:model/CodeOfConductSimple} code_of_conduct
 */


CommunityProfileFiles.prototype['code_of_conduct'] = undefined;
/**
 * @member {module:model/CommunityHealthFile} contributing
 */

CommunityProfileFiles.prototype['contributing'] = undefined;
/**
 * @member {module:model/CommunityHealthFile} issue_template
 */

CommunityProfileFiles.prototype['issue_template'] = undefined;
/**
 * @member {module:model/LicenseSimple} license
 */

CommunityProfileFiles.prototype['license'] = undefined;
/**
 * @member {module:model/CommunityHealthFile} pull_request_template
 */

CommunityProfileFiles.prototype['pull_request_template'] = undefined;
/**
 * @member {module:model/CommunityHealthFile} readme
 */

CommunityProfileFiles.prototype['readme'] = undefined;
var _default = CommunityProfileFiles;
exports["default"] = _default;