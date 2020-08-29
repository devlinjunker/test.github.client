part of openapi.api;

class ImportProjectChoices {
  
  String humanName = null;
  
  String tfvcProject = null;
  
  String vcs = null;

  ImportProjectChoices({
    this.humanName,
    this.tfvcProject,
    this.vcs,
  });

  @override
  String toString() {
    return 'ImportProjectChoices[humanName=$humanName, tfvcProject=$tfvcProject, vcs=$vcs, ]';
  }

  ImportProjectChoices.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    humanName = json['human_name'];
    tfvcProject = json['tfvc_project'];
    vcs = json['vcs'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (humanName != null)
      json['human_name'] = humanName;
    if (tfvcProject != null)
      json['tfvc_project'] = tfvcProject;
    if (vcs != null)
      json['vcs'] = vcs;
    return json;
  }

  static List<ImportProjectChoices> listFromJson(List<dynamic> json) {
    return json == null ? List<ImportProjectChoices>() : json.map((value) => ImportProjectChoices.fromJson(value)).toList();
  }

  static Map<String, ImportProjectChoices> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ImportProjectChoices>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ImportProjectChoices.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ImportProjectChoices-objects as value to a dart map
  static Map<String, List<ImportProjectChoices>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ImportProjectChoices>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ImportProjectChoices.listFromJson(value);
       });
     }
     return map;
  }
}

