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
 * The ReposOwnerRepoPagesSource model module.
 * @module model/ReposOwnerRepoPagesSource
 * @version 0.0.5
 */
var ReposOwnerRepoPagesSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoPagesSource</code>.
   * @alias module:model/ReposOwnerRepoPagesSource
   */
  function ReposOwnerRepoPagesSource() {
    _classCallCheck(this, ReposOwnerRepoPagesSource);

    ReposOwnerRepoPagesSource.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoPagesSource, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReposOwnerRepoPagesSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoPagesSource} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoPagesSource} The populated <code>ReposOwnerRepoPagesSource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoPagesSource();

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

  return ReposOwnerRepoPagesSource;
}();
/**
 * The repository branch used to publish your [site's source files](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/). Can be either `master` or `gh-pages`.
 * @member {module:model/ReposOwnerRepoPagesSource.BranchEnum} branch
 */


ReposOwnerRepoPagesSource.prototype['branch'] = undefined;
/**
 * The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`.
 * @member {String} path
 */

ReposOwnerRepoPagesSource.prototype['path'] = undefined;
/**
 * Allowed values for the <code>branch</code> property.
 * @enum {String}
 * @readonly
 */

ReposOwnerRepoPagesSource['BranchEnum'] = {
  /**
   * value: "master"
   * @const
   */
  "master": "master",

  /**
   * value: "gh-pages"
   * @const
   */
  "gh-pages": "gh-pages"
};
var _default = ReposOwnerRepoPagesSource;
exports["default"] = _default;