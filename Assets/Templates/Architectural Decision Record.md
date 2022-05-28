<%* 
let title = await tp.system.prompt("Short title of solved problem and solution");
let timestamp = tp.file.creation_date("YYYY-MM-DD HH:mm");
let date = tp.file.creation_date("YYYY-MM-DD");
const dv = this.app.plugins.plugins["dataview"].api; 
let teams = dv.pages('"Assets/Teams"').file.sort(n => n.name); 
let teamName = await tp.system.suggester(teams.name,teams.name);
-%>

---
<% tp.file.include("[[Frontmatter (Section template)]]") %>
tags:
  - type/adr
---

# [[<% title %>]]

* Status: {proposed | rejected | accepted | deprecated | … | superseded by [ADR-0005](0005-example.md)} <!-- optional -->
* Date: [[<% timestamp %>]]
* Team: [[<% teamName %>]]
* Assignee: {name} <!-- optional -->
* Deciders: {list everyone involved in the decision} <!-- optional -->
* Date: {YYYY-MM-DD when the ADR was last updated} <!-- optional -->

Technical Story: {description | ticket/issue URL} <!-- optional -->

## Context and Problem Statement

{Describe the context and problem statement, e.g., in free form using two to three sentences. You may want to articulate the problem in form of a question.}

## Decision Drivers <!-- optional -->

* {driver 1, e.g., a force, facing concern, …}
* {driver 2, e.g., a force, facing concern, …}
* … <!-- numbers of drivers can vary -->

## Considered Options

* {option 1}
* {option 2}
* {option 3}
* … <!-- numbers of options can vary -->

## Decision Outcome

Chosen option: "{option 1}", because {justification. e.g., only option, which meets k.o. criterion decision driver | which resolves force {force} | … | comes out best (see below)}.

### Positive Consequences <!-- optional -->

* {e.g., improvement of quality attribute satisfaction, follow-up decisions required, …}
* …

### Negative Consequences <!-- optional -->

* {e.g., compromising quality attribute, follow-up decisions required, …}
* …

## Pros and Cons of the Options <!-- optional -->

### {option 1}

{example | description | pointer to more information | …} <!-- optional -->

* Good, because {argument a}
* Good, because {argument b}
* Bad, because {argument c}
* … <!-- numbers of pros and cons can vary -->

### {option 2}

{example | description | pointer to more information | …} <!-- optional -->

* Good, because {argument a}
* Good, because {argument b}
* Bad, because {argument c}
* … <!-- numbers of pros and cons can vary -->

### {option 3}

{example | description | pointer to more information | …} <!-- optional -->

* Good, because {argument a}
* Good, because {argument b}
* Bad, because {argument c}
* … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

* {Link type} {Link to ADR} <!-- example: Refined by [ADR-0005](0005-example.md) -->
* … <!-- numbers of links can vary -->