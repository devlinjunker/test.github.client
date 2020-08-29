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
 * The DiffEntry model module.
 * @module model/DiffEntry
 * @version 0.0.5
 */
var DiffEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DiffEntry</code>.
   * Diff Entry
   * @alias module:model/DiffEntry
   * @param additions {Number} 
   * @param blobUrl {String} 
   * @param changes {Number} 
   * @param contentsUrl {String} 
   * @param deletions {Number} 
   * @param filename {String} 
   * @param rawUrl {String} 
   * @param sha {String} 
   * @param status {String} 
   */
  function DiffEntry(additions, blobUrl, changes, contentsUrl, deletions, filename, rawUrl, sha, status) {
    _classCallCheck(this, DiffEntry);

    DiffEntry.initialize(this, additions, blobUrl, changes, contentsUrl, deletions, filename, rawUrl, sha, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DiffEntry, null, [{
    key: "initialize",
    value: function initialize(obj, additions, blobUrl, changes, contentsUrl, deletions, filename, rawUrl, sha, status) {
      obj['additions'] = additions;
      obj['blob_url'] = blobUrl;
      obj['changes'] = changes;
      obj['contents_url'] = contentsUrl;
      obj['deletions'] = deletions;
      obj['filename'] = filename;
      obj['raw_url'] = rawUrl;
      obj['sha'] = sha;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>DiffEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiffEntry} obj Optional instance to populate.
     * @return {module:model/DiffEntry} The populated <code>DiffEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiffEntry();

        if (data.hasOwnProperty('additions')) {
          obj['additions'] = _ApiClient["default"].convertToType(data['additions'], 'Number');
        }

        if (data.hasOwnProperty('blob_url')) {
          obj['blob_url'] = _ApiClient["default"].convertToType(data['blob_url'], 'String');
        }

        if (data.hasOwnProperty('changes')) {
          obj['changes'] = _ApiClient["default"].convertToType(data['changes'], 'Number');
        }

        if (data.hasOwnProperty('contents_url')) {
          obj['contents_url'] = _ApiClient["default"].convertToType(data['contents_url'], 'String');
        }

        if (data.hasOwnProperty('deletions')) {
          obj['deletions'] = _ApiClient["default"].convertToType(data['deletions'], 'Number');
        }

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('patch')) {
          obj['patch'] = _ApiClient["default"].convertToType(data['patch'], 'String');
        }

        if (data.hasOwnProperty('previous_filename')) {
          obj['previous_filename'] = _ApiClient["default"].convertToType(data['previous_filename'], 'String');
        }

        if (data.hasOwnProperty('raw_url')) {
          obj['raw_url'] = _ApiClient["default"].convertToType(data['raw_url'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DiffEntry;
}();
/**
 * @member {Number} additions
 */


DiffEntry.prototype['additions'] = undefined;
/**
 * @member {String} blob_url
 */

DiffEntry.prototype['blob_url'] = undefined;
/**
 * @member {Number} changes
 */

DiffEntry.prototype['changes'] = undefined;
/**
 * @member {String} contents_url
 */

DiffEntry.prototype['contents_url'] = undefined;
/**
 * @member {Number} deletions
 */

DiffEntry.prototype['deletions'] = undefined;
/**
 * @member {String} filename
 */

DiffEntry.prototype['filename'] = undefined;
/**
 * @member {String} patch
 */

DiffEntry.prototype['patch'] = undefined;
/**
 * @member {String} previous_filename
 */

DiffEntry.prototype['previous_filename'] = undefined;
/**
 * @member {String} raw_url
 */

DiffEntry.prototype['raw_url'] = undefined;
/**
 * @member {String} sha
 */

DiffEntry.prototype['sha'] = undefined;
/**
 * @member {String} status
 */

DiffEntry.prototype['status'] = undefined;
var _default = DiffEntry;
exports["default"] = _default;