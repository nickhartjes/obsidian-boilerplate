<%* 
let companyName = await tp.system.prompt("Company Name")
-%>

---
<% tp.file.include("[[Frontmatter (Section template)]]") %>
tags:
  - type/company
---

## [[<%companyName%>]]
âšī¸ About:
đ website: https://<% tp.file.cursor() %>

 đĨ Teams:
```dataview
LIST
WHERE company = "<% companyName.toLowerCase() %>"
```
<% await tp.file.move("/Assets/Companies/" + companyName)  %>