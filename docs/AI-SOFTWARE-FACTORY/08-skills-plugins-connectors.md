# 08 — Skills, Plugins, MCP and Connectors

## Terms
- Skill: versioned instructions and optional references describing how an agent should approach a task.
- Tool: callable operation with a typed schema and enforced authorization.
- Connector: adapter for an external service or protocol.
- Plugin: installable package bundling metadata and permitted skills/tools/connectors.

## Registry schema
id, name, version, description, publisher, source, license, compatibility, dependencies, capabilities, requested_permissions, checksum/signature where available, installation_state and audit metadata.

## Lifecycle
Discover → inspect source and license → show permissions/dependencies → user approves → install into a scoped directory/environment → validate manifest and checksum → enable selected capabilities → test → update or remove. Do not execute install hooks with unrestricted privileges.

## MCP
Support configurable MCP clients/servers with transport and authentication appropriate to the selected implementation. Show tool names and schemas, server status, requested scopes and recent calls. Treat tool outputs as untrusted. Require user approval for dangerous tools. Keep credentials in the secret store. Disconnect and revoke access cleanly.

## Connector types
- Local tools: filesystem within project, shell broker, Git, preview, tests.
- Developer services: GitHub, issue trackers, package registries.
- Deployment services: Vercel, Coolify, SSH/VPS.
- Documentation/search providers.
- User-configured HTTP/OpenAPI connectors.
- Webhooks for inbound and outbound events.

Do not imply a connector is live before credentials, scope grants, connection validation and a real test call pass. Use mock mode only when explicitly labeled.

## Permissions
Capabilities: project.read, project.write, terminal.execute, network.request, secrets.read_named, git.commit, repository.write_remote, deployment.execute, admin.manage. Grant least privilege, preferably per project and per agent. Require approval for remote writes, deployment, secret access and destructive actions.

## Marketplace
Search, categories, verified metadata, compatibility, license, dependencies, permission review, install/update/remove, version pinning and rollback. Curate a reviewed starter catalog; do not scrape arbitrary plugins and enable them automatically.

## Security testing
Malicious manifest, path traversal, dependency confusion, prompt injection, unapproved network calls, secret exfiltration attempt, stale permission, bad signature/checksum, incompatible version and uninstall cleanup.