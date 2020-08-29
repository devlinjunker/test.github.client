"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationGrantApp = _interopRequireDefault(require("./ApplicationGrantApp"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationGrant model module.
 * @module model/ApplicationGrant
 * @version 0.0.5
 */
var ApplicationGrant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationGrant</code>.
   * The authorization associated with an OAuth Access.
   * @alias module:model/ApplicationGrant
   * @param app {module:model/ApplicationGrantApp} 
   * @param createdAt {Date} 
   * @param id {Number} 
   * @param scopes {Array.<String>} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function ApplicationGrant(app, createdAt, id, scopes, updatedAt, url) {
    _classCallCheck(this, ApplicationGrant);

    ApplicationGrant.initialize(this, app, createdAt, id, scopes, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationGrant, null, [{
    key: "initialize",
    value: function initialize(obj, app, createdAt, id, scopes, updatedAt, url) {
      obj['app'] = app;
      obj['created_at'] = createdAt;
      obj['id'] = id;
      obj['scopes'] = scopes;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ApplicationGrant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationGrant} obj Optional instance to populate.
     * @return {module:model/ApplicationGrant} The populated <code>ApplicationGrant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationGrant();

        if (data.hasOwnProperty('app')) {
          obj['app'] = _ApplicationGrantApp["default"].constructFromObject(data['app']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], ['String']);
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return ApplicationGrant;
}();
/**
 * @member {module:model/ApplicationGrantApp} app
 */


ApplicationGrant.prototype['app'] = undefined;
/**
 * @member {Date} created_at
 */

ApplicationGrant.prototype['created_at'] = undefined;
/**
 * @member {Number} id
 */

ApplicationGrant.prototype['id'] = undefined;
/**
 * @member {Array.<String>} scopes
 */

ApplicationGrant.prototype['scopes'] = undefined;
/**
 * @member {Date} updated_at
 */

ApplicationGrant.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

ApplicationGrant.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

ApplicationGrant.prototype['user'] = undefined;
var _default = ApplicationGrant;
exports["default"] = _default;