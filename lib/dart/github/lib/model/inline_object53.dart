part of openapi.api;

class InlineObject53 {
  /* Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\" */
  List<ReposOwnerRepoCheckRunsActions> actions = [];
  /* The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. */
  String completedAt = null;
  /* **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`.   **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`. */
  String conclusion = null;
  //enum conclusionEnum {  success,  failure,  neutral,  cancelled,  skipped,  timed_out,  action_required,  };{
  /* The URL of the integrator's site that has the full details of the check. */
  String detailsUrl = null;
  /* A reference for the run on the integrator's system. */
  String externalId = null;
  /* The name of the check. For example, \"code-coverage\". */
  String name = null;
  
  ReposOwnerRepoCheckRunsCheckRunIdOutput output = null;
  /* This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. */
  String startedAt = null;
  /* The current status. Can be one of `queued`, `in_progress`, or `completed`. */
  String status = null;
  //enum statusEnum {  queued,  in_progress,  completed,  };{

  InlineObject53({
    this.actions,
    this.completedAt,
    this.conclusion,
    this.detailsUrl,
    this.externalId,
    this.name,
    this.output,
    this.startedAt,
    this.status,
  });

  @override
  String toString() {
    return 'InlineObject53[actions=$actions, completedAt=$completedAt, conclusion=$conclusion, detailsUrl=$detailsUrl, externalId=$externalId, name=$name, output=$output, startedAt=$startedAt, status=$status, ]';
  }

  InlineObject53.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    actions = (json['actions'] == null) ?
      null :
      ReposOwnerRepoCheckRunsActions.listFromJson(json['actions']);
    completedAt = json['completed_at'];
    conclusion = json['conclusion'];
    detailsUrl = json['details_url'];
    externalId = json['external_id'];
    name = json['name'];
    output = (json['output'] == null) ?
      null :
      ReposOwnerRepoCheckRunsCheckRunIdOutput.fromJson(json['output']);
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

  static List<InlineObject53> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject53>() : json.map((value) => InlineObject53.fromJson(value)).toList();
  }

  static Map<String, InlineObject53> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject53>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject53.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject53-objects as value to a dart map
  static Map<String, List<InlineObject53>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject53>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject53.listFromJson(value);
       });
     }
     return map;
  }
}

