part of openapi.api;

class PullRequestSimpleBase {
  
  String label = null;
  
  String ref = null;
  
  Repository repo = null;
  
  String sha = null;
  
  SimpleUser user = null;

  PullRequestSimpleBase({
    this.label,
    this.ref,
    this.repo,
    this.sha,
    this.user,
  });

  @override
  String toString() {
    return 'PullRequestSimpleBase[label=$label, ref=$ref, repo=$repo, sha=$sha, user=$user, ]';
  }

  PullRequestSimpleBase.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    label = json['label'];
    ref = json['ref'];
    repo = (json['repo'] == null) ?
      null :
      Repository.fromJson(json['repo']);
    sha = json['sha'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
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
      json['user'] = user;
    return json;
  }

  static List<PullRequestSimpleBase> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestSimpleBase>() : json.map((value) => PullRequestSimpleBase.fromJson(value)).toList();
  }

  static Map<String, PullRequestSimpleBase> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestSimpleBase>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestSimpleBase.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestSimpleBase-objects as value to a dart map
  static Map<String, List<PullRequestSimpleBase>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestSimpleBase>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestSimpleBase.listFromJson(value);
       });
     }
     return map;
  }
}

