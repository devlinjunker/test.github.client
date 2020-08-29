part of openapi.api;

class PullRequestBase {
  
  String label = null;
  
  String ref = null;
  
  PullRequestBaseRepo repo = null;
  
  String sha = null;
  
  PullRequestBaseRepoOwner user = null;

  PullRequestBase({
    this.label,
    this.ref,
    this.repo,
    this.sha,
    this.user,
  });

  @override
  String toString() {
    return 'PullRequestBase[label=$label, ref=$ref, repo=$repo, sha=$sha, user=$user, ]';
  }

  PullRequestBase.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    label = json['label'];
    ref = json['ref'];
    repo = (json['repo'] == null) ?
      null :
      PullRequestBaseRepo.fromJson(json['repo']);
    sha = json['sha'];
    user = (json['user'] == null) ?
      null :
      PullRequestBaseRepoOwner.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (label != null)
      json['label'] = label;
    if (ref != null)
      json['ref'] = ref;
    if (repo != null)
      json['repo'] = repo;
    if (sha != null)
      json['sha'] = sha;
    if (user != null)
      json['user'] = user;
    return json;
  }

  static List<PullRequestBase> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestBase>() : json.map((value) => PullRequestBase.fromJson(value)).toList();
  }

  static Map<String, PullRequestBase> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestBase>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestBase.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestBase-objects as value to a dart map
  static Map<String, List<PullRequestBase>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestBase>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestBase.listFromJson(value);
       });
     }
     return map;
  }
}

