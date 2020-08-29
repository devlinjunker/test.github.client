part of openapi.api;

class InlineObject63 {
  /* Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`   **Note:** To add an `inactive` status to `production` environments, you must use the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type.   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. */
  bool autoInactive = null;
  /* A short description of the status. The maximum description length is 140 characters. */
  String description = "";
  /* Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`. **Note:** This parameter requires you to use the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type. */
  String environment = null;
  //enum environmentEnum {  production,  staging,  qa,  };{
  /* Sets the URL for accessing your environment. Default: `\"\"`   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. */
  String environmentUrl = "";
  /* The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `\"\"`   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. */
  String logUrl = "";
  /* The state of the status. Can be one of `error`, `failure`, `inactive`, `in_progress`, `queued` `pending`, or `success`. **Note:** To use the `inactive` state, you must provide the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. To use the `in_progress` and `queued` states, you must provide the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub. */
  String state = null;
  //enum stateEnum {  error,  failure,  inactive,  in_progress,  queued,  pending,  success,  };{
  /* The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`. */
  String targetUrl = "";

  InlineObject63({
    this.autoInactive,
    this.description,
    this.environment,
    this.environmentUrl,
    this.logUrl,
    this.state,
    this.targetUrl,
  });

  @override
  String toString() {
    return 'InlineObject63[autoInactive=$autoInactive, description=$description, environment=$environment, environmentUrl=$environmentUrl, logUrl=$logUrl, state=$state, targetUrl=$targetUrl, ]';
  }

  InlineObject63.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    autoInactive = json['auto_inactive'];
    description = json['description'];
    environment = json['environment'];
    environmentUrl = json['environment_url'];
    logUrl = json['log_url'];
    state = json['state'];
    targetUrl = json['target_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (autoInactive != null)
      json['auto_inactive'] = autoInactive;
    if (description != null)
      json['description'] = description;
    if (environment != null)
      json['environment'] = environment;
    if (environmentUrl != null)
      json['environment_url'] = environmentUrl;
    if (logUrl != null)
      json['log_url'] = logUrl;
    if (state != null)
      json['state'] = state;
    if (targetUrl != null)
      json['target_url'] = targetUrl;
    return json;
  }

  static List<InlineObject63> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject63>() : json.map((value) => InlineObject63.fromJson(value)).toList();
  }

  static Map<String, InlineObject63> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject63>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject63.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject63-objects as value to a dart map
  static Map<String, List<InlineObject63>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject63>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject63.listFromJson(value);
       });
     }
     return map;
  }
}

