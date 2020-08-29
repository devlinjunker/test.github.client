part of openapi.api;

class Reaction {
  /* The reaction to use */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{
  
  DateTime createdAt = null;
  
  int id = null;
  
  String nodeId = null;
  
  SimpleUser user = null;

  Reaction({
    this.content,
    this.createdAt,
    this.id,
    this.nodeId,
    this.user,
  });

  @override
  String toString() {
    return 'Reaction[content=$content, createdAt=$createdAt, id=$id, nodeId=$nodeId, user=$user, ]';
  }

  Reaction.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    id = json['id'];
    nodeId = json['node_id'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['user'] = user;
    return json;
  }

  static List<Reaction> listFromJson(List<dynamic> json) {
    return json == null ? List<Reaction>() : json.map((value) => Reaction.fromJson(value)).toList();
  }

  static Map<String, Reaction> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Reaction>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Reaction.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Reaction-objects as value to a dart map
  static Map<String, List<Reaction>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Reaction>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Reaction.listFromJson(value);
       });
     }
     return map;
  }
}

