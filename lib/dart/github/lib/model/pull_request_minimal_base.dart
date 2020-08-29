part of openapi.api;

class PullRequestMinimalBase {
  
  String ref = null;
  
  PullRequestMinimalBaseRepo repo = null;
  
  String sha = null;

  PullRequestMinimalBase({
    this.ref,
    this.repo,
    this.sha,
  });

  @override
  String toString() {
    return 'PullRequestMinimalBase[ref=$ref, repo=$repo, sha=$sha, ]';
  }

  PullRequestMinimalBase.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    ref = json['ref'];
    repo = (json['repo'] == null) ?
      null :
      PullRequestMinimalBaseRepo.fromJson(json['repo']);
    sha = json['sha'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (ref != null)
      json['ref'] = ref;
    if (repo != null)
      json['repo'] = repo;
    if (sha != null)
      json['sha'] = sha;
    return json;
  }

  static List<PullRequestMinimalBase> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestMinimalBase>() : json.map((value) => PullRequestMinimalBase.fromJson(value)).toList();
  }

  static Map<String, PullRequestMinimalBase> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestMinimalBase>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestMinimalBase.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestMinimalBase-objects as value to a dart map
  static Map<String, List<PullRequestMinimalBase>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestMinimalBase>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestMinimalBase.listFromJson(value);
       });
     }
     return map;
  }
}

