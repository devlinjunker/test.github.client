part of openapi.api;

class InlineObject122 {
  /* A short description of the new repository. */
  String description = null;
  /* The name of the new repository. */
  String name = null;
  /* The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization. */
  String owner = null;
  /* Either `true` to create a new private repository or `false` to create a new public one. */
  bool private = false;

  InlineObject122({
    this.description,
    this.name,
    this.owner,
    this.private,
  });

  @override
  String toString() {
    return 'InlineObject122[description=$description, name=$name, owner=$owner, private=$private, ]';
  }

  InlineObject122.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    name = json['name'];
    owner = json['owner'];
    private = json['private'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (description != null)
      json['description'] = description;
    if (name != null)
      json['name'] = name;
    if (owner != null)
      json['owner'] = owner;
    if (private != null)
      json['private'] = private;
    return json;
  }

  static List<InlineObject122> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject122>() : json.map((value) => InlineObject122.fromJson(value)).toList();
  }

  static Map<String, InlineObject122> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject122>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject122.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject122-objects as value to a dart map
  static Map<String, List<InlineObject122>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject122>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject122.listFromJson(value);
       });
     }
     return map;
  }
}

