part of openapi.api;

class OrganizationFullPlan {
  
  int filledSeats = null;
  
  String name = null;
  
  int privateRepos = null;
  
  int seats = null;
  
  int space = null;

  OrganizationFullPlan({
    this.filledSeats,
    this.name,
    this.privateRepos,
    this.seats,
    this.space,
  });

  @override
  String toString() {
    return 'OrganizationFullPlan[filledSeats=$filledSeats, name=$name, privateRepos=$privateRepos, seats=$seats, space=$space, ]';
  }

  OrganizationFullPlan.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    filledSeats = json['filled_seats'];
    name = json['name'];
    privateRepos = json['private_repos'];
    seats = json['seats'];
    space = json['space'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (filledSeats != null)
      json['filled_seats'] = filledSeats;
    if (name != null)
      json['name'] = name;
    if (privateRepos != null)
      json['private_repos'] = privateRepos;
    if (seats != null)
      json['seats'] = seats;
    if (space != null)
      json['space'] = space;
    return json;
  }

  static List<OrganizationFullPlan> listFromJson(List<dynamic> json) {
    return json == null ? List<OrganizationFullPlan>() : json.map((value) => OrganizationFullPlan.fromJson(value)).toList();
  }

  static Map<String, OrganizationFullPlan> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrganizationFullPlan>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrganizationFullPlan.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrganizationFullPlan-objects as value to a dart map
  static Map<String, List<OrganizationFullPlan>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrganizationFullPlan>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrganizationFullPlan.listFromJson(value);
       });
     }
     return map;
  }
}

