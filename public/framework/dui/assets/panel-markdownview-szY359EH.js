import{j as e,cB as t}from"./dui-lib-BnlA1uqk.js";import{E as o,D as i,F as r,P as s,a as n}from"./panel-chipsview-DlzNYVNl.js";const a=`## Summary

The \`/api/users\` endpoint returns a paginated list of users.

### Authentication

Pass your API key in the \`Authorization\` header:

\`\`\`http
Authorization: Bearer YOUR_API_KEY
\`\`\`

### Response

\`\`\`json
{
  "data": [{ "id": 1, "name": "Alice" }],
  "total": 42,
  "page": 1
}
\`\`\`

> **Tip:** Use \`?limit=10&offset=0\` query params for pagination.
`,d=`## User Type

Represents an authenticated user in the system.

\`\`\`graphql
type User {
  id: ID!
  name: String!
  email: String!
  roles: [Role!]!
  createdAt: DateTime!
}

enum Role {
  ADMIN
  EDITOR
  VIEWER
}
\`\`\`

### Fields

| Field | Type | Description |
|-------|------|-------------|
| \`id\` | \`ID!\` | Unique identifier |
| \`name\` | \`String!\` | Display name |
| \`email\` | \`String!\` | Login email |
| \`roles\` | \`[Role!]!\` | Assigned roles |
`,c=`## POST /api/orders

Creates a new order for the authenticated user.

### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| \`items\` | \`array\` | ✅ | List of order line items |
| \`coupon\` | \`string\` | ❌ | Discount coupon code |
| \`shipping\` | \`object\` | ✅ | Shipping address |

### Status Codes

- **201 Created** — Order placed successfully
- **400 Bad Request** — Validation error (missing items)
- **402 Payment Required** — Payment method failed
- **429 Too Many Requests** — Rate limit exceeded
`,l=`# daakia-client

![Version](https://img.shields.io/badge/version-2.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A powerful API client for your code editor.

## Features

- REST, GraphQL, WebSocket, gRPC, SOAP support
- AI-powered query builder
- Environment variables & secret management
- Mock server with OpenAPI import

## Quick Start

1. Install the extension from your editor's extension marketplace
2. Open the Command Palette → **Daakia: New Request**
3. Enter your endpoint and press **Send**

[View full docs →](https://daakia.dev/docs)
`,p=`## Sprint 4 — Done

- [x] Migrate modals to DUI ModalView
- [x] Add CopyButtonView to response toolbar
- [x] Wire up MarkdownView for AI responses
- [ ] Add streaming support to MarkdownView
- [ ] Export response as PDF

## Notes

All completed tasks were reviewed and merged to \`main\` on 2024-06-15.
`,h=`\`\`\`typescript
import { DaakiaClient } from 'daakia-client';

const client = new DaakiaClient({
  baseUrl: 'https://api.example.com',
  apiKey: process.env.API_KEY,
});

const users = await client.get('/users', {
  params: { limit: 10, page: 1 },
});

console.log(users.data);
\`\`\``;function u(){return e.jsxs("div",{children:[e.jsx(o,{title:"AI Response with Headers and Code Blocks",description:"Typical AI assistant reply — headers, inline code, fenced blocks, and a blockquote",code:"<MarkdownView content={aiResponse} />",children:e.jsx(t,{content:a})}),e.jsx(o,{title:"GraphQL Schema Documentation",description:"Schema type definition with a field reference table",code:"<MarkdownView content={gqlSchemaDoc} />",children:e.jsx(t,{content:d})}),e.jsx(o,{title:"Endpoint Description with a Table",description:"REST endpoint docs — request body table and status code list",code:"<MarkdownView content={endpointDescription} />",children:e.jsx(t,{content:c})}),e.jsx(o,{title:"README-Style Content",description:"Badges, feature list, numbered steps, and an external link",code:"<MarkdownView content={readmeContent} />",children:e.jsx(t,{content:l})}),e.jsx(o,{title:"Task List with Checkboxes",description:"GFM task list — completed items are checked, pending are open",code:"<MarkdownView content={taskList} />",children:e.jsx(t,{content:p})}),e.jsx(o,{title:"Pure Code Block Response",description:"When the AI returns only a code snippet — no prose",code:"<MarkdownView content={codeOnly} />",children:e.jsx(t,{content:h})})]})}const x=Object.freeze(Object.defineProperty({__proto__:null,MarkdownViewExamples:u},Symbol.toStringTag,{value:"Module"}));function m(){return e.jsxs("div",{style:{maxWidth:860},children:[e.jsx(i,{title:"Features",children:e.jsx(r,{features:[{label:"Marked v14 rendering",color:"var(--color-primary)"},{label:"highlight.js syntax highlighting",color:"var(--color-success)"},{label:"Language alias resolution (js→javascript, ts→typescript)",color:"var(--color-info)"},{label:"Auto-language detection via highlightAuto",color:"var(--color-warning)"},{label:"Copy button per code block",color:"#a855f7"},{label:"GFM tables and task lists",color:"#ec4899"},{label:"Blockquotes and inline code",color:"#14b8a6"},{label:"Singleton marked config (configured once)",color:"#f97316"}]})}),e.jsx(i,{title:"Props",children:e.jsx(s,{props:[{name:"content",type:"string",required:!0,description:"Markdown string to render."},{name:"className",type:"string",description:"Extra CSS class on the root div. Add mdv-root to scope styles."},{name:"style",type:"CSSProperties",description:"Inline styles on the root div."}]})}),e.jsx(i,{title:"Code block features",children:e.jsx(s,{props:[{name:"language pill",type:"span.mdv-lang-pill",description:"Shows the detected/specified language name above the code block."},{name:"copy button",type:"button.mdv-copy-btn",description:"Copies raw code to clipboard. Shows a checkmark for 2s after clicking."},{name:"inline code",type:"code.mdv-inline-code",description:"Backtick-wrapped code styled with mdv-inline-code class."}]})}),e.jsxs(i,{title:"Dependencies",children:[e.jsxs(n,{type:"warning",children:["MarkdownView depends on ",e.jsx("code",{children:"marked"})," (v14) and ",e.jsx("code",{children:"highlight.js"})," (v11) being bundled. These are already included in the DUI package. The marked instance is configured once via a singleton guard — subsequent renders reuse the same renderer."]}),e.jsxs(n,{type:"info",children:["Language aliases supported: ",e.jsx("code",{children:"js→javascript"}),", ",e.jsx("code",{children:"ts→typescript"}),", ",e.jsx("code",{children:"sh→bash"}),", ",e.jsx("code",{children:"py→python"}),", ",e.jsx("code",{children:"yml→yaml"}),", ",e.jsx("code",{children:"rb→ruby"}),", ",e.jsx("code",{children:"rs→rust"}),", ",e.jsx("code",{children:"cs→csharp"}),", ",e.jsx("code",{children:"kt→kotlin"}),". Unknown languages fall back to ",e.jsx("code",{children:"highlightAuto"}),"."]})]}),e.jsx(i,{title:"Styling",children:e.jsxs(n,{type:"tip",children:["All MarkdownView styles live in a single CSS file scoped to ",e.jsx("code",{children:".mdv-root"}),". Override specific elements by adding rules targeting ",e.jsx("code",{children:".mdv-root p"}),", ",e.jsx("code",{children:".mdv-root pre"}),", etc. in your app stylesheet."]})}),e.jsx(i,{title:"DUI Sizing & Theming",description:"MarkdownView does not read size, width, color, or borderRadius from the DuiProvider context — it is not part of the sized-component system and has no size prop to fall back to a provider default.",children:e.jsxs(n,{type:"info",children:["MarkdownView is unaffected by ",e.jsx("code",{children:"<DuiProvider>"})," size/color context. Style it directly via its own props (and CSS variables where documented above) rather than expecting provider-level sizing to apply."]})})]})}const w=Object.freeze(Object.defineProperty({__proto__:null,MarkdownViewDocs:m},Symbol.toStringTag,{value:"Module"}));export{x as M,w as a};
