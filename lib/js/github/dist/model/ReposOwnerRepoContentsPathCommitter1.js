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
 * The ReposOwnerRepoContentsPathCommitter1 model module.
 * @module model/ReposOwnerRepoContentsPathCommitter1
 * @version 0.0.5
 */
var ReposOwnerRepoContentsPathCommitter1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoContentsPathCommitter1</code>.
   * object containing information about the committer.
   * @alias module:model/ReposOwnerRepoContentsPathCommitter1
   */
  function ReposOwnerRepoContentsPathCommitter1() {
    _classCallCheck(this, ReposOwnerRepoContentsPathCommitter1);

    ReposOwnerRepoContentsPathCommitter1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoContentsPathCommitter1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReposOwnerRepoContentsPathCommitter1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoContentsPathCommitter1} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoContentsPathCommitter1} The populated <code>ReposOwnerRepoContentsPathCommitter1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoContentsPathCommitter1();

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

  return ReposOwnerRepoContentsPathCommitter1;
}();
/**
 * The email of the author (or committer) of the commit
 * @member {String} email
 */


ReposOwnerRepoContentsPathCommitter1.prototype['email'] = undefined;
/**
 * The name of the author (or committer) of the commit
 * @member {String} name
 */

ReposOwnerRepoContentsPathCommitter1.prototype['name'] = undefined;
var _default = ReposOwnerRepoContentsPathCommitter1;
exports["default"] = _default;