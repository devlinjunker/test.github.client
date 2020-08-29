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
 * The PrivateUserPlan model module.
 * @module model/PrivateUserPlan
 * @version 0.0.5
 */
var PrivateUserPlan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrivateUserPlan</code>.
   * @alias module:model/PrivateUserPlan
   * @param collaborators {Number} 
   * @param name {String} 
   * @param privateRepos {Number} 
   * @param space {Number} 
   */
  function PrivateUserPlan(collaborators, name, privateRepos, space) {
    _classCallCheck(this, PrivateUserPlan);

    PrivateUserPlan.initialize(this, collaborators, name, privateRepos, space);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrivateUserPlan, null, [{
    key: "initialize",
    value: function initialize(obj, collaborators, name, privateRepos, space) {
      obj['collaborators'] = collaborators;
      obj['name'] = name;
      obj['private_repos'] = privateRepos;
      obj['space'] = space;
    }
    /**
     * Constructs a <code>PrivateUserPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrivateUserPlan} obj Optional instance to populate.
     * @return {module:model/PrivateUserPlan} The populated <code>PrivateUserPlan</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrivateUserPlan();

        if (data.hasOwnProperty('collaborators')) {
          obj['collaborators'] = _ApiClient["default"].convertToType(data['collaborators'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('private_repos')) {
          obj['private_repos'] = _ApiClient["default"].convertToType(data['private_repos'], 'Number');
        }

        if (data.hasOwnProperty('space')) {
          obj['space'] = _ApiClient["default"].convertToType(data['space'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PrivateUserPlan;
}();
/**
 * @member {Number} collaborators
 */


PrivateUserPlan.prototype['collaborators'] = undefined;
/**
 * @member {String} name
 */

PrivateUserPlan.prototype['name'] = undefined;
/**
 * @member {Number} private_repos
 */

PrivateUserPlan.prototype['private_repos'] = undefined;
/**
 * @member {Number} space
 */

PrivateUserPlan.prototype['space'] = undefined;
var _default = PrivateUserPlan;
exports["default"] = _default;