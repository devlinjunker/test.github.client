/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PagesSourceHash from './PagesSourceHash';

/**
 * The Page model module.
 * @module model/Page
 * @version 0.0.5
 */
class Page {
    /**
     * Constructs a new <code>Page</code>.
     * The configuration for GitHub Pages for a repository.
     * @alias module:model/Page
     * @param cname {String} The Pages site's custom domain
     * @param custom404 {Boolean} Whether the Page has a custom 404 page.
     * @param status {module:model/Page.StatusEnum} The status of the most recent build of the Page.
     * @param url {String} The API address for accessing this Page resource.
     */
    constructor(cname, custom404, status, url) { 
        
        Page.initialize(this, cname, custom404, status, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cname, custom404, status, url) { 
        obj['cname'] = cname;
        obj['custom_404'] = custom404;
        obj['status'] = status;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Page} obj Optional instance to populate.
     * @return {module:model/Page} The populated <code>Page</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Page();

            if (data.hasOwnProperty('cname')) {
                obj['cname'] = ApiClient.convertToType(data['cname'], 'String');
            }
            if (data.hasOwnProperty('custom_404')) {
                obj['custom_404'] = ApiClient.convertToType(data['custom_404'], 'Boolean');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = PagesSourceHash.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Pages site's custom domain
 * @member {String} cname
 */
Page.prototype['cname'] = undefined;

/**
 * Whether the Page has a custom 404 page.
 * @member {Boolean} custom_404
 * @default false
 */
Page.prototype['custom_404'] = false;

/**
 * The web address the Page can be accessed from.
 * @member {String} html_url
 */
Page.prototype['html_url'] = undefined;

/**
 * @member {module:model/PagesSourceHash} source
 */
Page.prototype['source'] = undefined;

/**
 * The status of the most recent build of the Page.
 * @member {module:model/Page.StatusEnum} status
 */
Page.prototype['status'] = undefined;

/**
 * The API address for accessing this Page resource.
 * @member {String} url
 */
Page.prototype['url'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Page['StatusEnum'] = {

    /**
     * value: "built"
     * @const
     */
    "built": "built",

    /**
     * value: "building"
     * @const
     */
    "building": "building",

    /**
     * value: "errored"
     * @const
     */
    "errored": "errored"
};



export default Page;
