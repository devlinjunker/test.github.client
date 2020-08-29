"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileCommitCommit = _interopRequireDefault(require("./FileCommitCommit"));

var _FileCommitContent = _interopRequireDefault(require("./FileCommitContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FileCommit model module.
 * @module model/FileCommit
 * @version 0.0.5
 */
var FileCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileCommit</code>.
   * File Commit
   * @alias module:model/FileCommit
   */
  function FileCommit() {
    _classCallCheck(this, FileCommit);

    FileCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileCommit} obj Optional instance to populate.
     * @return {module:model/FileCommit} The populated <code>FileCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileCommit();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _FileCommitCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _FileCommitContent["default"].constructFromObject(data['content']);
        }
      }

      return obj;
    }
  }]);

  return FileCommit;
}();
/**
 * @member {module:model/FileCommitCommit} commit
 */


FileCommit.prototype['commit'] = undefined;
/**
 * @member {module:model/FileCommitContent} content
 */

FileCommit.prototype['content'] = undefined;
var _default = FileCommit;
exports["default"] = _default;