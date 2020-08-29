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
 * The CommitSearchResultItemParents model module.
 * @module model/CommitSearchResultItemParents
 * @version 0.0.5
 */
var CommitSearchResultItemParents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommitSearchResultItemParents</code>.
   * @alias module:model/CommitSearchResultItemParents
   */
  function CommitSearchResultItemParents() {
    _classCallCheck(this, CommitSearchResultItemParents);

    CommitSearchResultItemParents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitSearchResultItemParents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommitSearchResultItemParents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitSearchResultItemParents} obj Optional instance to populate.
     * @return {module:model/CommitSearchResultItemParents} The populated <code>CommitSearchResultItemParents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitSearchResultItemParents();

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitSearchResultItemParents;
}();
/**
 * @member {String} html_url
 */


CommitSearchResultItemParents.prototype['html_url'] = undefined;
/**
 * @member {String} sha
 */

CommitSearchResultItemParents.prototype['sha'] = undefined;
/**
 * @member {String} url
 */

CommitSearchResultItemParents.prototype['url'] = undefined;
var _default = CommitSearchResultItemParents;
exports["default"] = _default;