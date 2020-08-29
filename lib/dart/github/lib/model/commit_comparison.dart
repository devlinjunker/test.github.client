part of openapi.api;

class CommitComparison {
  
  int aheadBy = null;
  
  Commit baseCommit = null;
  
  int behindBy = null;
  
  List<Commit> commits = [];
  
  String diffUrl = null;
  
  List<DiffEntry> files = [];
  
  String htmlUrl = null;
  
  Commit mergeBaseCommit = null;
  
  String patchUrl = null;
  
  String permalinkUrl = null;
  
  String status = null;
  //enum statusEnum {  diverged,  ahead,  behind,  identical,  };{
  
  int totalCommits = null;
  
  String url = null;

  CommitComparison({
    this.aheadBy,
    this.baseCommit,
    this.behindBy,
    this.commits,
    this.diffUrl,
    this.files,
    this.htmlUrl,
    this.mergeBaseCommit,
    this.patchUrl,
    this.permalinkUrl,
    this.status,
    this.totalCommits,
    this.url,
  });

  @override
  String toString() {
    return 'CommitComparison[aheadBy=$aheadBy, baseCommit=$baseCommit, behindBy=$behindBy, commits=$commits, diffUrl=$diffUrl, files=$files, htmlUrl=$htmlUrl, mergeBaseCommit=$mergeBaseCommit, patchUrl=$patchUrl, permalinkUrl=$permalinkUrl, status=$status, totalCommits=$totalCommits, url=$url, ]';
  }

  CommitComparison.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    aheadBy = json['ahead_by'];
    baseCommit = (json['base_commit'] == null) ?
      null :
      Commit.fromJson(json['base_commit']);
    behindBy = json['behind_by'];
    commits = (json['commits'] == null) ?
      null :
      Commit.listFromJson(json['commits']);
    diffUrl = json['diff_url'];
    files = (json['files'] == null) ?
      null :
      DiffEntry.listFromJson(json['files']);
    htmlUrl = json['html_url'];
    mergeBaseCommit = (json['merge_base_commit'] == null) ?
      null :
      Commit.fromJson(json['merge_base_commit']);
    patchUrl = json['patch_url'];
    permalinkUrl = json['permalink_url'];
    status = json['status'];
    totalCommits = json['total_commits'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (aheadBy != null)
      json['ahead_by'] = aheadBy;
    if (baseCommit != null)
      json['base_commit'] = baseCommit;
    if (behindBy != null)
      json['behind_by'] = behindBy;
    if (commits != null)
      json['commits'] = commits;
    if (diffUrl != null)
      json['diff_url'] = diffUrl;
    if (files != null)
      json['files'] = files;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (mergeBaseCommit != null)
      json['merge_base_commit'] = mergeBaseCommit;
    if (patchUrl != null)
      json['patch_url'] = patchUrl;
    if (permalinkUrl != null)
      json['permalink_url'] = permalinkUrl;
    if (status != null)
      json['status'] = status;
    if (totalCommits != null)
      json['total_commits'] = totalCommits;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CommitComparison> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitComparison>() : json.map((value) => CommitComparison.fromJson(value)).toList();
  }

  static Map<String, CommitComparison> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitComparison>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitComparison.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitComparison-objects as value to a dart map
  static Map<String, List<CommitComparison>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitComparison>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitComparison.listFromJson(value);
       });
     }
     return map;
  }
}

