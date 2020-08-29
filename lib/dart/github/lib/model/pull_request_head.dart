part of openapi.api;

class PullRequestHead {
  
  String label = null;
  
  String ref = null;
  
  PullRequestHeadRepo repo = null;
  
  String sha = null;
  
  PullRequestBaseRepoOwner user = null;

  PullRequestHead({
    this.label,
    this.ref,
    this.repo,
    this.sha,
    this.user,
  });

  @override
  String toString() {
    return 'PullRequestHead[label=$label, ref=$ref, repo=$repo, sha=$sha, user=$user, ]';
  }

  PullRequestHead.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    label = json['label'];
    ref = json['ref'];
    repo = (json['repo'] == null) ?
      null :
      PullRequestHeadRepo.fromJson(json['repo']);
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

  static List<PullRequestHead> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestHead>() : json.map((value) => PullRequestHead.fromJson(value)).toList();
  }

  static Map<String, PullRequestHead> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestHead>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestHead.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestHead-objects as value to a dart map
  static Map<String, List<PullRequestHead>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestHead>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestHead.listFromJson(value);
       });
     }
     return map;
  }
}

