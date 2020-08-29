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
 * The Stargazer model module.
 * @module model/Stargazer
 * @version 0.0.5
 */
var Stargazer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Stargazer</code>.
   * Stargazer
   * @alias module:model/Stargazer
   * @param starredAt {Date} 
   * @param user {module:model/SimpleUser} 
   */
  function Stargazer(starredAt, user) {
    _classCallCheck(this, Stargazer);

    Stargazer.initialize(this, starredAt, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Stargazer, null, [{
    key: "initialize",
    value: function initialize(obj, starredAt, user) {
      obj['starred_at'] = starredAt;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>Stargazer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stargazer} obj Optional instance to populate.
     * @return {module:model/Stargazer} The populated <code>Stargazer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Stargazer();

        if (data.hasOwnProperty('starred_at')) {
          obj['starred_at'] = _ApiClient["default"].convertToType(data['starred_at'], 'Date');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return Stargazer;
}();
/**
 * @member {Date} starred_at
 */


Stargazer.prototype['starred_at'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

Stargazer.prototype['user'] = undefined;
var _default = Stargazer;
exports["default"] = _default;