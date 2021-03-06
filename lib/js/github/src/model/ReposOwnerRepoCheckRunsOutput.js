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
import ReposOwnerRepoCheckRunsOutputAnnotations from './ReposOwnerRepoCheckRunsOutputAnnotations';
import ReposOwnerRepoCheckRunsOutputImages from './ReposOwnerRepoCheckRunsOutputImages';

/**
 * The ReposOwnerRepoCheckRunsOutput model module.
 * @module model/ReposOwnerRepoCheckRunsOutput
 * @version 0.0.5
 */
class ReposOwnerRepoCheckRunsOutput {
    /**
     * Constructs a new <code>ReposOwnerRepoCheckRunsOutput</code>.
     * Check runs can accept a variety of data in the &#x60;output&#x60; object, including a &#x60;title&#x60; and &#x60;summary&#x60; and can optionally provide descriptive details about the run. See the [&#x60;output&#x60; object](https://developer.github.com/v3/checks/runs/#output-object) description.
     * @alias module:model/ReposOwnerRepoCheckRunsOutput
     * @param summary {String} The summary of the check run. This parameter supports Markdown.
     * @param title {String} The title of the check run.
     */
    constructor(summary, title) { 
        
        ReposOwnerRepoCheckRunsOutput.initialize(this, summary, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, summary, title) { 
        obj['summary'] = summary;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>ReposOwnerRepoCheckRunsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoCheckRunsOutput} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoCheckRunsOutput} The populated <code>ReposOwnerRepoCheckRunsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposOwnerRepoCheckRunsOutput();

            if (data.hasOwnProperty('annotations')) {
                obj['annotations'] = ApiClient.convertToType(data['annotations'], [ReposOwnerRepoCheckRunsOutputAnnotations]);
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [ReposOwnerRepoCheckRunsOutputImages]);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see \"[About status checks](https://help.github.com/articles/about-status-checks#checks)\". See the [`annotations` object](https://developer.github.com/v3/checks/runs/#annotations-object) description for details about how to use this parameter.
 * @member {Array.<module:model/ReposOwnerRepoCheckRunsOutputAnnotations>} annotations
 */
ReposOwnerRepoCheckRunsOutput.prototype['annotations'] = undefined;

/**
 * Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://developer.github.com/v3/checks/runs/#images-object) description for details.
 * @member {Array.<module:model/ReposOwnerRepoCheckRunsOutputImages>} images
 */
ReposOwnerRepoCheckRunsOutput.prototype['images'] = undefined;

/**
 * The summary of the check run. This parameter supports Markdown.
 * @member {String} summary
 */
ReposOwnerRepoCheckRunsOutput.prototype['summary'] = undefined;

/**
 * The details of the check run. This parameter supports Markdown.
 * @member {String} text
 */
ReposOwnerRepoCheckRunsOutput.prototype['text'] = undefined;

/**
 * The title of the check run.
 * @member {String} title
 */
ReposOwnerRepoCheckRunsOutput.prototype['title'] = undefined;






export default ReposOwnerRepoCheckRunsOutput;

