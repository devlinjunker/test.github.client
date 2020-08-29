part of openapi.api;

class GistFullAllOfForks {
  
  String createdAt = null;
  
  String id = null;
  
  String updatedAt = null;
  
  String url = null;
  
  BranchRestrictionPolicyUsers user = null;

  GistFullAllOfForks({
    this.createdAt,
    this.id,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'GistFullAllOfForks[createdAt=$createdAt, id=$id, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  GistFullAllOfForks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = json['created_at'];
    id = json['id'];
    updatedAt = json['updated_at'];
    url = json['url'];
    user = (json['user'] == null) ?
      null :
      BranchRestrictionPolicyUsers.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt;
    if (id != null)
      json['id'] = id;
    if (updatedAt != null)
      json['updated_at'] = updatedAt;
    if (url != null)
      json['url'] = url;
    if (user != null)
      json['user'] = user;
    return json;
  }

  static List<GistFullAllOfForks> listFromJson(List<dynamic> json) {
    return json == null ? List<GistFullAllOfForks>() : json.map((value) => GistFullAllOfForks.fromJson(value)).toList();
  }

  static Map<String, GistFullAllOfForks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GistFullAllOfForks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GistFullAllOfForks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GistFullAllOfForks-objects as value to a dart map
  static Map<String, List<GistFullAllOfForks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GistFullAllOfForks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GistFullAllOfForks.listFromJson(value);
       });
     }
     return map;
  }
}

