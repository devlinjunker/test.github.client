"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchRestrictionPolicyUsers = _interopRequireDefault(require("./BranchRestrictionPolicyUsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistFullAllOfForks model module.
 * @module model/GistFullAllOfForks
 * @version 0.0.5
 */
var GistFullAllOfForks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistFullAllOfForks</code>.
   * @alias module:model/GistFullAllOfForks
   */
  function GistFullAllOfForks() {
    _classCallCheck(this, GistFullAllOfForks);

    GistFullAllOfForks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistFullAllOfForks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistFullAllOfForks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistFullAllOfForks} obj Optional instance to populate.
     * @return {module:model/GistFullAllOfForks} The populated <code>GistFullAllOfForks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistFullAllOfForks();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _BranchRestrictionPolicyUsers["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return GistFullAllOfForks;
}();
/**
 * @member {String} created_at
 */


GistFullAllOfForks.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

GistFullAllOfForks.prototype['id'] = undefined;
/**
 * @member {String} updated_at
 */

GistFullAllOfForks.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

GistFullAllOfForks.prototype['url'] = undefined;
/**
 * @member {module:model/BranchRestrictionPolicyUsers} user
 */

GistFullAllOfForks.prototype['user'] = undefined;
var _default = GistFullAllOfForks;
exports["default"] = _default;