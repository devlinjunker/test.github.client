part of openapi.api;

class CombinedCommitStatus {
  
  String commitUrl = null;
  
  MinimalRepository repository = null;
  
  String sha = null;
  
  String state = null;
  
  List<SimpleCommitStatus> statuses = [];
  
  int totalCount = null;
  
  String url = null;

  CombinedCommitStatus({
    this.commitUrl,
    this.repository,
    this.sha,
    this.state,
    this.statuses,
    this.totalCount,
    this.url,
  });

  @override
  String toString() {
    return 'CombinedCommitStatus[commitUrl=$commitUrl, repository=$repository, sha=$sha, state=$state, statuses=$statuses, totalCount=$totalCount, url=$url, ]';
  }

  CombinedCommitStatus.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    commitUrl = json['commit_url'];
    repository = (json['repository'] == null) ?
      null :
      MinimalRepository.fromJson(json['repository']);
    sha = json['sha'];
    state = json['state'];
    statuses = (json['statuses'] == null) ?
      null :
      SimpleCommitStatus.listFromJson(json['statuses']);
    totalCount = json['total_count'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (commitUrl != null)
      json['commit_url'] = commitUrl;
    if (repository != null)
      json['repository'] = repository;
    if (sha != null)
      json['sha'] = sha;
    if (state != null)
      json['state'] = state;
    if (statuses != null)
      json['statuses'] = statuses;
    if (totalCount != null)
      json['total_count'] = totalCount;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CombinedCommitStatus> listFromJson(List<dynamic> json) {
    return json == null ? List<CombinedCommitStatus>() : json.map((value) => CombinedCommitStatus.fromJson(value)).toList();
  }

  static Map<String, CombinedCommitStatus> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CombinedCommitStatus>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CombinedCommitStatus.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CombinedCommitStatus-objects as value to a dart map
  static Map<String, List<CombinedCommitStatus>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CombinedCommitStatus>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CombinedCommitStatus.listFromJson(value);
       });
     }
     return map;
  }
}

