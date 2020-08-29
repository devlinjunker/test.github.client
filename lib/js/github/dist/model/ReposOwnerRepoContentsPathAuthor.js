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
 * The ReposOwnerRepoContentsPathAuthor model module.
 * @module model/ReposOwnerRepoContentsPathAuthor
 * @version 0.0.5
 */
var ReposOwnerRepoContentsPathAuthor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoContentsPathAuthor</code>.
   * The author of the file. Default: The &#x60;committer&#x60; or the authenticated user if you omit &#x60;committer&#x60;.
   * @alias module:model/ReposOwnerRepoContentsPathAuthor
   * @param email {String} The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
   * @param name {String} The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
   */
  function ReposOwnerRepoContentsPathAuthor(email, name) {
    _classCallCheck(this, ReposOwnerRepoContentsPathAuthor);

    ReposOwnerRepoContentsPathAuthor.initialize(this, email, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoContentsPathAuthor, null, [{
    key: "initialize",
    value: function initialize(obj, email, name) {
      obj['email'] = email;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>ReposOwnerRepoContentsPathAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoContentsPathAuthor} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoContentsPathAuthor} The populated <code>ReposOwnerRepoContentsPathAuthor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoContentsPathAuthor();

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReposOwnerRepoContentsPathAuthor;
}();
/**
 * @member {String} date
 */


ReposOwnerRepoContentsPathAuthor.prototype['date'] = undefined;
/**
 * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
 * @member {String} email
 */

ReposOwnerRepoContentsPathAuthor.prototype['email'] = undefined;
/**
 * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
 * @member {String} name
 */

ReposOwnerRepoContentsPathAuthor.prototype['name'] = undefined;
var _default = ReposOwnerRepoContentsPathAuthor;
exports["default"] = _default;