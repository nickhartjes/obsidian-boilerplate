<%* 
let reason = await tp.system.prompt("Subject note");
let timestamp = tp.file.creation_date("YYYY-MM-DD HH:mm");
let date = tp.file.creation_date("YYYY-MM-DD");
-%>

---
<% tp.file.include("[[Frontmatter (Section template)]]") %>
tags:
  - type/note
---

# [[  <% reason %> ]]
* Date: [[<% timestamp %>]]
<% tp.file.cursor() %>

<% await tp.file.move("/Notes/" + date  + " " + reason)  %>