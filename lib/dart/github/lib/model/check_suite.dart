part of openapi.api;

class CheckSuite {
  
  String after = null;
  
  Integration app = null;
  
  String before = null;
  
  String checkRunsUrl = null;
  
  String conclusion = null;
  
  DateTime createdAt = null;
  
  String headBranch = null;
  
  SimpleCommit headCommit = null;
  /* The SHA of the head commit that is being checked. */
  String headSha = null;
  
  int id = null;
  
  int latestCheckRunsCount = null;
  
  String nodeId = null;
  
  List<PullRequestMinimal> pullRequests = [];
  
  MinimalRepository repository = null;
  
  String status = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  CheckSuite({
    this.after,
    this.app,
    this.before,
    this.checkRunsUrl,
    this.conclusion,
    this.createdAt,
    this.headBranch,
    this.headCommit,
    this.headSha,
    this.id,
    this.latestCheckRunsCount,
    this.nodeId,
    this.pullRequests,
    this.repository,
    this.status,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'CheckSuite[after=$after, app=$app, before=$before, checkRunsUrl=$checkRunsUrl, conclusion=$conclusion, createdAt=$createdAt, headBranch=$headBranch, headCommit=$headCommit, headSha=$headSha, id=$id, latestCheckRunsCount=$latestCheckRunsCount, nodeId=$nodeId, pullRequests=$pullRequests, repository=$repository, status=$status, updatedAt=$updatedAt, url=$url, ]';
  }

  CheckSuite.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    after = json['after'];
    app = (json['app'] == null) ?
      null :
      Integration.fromJson(json['app']);
    before = json['before'];
    checkRunsUrl = json['check_runs_url'];
    conclusion = json['conclusion'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    headBranch = json['head_branch'];
    headCommit = (json['head_commit'] == null) ?
      null :
      SimpleCommit.fromJson(json['head_commit']);
    headSha = json['head_sha'];
    id = json['id'];
    latestCheckRunsCount = json['latest_check_runs_count'];
    nodeId = json['node_id'];
    pullRequests = (json['pull_requests'] == null) ?
      null :
      PullRequestMinimal.listFromJson(json['pull_requests']);
    repository = (json['repository'] == null) ?
      null :
      MinimalRepository.fromJson(json['repository']);
    status = json['status'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['after'] = after;
      json['app'] = app;
      json['before'] = before;
    if (checkRunsUrl != null)
      json['check_runs_url'] = checkRunsUrl;
      json['conclusion'] = conclusion;
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['head_branch'] = headBranch;
    if (headCommit != null)
      json['head_commit'] = headCommit;
    if (headSha != null)
      json['head_sha'] = headSha;
    if (id != null)
      json['id'] = id;
    if (latestCheckRunsCount != null)
      json['latest_check_runs_count'] = latestCheckRunsCount;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['pull_requests'] = pullRequests;
    if (repository != null)
      json['repository'] = repository;
      json['status'] = status;
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
      json['url'] = url;
    return json;
  }

  static List<CheckSuite> listFromJson(List<dynamic> json) {
    return json == null ? List<CheckSuite>() : json.map((value) => CheckSuite.fromJson(value)).toList();
  }

  static Map<String, CheckSuite> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CheckSuite>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CheckSuite.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CheckSuite-objects as value to a dart map
  static Map<String, List<CheckSuite>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CheckSuite>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CheckSuite.listFromJson(value);
       });
     }
     return map;
  }
}

