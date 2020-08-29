import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for InlineObject27
void main() {
    var instance = new InlineObject27();

  group('test InlineObject27', () {
    // The description of the team.
    // String description (default value: null)
    test('to test the property `description`', () async {
      // TODO
    });

    // List GitHub IDs for organization members who will become team maintainers.
    // List<String> maintainers (default value: [])
    test('to test the property `maintainers`', () async {
      // TODO
    });

    // The name of the team.
    // String name (default value: null)
    test('to test the property `name`', () async {
      // TODO
    });

    // The ID of a team to set as the parent team.
    // int parentTeamId (default value: null)
    test('to test the property `parentTeamId`', () async {
      // TODO
    });

    // **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \\* `pull` - team members can pull, but not push to or administer newly-added repositories.   \\* `push` - team members can pull and push, but not administer newly-added repositories.   \\* `admin` - team members can pull, push and administer newly-added repositories.
    // String permission (default value: "pull")
    test('to test the property `permission`', () async {
      // TODO
    });

    // The level of privacy this team should have. The options are:   **For a non-nested team:**   \\* `secret` - only visible to organization owners and members of this team.   \\* `closed` - visible to all members of this organization.   Default: `secret`   **For a parent or child team:**   \\* `closed` - visible to all members of this organization.   Default for child team: `closed`
    // String privacy (default value: null)
    test('to test the property `privacy`', () async {
      // TODO
    });

    // The full name (e.g., \"organization-name/repository-name\") of repositories to add the team to.
    // List<String> repoNames (default value: [])
    test('to test the property `repoNames`', () async {
      // TODO
    });


  });

}
