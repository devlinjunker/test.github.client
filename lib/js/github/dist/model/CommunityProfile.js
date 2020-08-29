"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommunityProfileFiles = _interopRequireDefault(require("./CommunityProfileFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommunityProfile model module.
 * @module model/CommunityProfile
 * @version 0.0.5
 */
var CommunityProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommunityProfile</code>.
   * Community Profile
   * @alias module:model/CommunityProfile
   * @param description {String} 
   * @param documentation {String} 
   * @param files {module:model/CommunityProfileFiles} 
   * @param healthPercentage {Number} 
   * @param updatedAt {Date} 
   */
  function CommunityProfile(description, documentation, files, healthPercentage, updatedAt) {
    _classCallCheck(this, CommunityProfile);

    CommunityProfile.initialize(this, description, documentation, files, healthPercentage, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommunityProfile, null, [{
    key: "initialize",
    value: function initialize(obj, description, documentation, files, healthPercentage, updatedAt) {
      obj['description'] = description;
      obj['documentation'] = documentation;
      obj['files'] = files;
      obj['health_percentage'] = healthPercentage;
      obj['updated_at'] = updatedAt;
    }
    /**
     * Constructs a <code>CommunityProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommunityProfile} obj Optional instance to populate.
     * @return {module:model/CommunityProfile} The populated <code>CommunityProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommunityProfile();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('documentation')) {
          obj['documentation'] = _ApiClient["default"].convertToType(data['documentation'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _CommunityProfileFiles["default"].constructFromObject(data['files']);
        }

        if (data.hasOwnProperty('health_percentage')) {
          obj['health_percentage'] = _ApiClient["default"].convertToType(data['health_percentage'], 'Number');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return CommunityProfile;
}();
/**
 * @member {String} description
 */


CommunityProfile.prototype['description'] = undefined;
/**
 * @member {String} documentation
 */

CommunityProfile.prototype['documentation'] = undefined;
/**
 * @member {module:model/CommunityProfileFiles} files
 */

CommunityProfile.prototype['files'] = undefined;
/**
 * @member {Number} health_percentage
 */

CommunityProfile.prototype['health_percentage'] = undefined;
/**
 * @member {Date} updated_at
 */

CommunityProfile.prototype['updated_at'] = undefined;
var _default = CommunityProfile;
exports["default"] = _default;