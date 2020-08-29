part of openapi.api;

class InlineObject52 {
  /* Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://developer.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\" To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\" */
  List<ReposOwnerRepoCheckRunsActions> actions = [];
  /* The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. */
  String completedAt = null;
  /* **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`. When the conclusion is `action_required`, additional details should be provided on the site specified by `details_url`.   **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`. */
  String conclusion = null;
  //enum conclusionEnum {  success,  failure,  neutral,  cancelled,  skipped,  timed_out,  action_required,  };{
  /* The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used. */
  String detailsUrl = null;
  /* A reference for the run on the integrator's system. */
  String externalId = null;
  /* The SHA of the commit. */
  String headSha = null;
  /* The name of the check. For example, \"code-coverage\". */
  String name = null;
  
  ReposOwnerRepoCheckRunsOutput output = null;
  /* The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. */
  String startedAt = null;
  /* The current status. Can be one of `queued`, `in_progress`, or `completed`. */
  String status = "queued";
  //enum statusEnum {  queued,  in_progress,  completed,  };{

  InlineObject52({
    this.actions,
    this.completedAt,
    this.conclusion,
    this.detailsUrl,
    this.externalId,
    this.headSha,
    this.name,
    this.output,
    this.startedAt,
    this.status,
  });

  @override
  String toString() {
    return 'InlineObject52[actions=$actions, completedAt=$completedAt, conclusion=$conclusion, detailsUrl=$detailsUrl, externalId=$externalId, headSha=$headSha, name=$name, output=$output, startedAt=$startedAt, status=$status, ]';
  }

  InlineObject52.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    actions = (json['actions'] == null) ?
      null :
      ReposOwnerRepoCheckRunsActions.listFromJson(json['actions']);
    completedAt = json['completed_at'];
    conclusion = json['conclusion'];
    detailsUrl = json['details_url'];
    externalId = json['external_id'];
    headSha = json['head_sha'];
    name = json['name'];
    output = (json['output'] == null) ?
      null :
      ReposOwnerRepoCheckRunsOutput.fromJson(json['output']);
    startedAt = json['started_at'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (actions != null)
      json['actions'] = actions;
    if (completedAt != null)
      json['completed_at'] = completedAt;
    if (conclusion != null)
      json['conclusion'] = conclusion;
    if (detailsUrl != null)
      json['details_url'] = detailsUrl;
    if (externalId != null)
      json['external_id'] = externalId;
    if (headSha != null)
      json['head_sha'] = headSha;
    if (name != null)
      json['name'] = name;
    if (output != null)
      json['output'] = output;
    if (startedAt != null)
      json['started_at'] = startedAt;
    if (status != null)
      json['status'] = status;
    return json;
  }

  static List<InlineObject52> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject52>() : json.map((value) => InlineObject52.fromJson(value)).toList();
  }

  static Map<String, InlineObject52> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject52>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject52.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject52-objects as value to a dart map
  static Map<String, List<InlineObject52>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject52>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject52.listFromJson(value);
       });
     }
     return map;
  }
}

