"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PageBuildError = _interopRequireDefault(require("./PageBuildError"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PageBuild model module.
 * @module model/PageBuild
 * @version 0.0.5
 */
var PageBuild = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PageBuild</code>.
   * Page Build
   * @alias module:model/PageBuild
   * @param commit {String} 
   * @param createdAt {Date} 
   * @param duration {Number} 
   * @param error {module:model/PageBuildError} 
   * @param pusher {module:model/SimpleUser} 
   * @param status {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function PageBuild(commit, createdAt, duration, error, pusher, status, updatedAt, url) {
    _classCallCheck(this, PageBuild);

    PageBuild.initialize(this, commit, createdAt, duration, error, pusher, status, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PageBuild, null, [{
    key: "initialize",
    value: function initialize(obj, commit, createdAt, duration, error, pusher, status, updatedAt, url) {
      obj['commit'] = commit;
      obj['created_at'] = createdAt;
      obj['duration'] = duration;
      obj['error'] = error;
      obj['pusher'] = pusher;
      obj['status'] = status;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>PageBuild</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageBuild} obj Optional instance to populate.
     * @return {module:model/PageBuild} The populated <code>PageBuild</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PageBuild();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _ApiClient["default"].convertToType(data['commit'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Number');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _PageBuildError["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('pusher')) {
          obj['pusher'] = _ApiClient["default"].convertToType(data['pusher'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PageBuild;
}();
/**
 * @member {String} commit
 */


PageBuild.prototype['commit'] = undefined;
/**
 * @member {Date} created_at
 */

PageBuild.prototype['created_at'] = undefined;
/**
 * @member {Number} duration
 */

PageBuild.prototype['duration'] = undefined;
/**
 * @member {module:model/PageBuildError} error
 */

PageBuild.prototype['error'] = undefined;
/**
 * @member {module:model/SimpleUser} pusher
 */

PageBuild.prototype['pusher'] = undefined;
/**
 * @member {String} status
 */

PageBuild.prototype['status'] = undefined;
/**
 * @member {Date} updated_at
 */

PageBuild.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

PageBuild.prototype['url'] = undefined;
var _default = PageBuild;
exports["default"] = _default;