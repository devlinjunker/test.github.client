part of openapi.api;

class JobSteps {
  /* The time that the job finished, in ISO 8601 format. */
  DateTime completedAt = null;
  /* The outcome of the job. */
  String conclusion = null;
  /* The name of the job. */
  String name = null;
  
  int number = null;
  /* The time that the step started, in ISO 8601 format. */
  DateTime startedAt = null;
  /* The phase of the lifecycle that the job is currently in. */
  String status = null;
  //enum statusEnum {  queued,  in_progress,  completed,  };{

  JobSteps({
    this.completedAt,
    this.conclusion,
    this.name,
    this.number,
    this.startedAt,
    this.status,
  });

  @override
  String toString() {
    return 'JobSteps[completedAt=$completedAt, conclusion=$conclusion, name=$name, number=$number, startedAt=$startedAt, status=$status, ]';
  }

  JobSteps.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    completedAt = (json['completed_at'] == null) ?
      null :
      DateTime.parse(json['completed_at']);
    conclusion = json['conclusion'];
    name = json['name'];
    number = json['number'];
    startedAt = (json['started_at'] == null) ?
      null :
      DateTime.parse(json['started_at']);
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['completed_at'] = completedAt == null ? null : completedAt.toUtc().toIso8601String();
      json['conclusion'] = conclusion;
    if (name != null)
      json['name'] = name;
    if (number != null)
      json['number'] = number;
      json['started_at'] = startedAt == null ? null : startedAt.toUtc().toIso8601String();
    if (status != null)
      json['status'] = status;
    return json;
  }

  static List<JobSteps> listFromJson(List<dynamic> json) {
    return json == null ? List<JobSteps>() : json.map((value) => JobSteps.fromJson(value)).toList();
  }

  static Map<String, JobSteps> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, JobSteps>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = JobSteps.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of JobSteps-objects as value to a dart map
  static Map<String, List<JobSteps>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<JobSteps>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = JobSteps.listFromJson(value);
       });
     }
     return map;
  }
}

