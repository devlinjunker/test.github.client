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
 * The GitTagObject model module.
 * @module model/GitTagObject
 * @version 0.0.5
 */
var GitTagObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GitTagObject</code>.
   * @alias module:model/GitTagObject
   * @param sha {String} 
   * @param type {String} 
   * @param url {String} 
   */
  function GitTagObject(sha, type, url) {
    _classCallCheck(this, GitTagObject);

    GitTagObject.initialize(this, sha, type, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GitTagObject, null, [{
    key: "initialize",
    value: function initialize(obj, sha, type, url) {
      obj['sha'] = sha;
      obj['type'] = type;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>GitTagObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitTagObject} obj Optional instance to populate.
     * @return {module:model/GitTagObject} The populated <code>GitTagObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GitTagObject();

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GitTagObject;
}();
/**
 * @member {String} sha
 */


GitTagObject.prototype['sha'] = undefined;
/**
 * @member {String} type
 */

GitTagObject.prototype['type'] = undefined;
/**
 * @member {String} url
 */

GitTagObject.prototype['url'] = undefined;
var _default = GitTagObject;
exports["default"] = _default;