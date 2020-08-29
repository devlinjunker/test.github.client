part of openapi.api;

class CheckRun {
  
  Integration app = null;
  
  CheckRunCheckSuite checkSuite = null;
  
  DateTime completedAt = null;
  
  String conclusion = null;
  
  String detailsUrl = null;
  
  String externalId = null;
  /* The SHA of the commit that is being checked. */
  String headSha = null;
  
  String htmlUrl = null;
  /* The id of the check. */
  int id = null;
  /* The name of the check. */
  String name = null;
  
  String nodeId = null;
  
  CheckRunOutput output = null;
  
  List<PullRequestMinimal> pullRequests = [];
  
  DateTime startedAt = null;
  /* The phase of the lifecycle that the check is currently in. */
  String status = null;
  //enum statusEnum {  queued,  in_progress,  completed,  };{
  
  String url = null;

  CheckRun({
    this.app,
    this.checkSuite,
    this.completedAt,
    this.conclusion,
    this.detailsUrl,
    this.externalId,
    this.headSha,
    this.htmlUrl,
    this.id,
    this.name,
    this.nodeId,
    this.output,
    this.pullRequests,
    this.startedAt,
    this.status,
    this.url,
  });

  @override
  String toString() {
    return 'CheckRun[app=$app, checkSuite=$checkSuite, completedAt=$completedAt, conclusion=$conclusion, detailsUrl=$detailsUrl, externalId=$externalId, headSha=$headSha, htmlUrl=$htmlUrl, id=$id, name=$name, nodeId=$nodeId, output=$output, pullRequests=$pullRequests, startedAt=$startedAt, status=$status, url=$url, ]';
  }

  CheckRun.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    app = (json['app'] == null) ?
      null :
      Integration.fromJson(json['app']);
    checkSuite = (json['check_suite'] == null) ?
      null :
      CheckRunCheckSuite.fromJson(json['check_suite']);
    completedAt = (json['completed_at'] == null) ?
      null :
      DateTime.parse(json['completed_at']);
    conclusion = json['conclusion'];
    detailsUrl = json['details_url'];
    externalId = json['external_id'];
    headSha = json['head_sha'];
    htmlUrl = json['html_url'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    output = (json['output'] == null) ?
      null :
      CheckRunOutput.fromJson(json['output']);
    pullRequests = (json['pull_requests'] == null) ?
      null :
      PullRequestMinimal.listFromJson(json['pull_requests']);
    startedAt = (json['started_at'] == null) ?
      null :
      DateTime.parse(json['started_at']);
    status = json['status'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['app'] = app;
      json['check_suite'] = checkSuite;
      json['completed_at'] = completedAt == null ? null : completedAt.toUtc().toIso8601String();
      json['conclusion'] = conclusion;
      json['details_url'] = detailsUrl;
      json['external_id'] = externalId;
    if (headSha != null)
      json['head_sha'] = headSha;
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (output != null)
      json['output'] = output;
    if (pullRequests != null)
      json['pull_requests'] = pullRequests;
      json['started_at'] = startedAt == null ? null : startedAt.toUtc().toIso8601String();
    if (status != null)
      json['status'] = status;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CheckRun> listFromJson(List<dynamic> json) {
    return json == null ? List<CheckRun>() : json.map((value) => CheckRun.fromJson(value)).toList();
  }

  static Map<String, CheckRun> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CheckRun>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CheckRun.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CheckRun-objects as value to a dart map
  static Map<String, List<CheckRun>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CheckRun>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CheckRun.listFromJson(value);
       });
     }
     return map;
  }
}

