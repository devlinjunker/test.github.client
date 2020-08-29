part of openapi.api;

class ApiOverview {
  
  List<String> api = [];
  
  List<String> git = [];
  
  String githubServicesSha = null;
  
  List<String> hooks = [];
  
  List<String> importer = [];
  
  String installedVersion = null;
  
  List<String> pages = [];
  
  ApiOverviewSshKeyFingerprints sshKeyFingerprints = null;
  
  bool verifiablePasswordAuthentication = null;
  
  List<String> web = [];

  ApiOverview({
    this.api,
    this.git,
    this.githubServicesSha,
    this.hooks,
    this.importer,
    this.installedVersion,
    this.pages,
    this.sshKeyFingerprints,
    this.verifiablePasswordAuthentication,
    this.web,
  });

  @override
  String toString() {
    return 'ApiOverview[api=$api, git=$git, githubServicesSha=$githubServicesSha, hooks=$hooks, importer=$importer, installedVersion=$installedVersion, pages=$pages, sshKeyFingerprints=$sshKeyFingerprints, verifiablePasswordAuthentication=$verifiablePasswordAuthentication, web=$web, ]';
  }

  ApiOverview.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    api = (json['api'] == null) ?
      null :
      (json['api'] as List).cast<String>();
    git = (json['git'] == null) ?
      null :
      (json['git'] as List).cast<String>();
    githubServicesSha = json['github_services_sha'];
    hooks = (json['hooks'] == null) ?
      null :
      (json['hooks'] as List).cast<String>();
    importer = (json['importer'] == null) ?
      null :
      (json['importer'] as List).cast<String>();
    installedVersion = json['installed_version'];
    pages = (json['pages'] == null) ?
      null :
      (json['pages'] as List).cast<String>();
    sshKeyFingerprints = (json['ssh_key_fingerprints'] == null) ?
      null :
      ApiOverviewSshKeyFingerprints.fromJson(json['ssh_key_fingerprints']);
    verifiablePasswordAuthentication = json['verifiable_password_authentication'];
    web = (json['web'] == null) ?
      null :
      (json['web'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (api != null)
      json['api'] = api;
    if (git != null)
      json['git'] = git;
    if (githubServicesSha != null)
      json['github_services_sha'] = githubServicesSha;
    if (hooks != null)
      json['hooks'] = hooks;
    if (importer != null)
      json['importer'] = importer;
    if (installedVersion != null)
      json['installed_version'] = installedVersion;
    if (pages != null)
      json['pages'] = pages;
    if (sshKeyFingerprints != null)
      json['ssh_key_fingerprints'] = sshKeyFingerprints;
    if (verifiablePasswordAuthentication != null)
      json['verifiable_password_authentication'] = verifiablePasswordAuthentication;
    if (web != null)
      json['web'] = web;
    return json;
  }

  static List<ApiOverview> listFromJson(List<dynamic> json) {
    return json == null ? List<ApiOverview>() : json.map((value) => ApiOverview.fromJson(value)).toList();
  }

  static Map<String, ApiOverview> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ApiOverview>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ApiOverview.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ApiOverview-objects as value to a dart map
  static Map<String, List<ApiOverview>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ApiOverview>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ApiOverview.listFromJson(value);
       });
     }
     return map;
  }
}

