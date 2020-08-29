part of openapi.api;

class CommitFiles {
  
  int additions = null;
  
  String blobUrl = null;
  
  int changes = null;
  
  String contentsUrl = null;
  
  int deletions = null;
  
  String filename = null;
  
  String patch_ = null;
  
  String previousFilename = null;
  
  String rawUrl = null;
  
  String sha = null;
  
  String status = null;

  CommitFiles({
    this.additions,
    this.blobUrl,
    this.changes,
    this.contentsUrl,
    this.deletions,
    this.filename,
    this.patch_,
    this.previousFilename,
    this.rawUrl,
    this.sha,
    this.status,
  });

  @override
  String toString() {
    return 'CommitFiles[additions=$additions, blobUrl=$blobUrl, changes=$changes, contentsUrl=$contentsUrl, deletions=$deletions, filename=$filename, patch_=$patch_, previousFilename=$previousFilename, rawUrl=$rawUrl, sha=$sha, status=$status, ]';
  }

  CommitFiles.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    additions = json['additions'];
    blobUrl = json['blob_url'];
    changes = json['changes'];
    contentsUrl = json['contents_url'];
    deletions = json['deletions'];
    filename = json['filename'];
    patch_ = json['patch'];
    previousFilename = json['previous_filename'];
    rawUrl = json['raw_url'];
    sha = json['sha'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (additions != null)
      json['additions'] = additions;
    if (blobUrl != null)
      json['blob_url'] = blobUrl;
    if (changes != null)
      json['changes'] = changes;
    if (contentsUrl != null)
      json['contents_url'] = contentsUrl;
    if (deletions != null)
      json['deletions'] = deletions;
    if (filename != null)
      json['filename'] = filename;
    if (patch_ != null)
      json['patch'] = patch_;
    if (previousFilename != null)
      json['previous_filename'] = previousFilename;
    if (rawUrl != null)
      json['raw_url'] = rawUrl;
    if (sha != null)
      json['sha'] = sha;
    if (status != null)
      json['status'] = status;
    return json;
  }

  static List<CommitFiles> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitFiles>() : json.map((value) => CommitFiles.fromJson(value)).toList();
  }

  static Map<String, CommitFiles> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitFiles>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitFiles.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitFiles-objects as value to a dart map
  static Map<String, List<CommitFiles>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitFiles>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitFiles.listFromJson(value);
       });
     }
     return map;
  }
}

