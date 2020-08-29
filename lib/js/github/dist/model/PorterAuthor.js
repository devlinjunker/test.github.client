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
 * The PorterAuthor model module.
 * @module model/PorterAuthor
 * @version 0.0.5
 */
var PorterAuthor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PorterAuthor</code>.
   * Porter Author
   * @alias module:model/PorterAuthor
   * @param email {String} 
   * @param id {Number} 
   * @param importUrl {String} 
   * @param name {String} 
   * @param remoteId {String} 
   * @param remoteName {String} 
   * @param url {String} 
   */
  function PorterAuthor(email, id, importUrl, name, remoteId, remoteName, url) {
    _classCallCheck(this, PorterAuthor);

    PorterAuthor.initialize(this, email, id, importUrl, name, remoteId, remoteName, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PorterAuthor, null, [{
    key: "initialize",
    value: function initialize(obj, email, id, importUrl, name, remoteId, remoteName, url) {
      obj['email'] = email;
      obj['id'] = id;
      obj['import_url'] = importUrl;
      obj['name'] = name;
      obj['remote_id'] = remoteId;
      obj['remote_name'] = remoteName;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>PorterAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PorterAuthor} obj Optional instance to populate.
     * @return {module:model/PorterAuthor} The populated <code>PorterAuthor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PorterAuthor();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('import_url')) {
          obj['import_url'] = _ApiClient["default"].convertToType(data['import_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('remote_name')) {
          obj['remote_name'] = _ApiClient["default"].convertToType(data['remote_name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PorterAuthor;
}();
/**
 * @member {String} email
 */


PorterAuthor.prototype['email'] = undefined;
/**
 * @member {Number} id
 */

PorterAuthor.prototype['id'] = undefined;
/**
 * @member {String} import_url
 */

PorterAuthor.prototype['import_url'] = undefined;
/**
 * @member {String} name
 */

PorterAuthor.prototype['name'] = undefined;
/**
 * @member {String} remote_id
 */

PorterAuthor.prototype['remote_id'] = undefined;
/**
 * @member {String} remote_name
 */

PorterAuthor.prototype['remote_name'] = undefined;
/**
 * @member {String} url
 */

PorterAuthor.prototype['url'] = undefined;
var _default = PorterAuthor;
exports["default"] = _default;