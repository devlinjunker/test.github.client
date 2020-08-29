part of openapi.api;

class PorterAuthor {
  
  String email = null;
  
  int id = null;
  
  String importUrl = null;
  
  String name = null;
  
  String remoteId = null;
  
  String remoteName = null;
  
  String url = null;

  PorterAuthor({
    this.email,
    this.id,
    this.importUrl,
    this.name,
    this.remoteId,
    this.remoteName,
    this.url,
  });

  @override
  String toString() {
    return 'PorterAuthor[email=$email, id=$id, importUrl=$importUrl, name=$name, remoteId=$remoteId, remoteName=$remoteName, url=$url, ]';
  }

  PorterAuthor.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    id = json['id'];
    importUrl = json['import_url'];
    name = json['name'];
    remoteId = json['remote_id'];
    remoteName = json['remote_name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (email != null)
      json['email'] = email;
    if (id != null)
      json['id'] = id;
    if (importUrl != null)
      json['import_url'] = importUrl;
    if (name != null)
      json['name'] = name;
    if (remoteId != null)
      json['remote_id'] = remoteId;
    if (remoteName != null)
      json['remote_name'] = remoteName;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<PorterAuthor> listFromJson(List<dynamic> json) {
    return json == null ? List<PorterAuthor>() : json.map((value) => PorterAuthor.fromJson(value)).toList();
  }

  static Map<String, PorterAuthor> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PorterAuthor>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PorterAuthor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PorterAuthor-objects as value to a dart map
  static Map<String, List<PorterAuthor>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PorterAuthor>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PorterAuthor.listFromJson(value);
       });
     }
     return map;
  }
}

