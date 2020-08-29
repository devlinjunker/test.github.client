part of openapi.api;

class InlineObject10 {
  /* Description of the gist */
  String description = null;
  /* Names and content for the files that make up the gist */
  Map<String, GistsFiles> files = {};
  
  OneOf<boolean,string> public = null;

  InlineObject10({
    this.description,
    this.files,
    this.public,
  });

  @override
  String toString() {
    return 'InlineObject10[description=$description, files=$files, public=$public, ]';
  }

  InlineObject10.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    files = (json['files'] == null) ?
      null :
      GistsFiles.mapFromJson(json['files']);
    public = (json['public'] == null) ?
      null :
      OneOf&lt;boolean,string&gt;.fromJson(json['public']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (description != null)
      json['description'] = description;
    if (files != null)
      json['files'] = files;
    if (public != null)
      json['public'] = public;
    return json;
  }

  static List<InlineObject10> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject10>() : json.map((value) => InlineObject10.fromJson(value)).toList();
  }

  static Map<String, InlineObject10> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject10>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject10.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject10-objects as value to a dart map
  static Map<String, List<InlineObject10>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject10>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject10.listFromJson(value);
       });
     }
     return map;
  }
}

