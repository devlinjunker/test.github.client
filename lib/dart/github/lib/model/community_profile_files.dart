part of openapi.api;

class CommunityProfileFiles {
  
  CodeOfConductSimple codeOfConduct = null;
  
  CommunityHealthFile contributing = null;
  
  CommunityHealthFile issueTemplate = null;
  
  LicenseSimple license = null;
  
  CommunityHealthFile pullRequestTemplate = null;
  
  CommunityHealthFile readme = null;

  CommunityProfileFiles({
    this.codeOfConduct,
    this.contributing,
    this.issueTemplate,
    this.license,
    this.pullRequestTemplate,
    this.readme,
  });

  @override
  String toString() {
    return 'CommunityProfileFiles[codeOfConduct=$codeOfConduct, contributing=$contributing, issueTemplate=$issueTemplate, license=$license, pullRequestTemplate=$pullRequestTemplate, readme=$readme, ]';
  }

  CommunityProfileFiles.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    codeOfConduct = (json['code_of_conduct'] == null) ?
      null :
      CodeOfConductSimple.fromJson(json['code_of_conduct']);
    contributing = (json['contributing'] == null) ?
      null :
      CommunityHealthFile.fromJson(json['contributing']);
    issueTemplate = (json['issue_template'] == null) ?
      null :
      CommunityHealthFile.fromJson(json['issue_template']);
    license = (json['license'] == null) ?
      null :
      LicenseSimple.fromJson(json['license']);
    pullRequestTemplate = (json['pull_request_template'] == null) ?
      null :
      CommunityHealthFile.fromJson(json['pull_request_template']);
    readme = (json['readme'] == null) ?
      null :
      CommunityHealthFile.fromJson(json['readme']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['code_of_conduct'] = codeOfConduct;
      json['contributing'] = contributing;
      json['issue_template'] = issueTemplate;
      json['license'] = license;
      json['pull_request_template'] = pullRequestTemplate;
      json['readme'] = readme;
    return json;
  }

  static List<CommunityProfileFiles> listFromJson(List<dynamic> json) {
    return json == null ? List<CommunityProfileFiles>() : json.map((value) => CommunityProfileFiles.fromJson(value)).toList();
  }

  static Map<String, CommunityProfileFiles> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommunityProfileFiles>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommunityProfileFiles.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommunityProfileFiles-objects as value to a dart map
  static Map<String, List<CommunityProfileFiles>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommunityProfileFiles>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommunityProfileFiles.listFromJson(value);
       });
     }
     return map;
  }
}

