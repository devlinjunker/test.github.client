"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestMinimalBase = _interopRequireDefault(require("./PullRequestMinimalBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestMinimal model module.
 * @module model/PullRequestMinimal
 * @version 0.0.5
 */
var PullRequestMinimal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestMinimal</code>.
   * @alias module:model/PullRequestMinimal
   * @param base {module:model/PullRequestMinimalBase} 
   * @param head {module:model/PullRequestMinimalBase} 
   * @param id {Number} 
   * @param _number {Number} 
   * @param url {String} 
   */
  function PullRequestMinimal(base, head, id, _number, url) {
    _classCallCheck(this, PullRequestMinimal);

    PullRequestMinimal.initialize(this, base, head, id, _number, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestMinimal, null, [{
    key: "initialize",
    value: function initialize(obj, base, head, id, _number, url) {
      obj['base'] = base;
      obj['head'] = head;
      obj['id'] = id;
      obj['number'] = _number;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>PullRequestMinimal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestMinimal} obj Optional instance to populate.
     * @return {module:model/PullRequestMinimal} The populated <code>PullRequestMinimal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestMinimal();

        if (data.hasOwnProperty('base')) {
          obj['base'] = _PullRequestMinimalBase["default"].constructFromObject(data['base']);
        }

        if (data.hasOwnProperty('head')) {
          obj['head'] = _PullRequestMinimalBase["default"].constructFromObject(data['head']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullRequestMinimal;
}();
/**
 * @member {module:model/PullRequestMinimalBase} base
 */


PullRequestMinimal.prototype['base'] = undefined;
/**
 * @member {module:model/PullRequestMinimalBase} head
 */

PullRequestMinimal.prototype['head'] = undefined;
/**
 * @member {Number} id
 */

PullRequestMinimal.prototype['id'] = undefined;
/**
 * @member {Number} number
 */

PullRequestMinimal.prototype['number'] = undefined;
/**
 * @member {String} url
 */

PullRequestMinimal.prototype['url'] = undefined;
var _default = PullRequestMinimal;
exports["default"] = _default;