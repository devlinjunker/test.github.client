part of openapi.api;

class SimpleCommit {
  
  SimpleCommitAuthor author = null;
  
  SimpleCommitAuthor committer = null;
  
  String id = null;
  
  String message = null;
  
  DateTime timestamp = null;
  
  String treeId = null;

  SimpleCommit({
    this.author,
    this.committer,
    this.id,
    this.message,
    this.timestamp,
    this.treeId,
  });

  @override
  String toString() {
    return 'SimpleCommit[author=$author, committer=$committer, id=$id, message=$message, timestamp=$timestamp, treeId=$treeId, ]';
  }

  SimpleCommit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      SimpleCommitAuthor.fromJson(json['author']);
    committer = (json['committer'] == null) ?
      null :
      SimpleCommitAuthor.fromJson(json['committer']);
    id = json['id'];
    message = json['message'];
    timestamp = (json['timestamp'] == null) ?
      null :
      DateTime.parse(json['timestamp']);
    treeId = json['tree_id'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['author'] = author;
      json['committer'] = committer;
    if (id != null)
      json['id'] = id;
    if (message != null)
      json['message'] = message;
    if (timestamp != null)
      json['timestamp'] = timestamp == null ? null : timestamp.toUtc().toIso8601String();
    if (treeId != null)
      json['tree_id'] = treeId;
    return json;
  }

  static List<SimpleCommit> listFromJson(List<dynamic> json) {
    return json == null ? List<SimpleCommit>() : json.map((value) => SimpleCommit.fromJson(value)).toList();
  }

  static Map<String, SimpleCommit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, SimpleCommit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = SimpleCommit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of SimpleCommit-objects as value to a dart map
  static Map<String, List<SimpleCommit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<SimpleCommit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = SimpleCommit.listFromJson(value);
       });
     }
     return map;
  }
}

