part of openapi.api;

class Deployment {
  
  DateTime createdAt = null;
  
  SimpleUser creator = null;
  
  String description = null;
  /* Name for the target deployment environment. */
  String environment = null;
  /* Unique identifier of the deployment */
  int id = null;
  
  String nodeId = null;
  
  String originalEnvironment = null;
  
  Object payload = null;
  
  Integration performedViaGithubApp = null;
  /* Specifies if the given environment is one that end-users directly interact with. Default: false. */
  bool productionEnvironment = null;
  /* The ref to deploy. This can be a branch, tag, or sha. */
  String ref = null;
  
  String repositoryUrl = null;
  
  String sha = null;
  
  String statusesUrl = null;
  /* Parameter to specify a task to execute */
  String task = null;
  /* Specifies if the given environment is will no longer exist at some point in hte future. Default: false. */
  bool transientEnvironment = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  Deployment({
    this.createdAt,
    this.creator,
    this.description,
    this.environment,
    this.id,
    this.nodeId,
    this.originalEnvironment,
    this.payload,
    this.performedViaGithubApp,
    this.productionEnvironment,
    this.ref,
    this.repositoryUrl,
    this.sha,
    this.statusesUrl,
    this.task,
    this.transientEnvironment,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Deployment[createdAt=$createdAt, creator=$creator, description=$description, environment=$environment, id=$id, nodeId=$nodeId, originalEnvironment=$originalEnvironment, payload=$payload, performedViaGithubApp=$performedViaGithubApp, productionEnvironment=$productionEnvironment, ref=$ref, repositoryUrl=$repositoryUrl, sha=$sha, statusesUrl=$statusesUrl, task=$task, transientEnvironment=$transientEnvironment, updatedAt=$updatedAt, url=$url, ]';
  }

  Deployment.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    creator = (json['creator'] == null) ?
      null :
      SimpleUser.fromJson(json['creator']);
    description = json['description'];
    environment = json['environment'];
    id = json['id'];
    nodeId = json['node_id'];
    originalEnvironment = json['original_environment'];
    payload = json['payload'];
    performedViaGithubApp = (json['performed_via_github_app'] == null) ?
      null :
      Integration.fromJson(json['performed_via_github_app']);
    productionEnvironment = json['production_environment'];
    ref = json['ref'];
    repositoryUrl = json['repository_url'];
    sha = json['sha'];
    statusesUrl = json['statuses_url'];
    task = json['task'];
    transientEnvironment = json['transient_environment'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['creator'] = creator;
      json['description'] = description;
    if (environment != null)
      json['environment'] = environment;
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (originalEnvironment != null)
      json['original_environment'] = originalEnvironment;
    if (payload != null)
      json['payload'] = payload;
      json['performed_via_github_app'] = performedViaGithubApp;
    if (productionEnvironment != null)
      json['production_environment'] = productionEnvironment;
    if (ref != null)
      json['ref'] = ref;
    if (repositoryUrl != null)
      json['repository_url'] = repositoryUrl;
    if (sha != null)
      json['sha'] = sha;
    if (statusesUrl != null)
      json['statuses_url'] = statusesUrl;
    if (task != null)
      json['task'] = task;
    if (transientEnvironment != null)
      json['transient_environment'] = transientEnvironment;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Deployment> listFromJson(List<dynamic> json) {
    return json == null ? List<Deployment>() : json.map((value) => Deployment.fromJson(value)).toList();
  }

  static Map<String, Deployment> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Deployment>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Deployment.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Deployment-objects as value to a dart map
  static Map<String, List<Deployment>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Deployment>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Deployment.listFromJson(value);
       });
     }
     return map;
  }
}

