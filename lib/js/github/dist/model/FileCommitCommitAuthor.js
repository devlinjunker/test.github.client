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
 * The FileCommitCommitAuthor model module.
 * @module model/FileCommitCommitAuthor
 * @version 0.0.5
 */
var FileCommitCommitAuthor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileCommitCommitAuthor</code>.
   * @alias module:model/FileCommitCommitAuthor
   */
  function FileCommitCommitAuthor() {
    _classCallCheck(this, FileCommitCommitAuthor);

    FileCommitCommitAuthor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileCommitCommitAuthor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileCommitCommitAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileCommitCommitAuthor} obj Optional instance to populate.
     * @return {module:model/FileCommitCommitAuthor} The populated <code>FileCommitCommitAuthor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileCommitCommitAuthor();

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

  return FileCommitCommitAuthor;
}();
/**
 * @member {String} date
 */


FileCommitCommitAuthor.prototype['date'] = undefined;
/**
 * @member {String} email
 */

FileCommitCommitAuthor.prototype['email'] = undefined;
/**
 * @member {String} name
 */

FileCommitCommitAuthor.prototype['name'] = undefined;
var _default = FileCommitCommitAuthor;
exports["default"] = _default;