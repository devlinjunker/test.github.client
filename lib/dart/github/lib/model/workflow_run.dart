part of openapi.api;

class WorkflowRun {
  /* The URL to the artifacts for the workflow run. */
  String artifactsUrl = null;
  /* The URL to cancel the workflow run. */
  String cancelUrl = null;
  /* The URL to the associated check suite. */
  String checkSuiteUrl = null;
  
  String conclusion = null;
  
  DateTime createdAt = null;
  
  String event = null;
  
  String headBranch = null;
  
  SimpleCommit headCommit = null;
  
  MinimalRepository headRepository = null;
  
  int headRepositoryId = null;
  /* The SHA of the head commit that points to the version of the worflow being run. */
  String headSha = null;
  
  String htmlUrl = null;
  /* The ID of the workflow run. */
  int id = null;
  /* The URL to the jobs for the workflow run. */
  String jobsUrl = null;
  /* The URL to download the logs for the workflow run. */
  String logsUrl = null;
  
  String nodeId = null;
  
  List<PullRequestMinimal> pullRequests = [];
  
  MinimalRepository repository = null;
  /* The URL to rerun the workflow run. */
  String rerunUrl = null;
  /* The auto incrementing run number for the workflow run. */
  int runNumber = null;
  
  String status = null;
  
  DateTime updatedAt = null;
  /* The URL to the workflow run. */
  String url = null;
  /* The ID of the parent workflow. */
  int workflowId = null;
  /* The URL to the workflow. */
  String workflowUrl = null;

  WorkflowRun({
    this.artifactsUrl,
    this.cancelUrl,
    this.checkSuiteUrl,
    this.conclusion,
    this.createdAt,
    this.event,
    this.headBranch,
    this.headCommit,
    this.headRepository,
    this.headRepositoryId,
    this.headSha,
    this.htmlUrl,
    this.id,
    this.jobsUrl,
    this.logsUrl,
    this.nodeId,
    this.pullRequests,
    this.repository,
    this.rerunUrl,
    this.runNumber,
    this.status,
    this.updatedAt,
    this.url,
    this.workflowId,
    this.workflowUrl,
  });

  @override
  String toString() {
    return 'WorkflowRun[artifactsUrl=$artifactsUrl, cancelUrl=$cancelUrl, checkSuiteUrl=$checkSuiteUrl, conclusion=$conclusion, createdAt=$createdAt, event=$event, headBranch=$headBranch, headCommit=$headCommit, headRepository=$headRepository, headRepositoryId=$headRepositoryId, headSha=$headSha, htmlUrl=$htmlUrl, id=$id, jobsUrl=$jobsUrl, logsUrl=$logsUrl, nodeId=$nodeId, pullRequests=$pullRequests, repository=$repository, rerunUrl=$rerunUrl, runNumber=$runNumber, status=$status, updatedAt=$updatedAt, url=$url, workflowId=$workflowId, workflowUrl=$workflowUrl, ]';
  }

  WorkflowRun.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    artifactsUrl = json['artifacts_url'];
    cancelUrl = json['cancel_url'];
    checkSuiteUrl = json['check_suite_url'];
    conclusion = json['conclusion'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    event = json['event'];
    headBranch = json['head_branch'];
    headCommit = (json['head_commit'] == null) ?
      null :
      SimpleCommit.fromJson(json['head_commit']);
    headRepository = (json['head_repository'] == null) ?
      null :
      MinimalRepository.fromJson(json['head_repository']);
    headRepositoryId = json['head_repository_id'];
    headSha = json['head_sha'];
    htmlUrl = json['html_url'];
    id = json['id'];
    jobsUrl = json['jobs_url'];
    logsUrl = json['logs_url'];
    nodeId = json['node_id'];
    pullRequests = (json['pull_requests'] == null) ?
      null :
      PullRequestMinimal.listFromJson(json['pull_requests']);
    repository = (json['repository'] == null) ?
      null :
      MinimalRepository.fromJson(json['repository']);
    rerunUrl = json['rerun_url'];
    runNumber = json['run_number'];
    status = json['status'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
    workflowId = json['workflow_id'];
    workflowUrl = json['workflow_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (artifactsUrl != null)
      json['artifacts_url'] = artifactsUrl;
    if (cancelUrl != null)
      json['cancel_url'] = cancelUrl;
    if (checkSuiteUrl != null)
      json['check_suite_url'] = checkSuiteUrl;
      json['conclusion'] = conclusion;
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (event != null)
      json['event'] = event;
      json['head_branch'] = headBranch;
    if (headCommit != null)
      json['head_commit'] = headCommit;
    if (headRepository != null)
      json['head_repository'] = headRepository;
    if (headRepositoryId != null)
      json['head_repository_id'] = headRepositoryId;
    if (headSha != null)
      json['head_sha'] = headSha;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (jobsUrl != null)
      json['jobs_url'] = jobsUrl;
    if (logsUrl != null)
      json['logs_url'] = logsUrl;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['pull_requests'] = pullRequests;
    if (repository != null)
      json['repository'] = repository;
    if (rerunUrl != null)
      json['rerun_url'] = rerunUrl;
    if (runNumber != null)
      json['run_number'] = runNumber;
      json['status'] = status;
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    if (workflowId != null)
      json['workflow_id'] = workflowId;
    if (workflowUrl != null)
      json['workflow_url'] = workflowUrl;
    return json;
  }

  static List<WorkflowRun> listFromJson(List<dynamic> json) {
    return json == null ? List<WorkflowRun>() : json.map((value) => WorkflowRun.fromJson(value)).toList();
  }

  static Map<String, WorkflowRun> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, WorkflowRun>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = WorkflowRun.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of WorkflowRun-objects as value to a dart map
  static Map<String, List<WorkflowRun>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<WorkflowRun>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = WorkflowRun.listFromJson(value);
       });
     }
     return map;
  }
}

