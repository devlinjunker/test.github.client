part of openapi.api;

class InlineResponse2008 {
  
  List<Job> jobs = [];
  
  int totalCount = null;

  InlineResponse2008({
    this.jobs,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse2008[jobs=$jobs, totalCount=$totalCount, ]';
  }

  InlineResponse2008.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    jobs = (json['jobs'] == null) ?
      null :
      Job.listFromJson(json['jobs']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (jobs != null)
      json['jobs'] = jobs;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse2008> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2008>() : json.map((value) => InlineResponse2008.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2008> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2008>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2008.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2008-objects as value to a dart map
  static Map<String, List<InlineResponse2008>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2008>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2008.listFromJson(value);
       });
     }
     return map;
  }
}

