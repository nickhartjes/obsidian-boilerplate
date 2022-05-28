<%* 
let title = await tp.system.prompt("Short title of the story and solution");
let timestamp = tp.file.creation_date("YYYY-MM-DD HH:mm");
let date = tp.file.creation_date("YYYY-MM-DD");
const dv = this.app.plugins.plugins["dataview"].api; 
let teams = dv.pages('"Assets/Teams"').file.sort(n => n.name); 
let teamName = await tp.system.suggester(teams.name,teams.name);
-%>

---
<% tp.file.include("[[Frontmatter (Section template)]]") %>
tags:
  - type/story
---

# [[<% title %>]]

* Status: {todo | in progress | rejected | accepted | deprecated | done | … | superseded by [EXIT-0005](EXIT05-example.md)} <!-- optional -->
* Date: [[<% timestamp %>]]
* Team: [[<% teamName %>]]
* Assignee: {name} <!-- optional -->
* Jira: {link} <!-- optional -->
* Date: {YYYY-MM-DD when the decision was last updated} <!-- optional -->

Technical Story: {description | ticket/issue URL} <!-- optional -->

## Description

{Describe the context and problem statement, e.g., in free form using two to three sentences. You may want to articulate the problem in form of a question.}

## Solution <!-- optional -->
{Describe the implemented solution}

## Checklists <!-- optional -->

### Definition of Done <!-- optional -->

- [ ] Item
- [ ] Item
- [x] Item

### Acceptance criteria <!-- optional -->

- [ ] Item
- [ ] Item
- [x] Item

## Links <!-- optional -->

* {Link type} {Link to ADR} <!-- example: Refined by [ADR-0005](0005-example.md) -->
* … <!-- numbers of links can vary -->

<% await tp.file.move("/Stories/" + teamName + "/" + date  + " " + title)  %>