"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StarredRepository model module.
 * @module model/StarredRepository
 * @version 0.0.5
 */
var StarredRepository = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StarredRepository</code>.
   * Starred Repository
   * @alias module:model/StarredRepository
   * @param repo {module:model/Repository} 
   * @param starredAt {Date} 
   */
  function StarredRepository(repo, starredAt) {
    _classCallCheck(this, StarredRepository);

    StarredRepository.initialize(this, repo, starredAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StarredRepository, null, [{
    key: "initialize",
    value: function initialize(obj, repo, starredAt) {
      obj['repo'] = repo;
      obj['starred_at'] = starredAt;
    }
    /**
     * Constructs a <code>StarredRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StarredRepository} obj Optional instance to populate.
     * @return {module:model/StarredRepository} The populated <code>StarredRepository</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StarredRepository();

        if (data.hasOwnProperty('repo')) {
          obj['repo'] = _Repository["default"].constructFromObject(data['repo']);
        }

        if (data.hasOwnProperty('starred_at')) {
          obj['starred_at'] = _ApiClient["default"].convertToType(data['starred_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return StarredRepository;
}();
/**
 * @member {module:model/Repository} repo
 */


StarredRepository.prototype['repo'] = undefined;
/**
 * @member {Date} starred_at
 */

StarredRepository.prototype['starred_at'] = undefined;
var _default = StarredRepository;
exports["default"] = _default;