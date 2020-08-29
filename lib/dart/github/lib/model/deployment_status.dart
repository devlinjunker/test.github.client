part of openapi.api;

class DeploymentStatus {
  
  DateTime createdAt = null;
  
  SimpleUser creator = null;
  
  String deploymentUrl = null;
  /* A short description of the status. */
  String description = "";
  /* The environment of the deployment that the status is for. */
  String environment = "";
  /* The URL for accessing your environment. */
  String environmentUrl = "";
  
  int id = null;
  /* The URL to associate with this status. */
  String logUrl = "";
  
  String nodeId = null;
  
  Integration performedViaGithubApp = null;
  
  String repositoryUrl = null;
  /* The state of the status. */
  String state = null;
  //enum stateEnum {  error,  failure,  inactive,  pending,  success,  queued,  in_progress,  };{
  /* Deprecated: the URL to associate with this status. */
  String targetUrl = "";
  
  DateTime updatedAt = null;
  
  String url = null;

  DeploymentStatus({
    this.createdAt,
    this.creator,
    this.deploymentUrl,
    this.description,
    this.environment,
    this.environmentUrl,
    this.id,
    this.logUrl,
    this.nodeId,
    this.performedViaGithubApp,
    this.repositoryUrl,
    this.state,
    this.targetUrl,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'DeploymentStatus[createdAt=$createdAt, creator=$creator, deploymentUrl=$deploymentUrl, description=$description, environment=$environment, environmentUrl=$environmentUrl, id=$id, logUrl=$logUrl, nodeId=$nodeId, performedViaGithubApp=$performedViaGithubApp, repositoryUrl=$repositoryUrl, state=$state, targetUrl=$targetUrl, updatedAt=$updatedAt, url=$url, ]';
  }

  DeploymentStatus.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    creator = (json['creator'] == null) ?
      null :
      SimpleUser.fromJson(json['creator']);
    deploymentUrl = json['deployment_url'];
    description = json['description'];
    environment = json['environment'];
    environmentUrl = json['environment_url'];
    id = json['id'];
    logUrl = json['log_url'];
    nodeId = json['node_id'];
    performedViaGithubApp = (json['performed_via_github_app'] == null) ?
      null :
      Integration.fromJson(json['performed_via_github_app']);
    repositoryUrl = json['repository_url'];
    state = json['state'];
    targetUrl = json['target_url'];
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
    if (deploymentUrl != null)
      json['deployment_url'] = deploymentUrl;
    if (description != null)
      json['description'] = description;
    if (environment != null)
      json['environment'] = environment;
    if (environmentUrl != null)
      json['environment_url'] = environmentUrl;
    if (id != null)
      json['id'] = id;
    if (logUrl != null)
      json['log_url'] = logUrl;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['performed_via_github_app'] = performedViaGithubApp;
    if (repositoryUrl != null)
      json['repository_url'] = repositoryUrl;
    if (state != null)
      json['state'] = state;
    if (targetUrl != null)
      json['target_url'] = targetUrl;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<DeploymentStatus> listFromJson(List<dynamic> json) {
    return json == null ? List<DeploymentStatus>() : json.map((value) => DeploymentStatus.fromJson(value)).toList();
  }

  static Map<String, DeploymentStatus> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, DeploymentStatus>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = DeploymentStatus.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of DeploymentStatus-objects as value to a dart map
  static Map<String, List<DeploymentStatus>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<DeploymentStatus>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = DeploymentStatus.listFromJson(value);
       });
     }
     return map;
  }
}

