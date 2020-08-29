part of openapi.api;

class FileCommitCommitAuthor {
  
  String date = null;
  
  String email = null;
  
  String name = null;

  FileCommitCommitAuthor({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'FileCommitCommitAuthor[date=$date, email=$email, name=$name, ]';
  }

  FileCommitCommitAuthor.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    date = json['date'];
    email = json['email'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (date != null)
      json['date'] = date;
    if (email != null)
      json['email'] = email;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<FileCommitCommitAuthor> listFromJson(List<dynamic> json) {
    return json == null ? List<FileCommitCommitAuthor>() : json.map((value) => FileCommitCommitAuthor.fromJson(value)).toList();
  }

  static Map<String, FileCommitCommitAuthor> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, FileCommitCommitAuthor>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = FileCommitCommitAuthor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of FileCommitCommitAuthor-objects as value to a dart map
  static Map<String, List<FileCommitCommitAuthor>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<FileCommitCommitAuthor>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = FileCommitCommitAuthor.listFromJson(value);
       });
     }
     return map;
  }
}

