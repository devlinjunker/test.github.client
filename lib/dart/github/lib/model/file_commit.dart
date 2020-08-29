part of openapi.api;

class FileCommit {
  
  FileCommitCommit commit = null;
  
  FileCommitContent content = null;

  FileCommit({
    this.commit,
    this.content,
  });

  @override
  String toString() {
    return 'FileCommit[commit=$commit, content=$content, ]';
  }

  FileCommit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    commit = (json['commit'] == null) ?
      null :
      FileCommitCommit.fromJson(json['commit']);
    content = (json['content'] == null) ?
      null :
      FileCommitContent.fromJson(json['content']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (commit != null)
      json['commit'] = commit;
      json['content'] = content;
    return json;
  }

  static List<FileCommit> listFromJson(List<dynamic> json) {
    return json == null ? List<FileCommit>() : json.map((value) => FileCommit.fromJson(value)).toList();
  }

  static Map<String, FileCommit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, FileCommit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = FileCommit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of FileCommit-objects as value to a dart map
  static Map<String, List<FileCommit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<FileCommit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = FileCommit.listFromJson(value);
       });
     }
     return map;
  }
}

