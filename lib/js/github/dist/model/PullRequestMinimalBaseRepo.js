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
 * The PullRequestMinimalBaseRepo model module.
 * @module model/PullRequestMinimalBaseRepo
 * @version 0.0.5
 */
var PullRequestMinimalBaseRepo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestMinimalBaseRepo</code>.
   * @alias module:model/PullRequestMinimalBaseRepo
   * @param id {Number} 
   * @param name {String} 
   * @param url {String} 
   */
  function PullRequestMinimalBaseRepo(id, name, url) {
    _classCallCheck(this, PullRequestMinimalBaseRepo);

    PullRequestMinimalBaseRepo.initialize(this, id, name, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestMinimalBaseRepo, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, url) {
      obj['id'] = id;
      obj['name'] = name;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>PullRequestMinimalBaseRepo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestMinimalBaseRepo} obj Optional instance to populate.
     * @return {module:model/PullRequestMinimalBaseRepo} The populated <code>PullRequestMinimalBaseRepo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestMinimalBaseRepo();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullRequestMinimalBaseRepo;
}();
/**
 * @member {Number} id
 */


PullRequestMinimalBaseRepo.prototype['id'] = undefined;
/**
 * @member {String} name
 */

PullRequestMinimalBaseRepo.prototype['name'] = undefined;
/**
 * @member {String} url
 */

PullRequestMinimalBaseRepo.prototype['url'] = undefined;
var _default = PullRequestMinimalBaseRepo;
exports["default"] = _default;