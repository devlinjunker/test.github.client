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
 * The IssueEventRename model module.
 * @module model/IssueEventRename
 * @version 0.0.5
 */
var IssueEventRename = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEventRename</code>.
   * Issue Event Rename
   * @alias module:model/IssueEventRename
   * @param from {String} 
   * @param to {String} 
   */
  function IssueEventRename(from, to) {
    _classCallCheck(this, IssueEventRename);

    IssueEventRename.initialize(this, from, to);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventRename, null, [{
    key: "initialize",
    value: function initialize(obj, from, to) {
      obj['from'] = from;
      obj['to'] = to;
    }
    /**
     * Constructs a <code>IssueEventRename</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventRename} obj Optional instance to populate.
     * @return {module:model/IssueEventRename} The populated <code>IssueEventRename</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventRename();

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventRename;
}();
/**
 * @member {String} from
 */


IssueEventRename.prototype['from'] = undefined;
/**
 * @member {String} to
 */

IssueEventRename.prototype['to'] = undefined;
var _default = IssueEventRename;
exports["default"] = _default;