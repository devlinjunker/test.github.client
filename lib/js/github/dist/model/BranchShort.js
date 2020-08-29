"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchShortCommit = _interopRequireDefault(require("./BranchShortCommit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchShort model module.
 * @module model/BranchShort
 * @version 0.0.5
 */
var BranchShort = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchShort</code>.
   * Branch Short
   * @alias module:model/BranchShort
   */
  function BranchShort() {
    _classCallCheck(this, BranchShort);

    BranchShort.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchShort, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchShort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchShort} obj Optional instance to populate.
     * @return {module:model/BranchShort} The populated <code>BranchShort</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchShort();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _BranchShortCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('protected')) {
          obj['protected'] = _ApiClient["default"].convertToType(data['protected'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return BranchShort;
}();
/**
 * @member {module:model/BranchShortCommit} commit
 */


BranchShort.prototype['commit'] = undefined;
/**
 * @member {String} name
 */

BranchShort.prototype['name'] = undefined;
/**
 * @member {Boolean} protected
 */

BranchShort.prototype['protected'] = undefined;
var _default = BranchShort;
exports["default"] = _default;