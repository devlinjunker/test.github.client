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
 * The PorterLargeFile model module.
 * @module model/PorterLargeFile
 * @version 0.0.5
 */
var PorterLargeFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PorterLargeFile</code>.
   * Porter Large File
   * @alias module:model/PorterLargeFile
   * @param oid {String} 
   * @param path {String} 
   * @param refName {String} 
   * @param size {Number} 
   */
  function PorterLargeFile(oid, path, refName, size) {
    _classCallCheck(this, PorterLargeFile);

    PorterLargeFile.initialize(this, oid, path, refName, size);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PorterLargeFile, null, [{
    key: "initialize",
    value: function initialize(obj, oid, path, refName, size) {
      obj['oid'] = oid;
      obj['path'] = path;
      obj['ref_name'] = refName;
      obj['size'] = size;
    }
    /**
     * Constructs a <code>PorterLargeFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PorterLargeFile} obj Optional instance to populate.
     * @return {module:model/PorterLargeFile} The populated <code>PorterLargeFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PorterLargeFile();

        if (data.hasOwnProperty('oid')) {
          obj['oid'] = _ApiClient["default"].convertToType(data['oid'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('ref_name')) {
          obj['ref_name'] = _ApiClient["default"].convertToType(data['ref_name'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PorterLargeFile;
}();
/**
 * @member {String} oid
 */


PorterLargeFile.prototype['oid'] = undefined;
/**
 * @member {String} path
 */

PorterLargeFile.prototype['path'] = undefined;
/**
 * @member {String} ref_name
 */

PorterLargeFile.prototype['ref_name'] = undefined;
/**
 * @member {Number} size
 */

PorterLargeFile.prototype['size'] = undefined;
var _default = PorterLargeFile;
exports["default"] = _default;