part of openapi.api;

class InlineObject74 {
  /* For a tfvc import, the name of the project that is being imported. */
  String tfvcProject = null;
  /* The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response. */
  String vcs = null;
  //enum vcsEnum {  subversion,  git,  mercurial,  tfvc,  };{
  /* If authentication is required, the password to provide to `vcs_url`. */
  String vcsPassword = null;
  /* The URL of the originating repository. */
  String vcsUrl = null;
  /* If authentication is required, the username to provide to `vcs_url`. */
  String vcsUsername = null;

  InlineObject74({
    this.tfvcProject,
    this.vcs,
    this.vcsPassword,
    this.vcsUrl,
    this.vcsUsername,
  });

  @override
  String toString() {
    return 'InlineObject74[tfvcProject=$tfvcProject, vcs=$vcs, vcsPassword=$vcsPassword, vcsUrl=$vcsUrl, vcsUsername=$vcsUsername, ]';
  }

  InlineObject74.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    tfvcProject = json['tfvc_project'];
    vcs = json['vcs'];
    vcsPassword = json['vcs_password'];
    vcsUrl = json['vcs_url'];
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
    if (vcsUrl != null)
      json['vcs_url'] = vcsUrl;
    if (vcsUsername != null)
      json['vcs_username'] = vcsUsername;
    return json;
  }

  static List<InlineObject74> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject74>() : json.map((value) => InlineObject74.fromJson(value)).toList();
  }

  static Map<String, InlineObject74> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject74>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject74.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject74-objects as value to a dart map
  static Map<String, List<InlineObject74>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject74>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject74.listFromJson(value);
       });
     }
     return map;
  }
}

