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
 * The ReposOwnerRepoContentsPathCommitter model module.
 * @module model/ReposOwnerRepoContentsPathCommitter
 * @version 0.0.5
 */
var ReposOwnerRepoContentsPathCommitter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoContentsPathCommitter</code>.
   * The person that committed the file. Default: the authenticated user.
   * @alias module:model/ReposOwnerRepoContentsPathCommitter
   * @param email {String} The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
   * @param name {String} The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
   */
  function ReposOwnerRepoContentsPathCommitter(email, name) {
    _classCallCheck(this, ReposOwnerRepoContentsPathCommitter);

    ReposOwnerRepoContentsPathCommitter.initialize(this, email, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoContentsPathCommitter, null, [{
    key: "initialize",
    value: function initialize(obj, email, name) {
      obj['email'] = email;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>ReposOwnerRepoContentsPathCommitter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoContentsPathCommitter} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoContentsPathCommitter} The populated <code>ReposOwnerRepoContentsPathCommitter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoContentsPathCommitter();

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

  return ReposOwnerRepoContentsPathCommitter;
}();
/**
 * @member {String} date
 */


ReposOwnerRepoContentsPathCommitter.prototype['date'] = undefined;
/**
 * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
 * @member {String} email
 */

ReposOwnerRepoContentsPathCommitter.prototype['email'] = undefined;
/**
 * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
 * @member {String} name
 */

ReposOwnerRepoContentsPathCommitter.prototype['name'] = undefined;
var _default = ReposOwnerRepoContentsPathCommitter;
exports["default"] = _default;