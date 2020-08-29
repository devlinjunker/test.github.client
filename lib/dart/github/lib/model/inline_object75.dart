part of openapi.api;

class InlineObject75 {
  
  String tfvcProject = null;
  
  String vcs = null;
  /* The password to provide to the originating repository. */
  String vcsPassword = null;
  /* The username to provide to the originating repository. */
  String vcsUsername = null;

  InlineObject75({
    this.tfvcProject,
    this.vcs,
    this.vcsPassword,
    this.vcsUsername,
  });

  @override
  String toString() {
    return 'InlineObject75[tfvcProject=$tfvcProject, vcs=$vcs, vcsPassword=$vcsPassword, vcsUsername=$vcsUsername, ]';
  }

  InlineObject75.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    tfvcProject = json['tfvc_project'];
    vcs = json['vcs'];
    vcsPassword = json['vcs_password'];
    vcsUsername = json['vcs_username'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (tfvcProject != null)
      json['tfvc_project'] = tfvcProject;
    if (vcs != null)
      json['vcs'] = vcs;
    if (vcsPassword != null)
      json['vcs_password'] = vcsPassword;
    if (vcsUsername != null)
      json['vcs_username'] = vcsUsername;
    return json;
  }

  static List<InlineObject75> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject75>() : json.map((value) => InlineObject75.fromJson(value)).toList();
  }

  static Map<String, InlineObject75> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject75>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject75.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject75-objects as value to a dart map
  static Map<String, List<InlineObject75>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject75>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject75.listFromJson(value);
       });
     }
     return map;
  }
}

