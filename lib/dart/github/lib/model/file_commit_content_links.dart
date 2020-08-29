part of openapi.api;

class FileCommitContentLinks {
  
  String git = null;
  
  String html = null;
  
  String self = null;

  FileCommitContentLinks({
    this.git,
    this.html,
    this.self,
  });

  @override
  String toString() {
    return 'FileCommitContentLinks[git=$git, html=$html, self=$self, ]';
  }

  FileCommitContentLinks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    git = json['git'];
    html = json['html'];
    self = json['self'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (git != null)
      json['git'] = git;
    if (html != null)
      json['html'] = html;
    if (self != null)
      json['self'] = self;
    return json;
  }

  static List<FileCommitContentLinks> listFromJson(List<dynamic> json) {
    return json == null ? List<FileCommitContentLinks>() : json.map((value) => FileCommitContentLinks.fromJson(value)).toList();
  }

  static Map<String, FileCommitContentLinks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, FileCommitContentLinks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = FileCommitContentLinks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of FileCommitContentLinks-objects as value to a dart map
  static Map<String, List<FileCommitContentLinks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<FileCommitContentLinks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = FileCommitContentLinks.listFromJson(value);
       });
     }
     return map;
  }
}

