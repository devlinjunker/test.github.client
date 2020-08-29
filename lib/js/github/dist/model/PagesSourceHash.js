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
 * The PagesSourceHash model module.
 * @module model/PagesSourceHash
 * @version 0.0.5
 */
var PagesSourceHash = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagesSourceHash</code>.
   * @alias module:model/PagesSourceHash
   * @param branch {String} 
   * @param path {String} 
   */
  function PagesSourceHash(branch, path) {
    _classCallCheck(this, PagesSourceHash);

    PagesSourceHash.initialize(this, branch, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagesSourceHash, null, [{
    key: "initialize",
    value: function initialize(obj, branch, path) {
      obj['branch'] = branch;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>PagesSourceHash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagesSourceHash} obj Optional instance to populate.
     * @return {module:model/PagesSourceHash} The populated <code>PagesSourceHash</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagesSourceHash();

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _ApiClient["default"].convertToType(data['branch'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PagesSourceHash;
}();
/**
 * @member {String} branch
 */


PagesSourceHash.prototype['branch'] = undefined;
/**
 * @member {String} path
 */

PagesSourceHash.prototype['path'] = undefined;
var _default = PagesSourceHash;
exports["default"] = _default;