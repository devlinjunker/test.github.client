part of openapi.api;

class Actor {
  
  String avatarUrl = null;
  
  String displayLogin = null;
  
  String gravatarId = null;
  
  int id = null;
  
  String login = null;
  
  String url = null;

  Actor({
    this.avatarUrl,
    this.displayLogin,
    this.gravatarId,
    this.id,
    this.login,
    this.url,
  });

  @override
  String toString() {
    return 'Actor[avatarUrl=$avatarUrl, displayLogin=$displayLogin, gravatarId=$gravatarId, id=$id, login=$login, url=$url, ]';
  }

  Actor.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    displayLogin = json['display_login'];
    gravatarId = json['gravatar_id'];
    id = json['id'];
    login = json['login'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (avatarUrl != null)
      json['avatar_url'] = avatarUrl;
    if (displayLogin != null)
      json['display_login'] = displayLogin;
      json['gravatar_id'] = gravatarId;
    if (id != null)
      json['id'] = id;
    if (login != null)
      json['login'] = login;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Actor> listFromJson(List<dynamic> json) {
    return json == null ? List<Actor>() : json.map((value) => Actor.fromJson(value)).toList();
  }

  static Map<String, Actor> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Actor>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Actor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Actor-objects as value to a dart map
  static Map<String, List<Actor>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Actor>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Actor.listFromJson(value);
       });
     }
     return map;
  }
}

