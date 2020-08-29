part of openapi.api;

class SimpleCommitAuthor {
  
  String email = null;
  
  String name = null;

  SimpleCommitAuthor({
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'SimpleCommitAuthor[email=$email, name=$name, ]';
  }

  SimpleCommitAuthor.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (email != null)
      json['email'] = email;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<SimpleCommitAuthor> listFromJson(List<dynamic> json) {
    return json == null ? List<SimpleCommitAuthor>() : json.map((value) => SimpleCommitAuthor.fromJson(value)).toList();
  }

  static Map<String, SimpleCommitAuthor> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, SimpleCommitAuthor>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = SimpleCommitAuthor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of SimpleCommitAuthor-objects as value to a dart map
  static Map<String, List<SimpleCommitAuthor>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<SimpleCommitAuthor>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = SimpleCommitAuthor.listFromJson(value);
       });
     }
     return map;
  }
}

