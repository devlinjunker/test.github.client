part of openapi.api;

class Job {
  
  String checkRunUrl = null;
  /* The time that the job finished, in ISO 8601 format. */
  DateTime completedAt = null;
  /* The outcome of the job. */
  String conclusion = null;
  /* The SHA of the commit that is being run. */
  String headSha = null;
  
  String htmlUrl = null;
  /* The id of the job. */
  int id = null;
  /* The name of the job. */
  String name = null;
  
  String nodeId = null;
  /* The id of the associated workflow run. */
  int runId = null;
  
  String runUrl = null;
  /* The time that the job started, in ISO 8601 format. */
  DateTime startedAt = null;
  /* The phase of the lifecycle that the job is currently in. */
  String status = null;
  //enum statusEnum {  queued,  in_progress,  completed,  };{
  /* Steps in this job. */
  List<JobSteps> steps = [];
  
  String url = null;

  Job({
    this.checkRunUrl,
    this.completedAt,
    this.conclusion,
    this.headSha,
    this.htmlUrl,
    this.id,
    this.name,
    this.nodeId,
    this.runId,
    this.runUrl,
    this.startedAt,
    this.status,
    this.steps,
    this.url,
  });

  @override
  String toString() {
    return 'Job[checkRunUrl=$checkRunUrl, completedAt=$completedAt, conclusion=$conclusion, headSha=$headSha, htmlUrl=$htmlUrl, id=$id, name=$name, nodeId=$nodeId, runId=$runId, runUrl=$runUrl, startedAt=$startedAt, status=$status, steps=$steps, url=$url, ]';
  }

  Job.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    checkRunUrl = json['check_run_url'];
    completedAt = (json['completed_at'] == null) ?
      null :
      DateTime.parse(json['completed_at']);
    conclusion = json['conclusion'];
    headSha = json['head_sha'];
    htmlUrl = json['html_url'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    runId = json['run_id'];
    runUrl = json['run_url'];
    startedAt = (json['started_at'] == null) ?
      null :
      DateTime.parse(json['started_at']);
    status = json['status'];
    steps = (json['steps'] == null) ?
      null :
      JobSteps.listFromJson(json['steps']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (checkRunUrl != null)
      json['check_run_url'] = checkRunUrl;
      json['completed_at'] = completedAt == null ? null : completedAt.toUtc().toIso8601String();
      json['conclusion'] = conclusion;
    if (headSha != null)
      json['head_sha'] = headSha;
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (runId != null)
      json['run_id'] = runId;
    if (runUrl != null)
      json['run_url'] = runUrl;
    if (startedAt != null)
      json['started_at'] = startedAt == null ? null : startedAt.toUtc().toIso8601String();
    if (status != null)
      json['status'] = status;
    if (steps != null)
      json['steps'] = steps;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Job> listFromJson(List<dynamic> json) {
    return json == null ? List<Job>() : json.map((value) => Job.fromJson(value)).toList();
  }

  static Map<String, Job> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Job>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Job.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Job-objects as value to a dart map
  static Map<String, List<Job>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Job>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Job.listFromJson(value);
       });
     }
     return map;
  }
}

