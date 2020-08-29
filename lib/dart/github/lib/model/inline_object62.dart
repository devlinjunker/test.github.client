part of openapi.api;

class InlineObject62 {
  /* Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. */
  bool autoMerge = true;
  
  String createdAt = null;
  /* Short description of the deployment. */
  String description = "";
  /* Name for the target deployment environment (e.g., `production`, `staging`, `qa`). */
  String environment = "production";
  /* JSON payload with extra information about the deployment. */
  String payload = "";
  /* Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. */
  bool productionEnvironment = null;
  /* The ref to deploy. This can be a branch, tag, or SHA. */
  String ref = null;
  /* The [status](https://developer.github.com/v3/repos/statuses/) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts. */
  List<String> requiredContexts = [];
  /* Specifies a task to execute (e.g., `deploy` or `deploy:migrations`). */
  String task = "deploy";
  /* Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`   **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. */
  bool transientEnvironment = false;

  InlineObject62({
    this.autoMerge,
    this.createdAt,
    this.description,
    this.environment,
    this.payload,
    this.productionEnvironment,
    this.ref,
    this.requiredContexts,
    this.task,
    this.transientEnvironment,
  });

  @override
  String toString() {
    return 'InlineObject62[autoMerge=$autoMerge, createdAt=$createdAt, description=$description, environment=$environment, payload=$payload, productionEnvironment=$productionEnvironment, ref=$ref, requiredContexts=$requiredContexts, task=$task, transientEnvironment=$transientEnvironment, ]';
  }

  InlineObject62.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    autoMerge = json['auto_merge'];
    createdAt = json['created_at'];
    description = json['description'];
    environment = json['environment'];
    payload = json['payload'];
    productionEnvironment = json['production_environment'];
    ref = json['ref'];
    requiredContexts = (json['required_contexts'] == null) ?
      null :
      (json['required_contexts'] as List).cast<String>();
    task = json['task'];
    transientEnvironment = json['transient_environment'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (autoMerge != null)
      json['auto_merge'] = autoMerge;
    if (createdAt != null)
      json['created_at'] = createdAt;
      json['description'] = description;
    if (environment != null)
      json['environment'] = environment;
    if (payload != null)
      json['payload'] = payload;
    if (productionEnvironment != null)
      json['production_environment'] = productionEnvironment;
    if (ref != null)
      json['ref'] = ref;
    if (requiredContexts != null)
      json['required_contexts'] = requiredContexts;
    if (task != null)
      json['task'] = task;
    if (transientEnvironment != null)
      json['transient_environment'] = transientEnvironment;
    return json;
  }

  static List<InlineObject62> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject62>() : json.map((value) => InlineObject62.fromJson(value)).toList();
  }

  static Map<String, InlineObject62> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject62>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject62.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject62-objects as value to a dart map
  static Map<String, List<InlineObject62>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject62>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject62.listFromJson(value);
       });
     }
     return map;
  }
}

