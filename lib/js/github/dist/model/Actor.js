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
 * The Actor model module.
 * @module model/Actor
 * @version 0.0.5
 */
var Actor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Actor</code>.
   * Actor
   * @alias module:model/Actor
   * @param avatarUrl {String} 
   * @param gravatarId {String} 
   * @param id {Number} 
   * @param login {String} 
   * @param url {String} 
   */
  function Actor(avatarUrl, gravatarId, id, login, url) {
    _classCallCheck(this, Actor);

    Actor.initialize(this, avatarUrl, gravatarId, id, login, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Actor, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrl, gravatarId, id, login, url) {
      obj['avatar_url'] = avatarUrl;
      obj['gravatar_id'] = gravatarId;
      obj['id'] = id;
      obj['login'] = login;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Actor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Actor} obj Optional instance to populate.
     * @return {module:model/Actor} The populated <code>Actor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Actor();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('display_login')) {
          obj['display_login'] = _ApiClient["default"].convertToType(data['display_login'], 'String');
        }

        if (data.hasOwnProperty('gravatar_id')) {
          obj['gravatar_id'] = _ApiClient["default"].convertToType(data['gravatar_id'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Actor;
}();
/**
 * @member {String} avatar_url
 */


Actor.prototype['avatar_url'] = undefined;
/**
 * @member {String} display_login
 */

Actor.prototype['display_login'] = undefined;
/**
 * @member {String} gravatar_id
 */

Actor.prototype['gravatar_id'] = undefined;
/**
 * @member {Number} id
 */

Actor.prototype['id'] = undefined;
/**
 * @member {String} login
 */

Actor.prototype['login'] = undefined;
/**
 * @member {String} url
 */

Actor.prototype['url'] = undefined;
var _default = Actor;
exports["default"] = _default;