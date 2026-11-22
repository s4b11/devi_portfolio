---
type: Development Guide
title: Documentation checks
description: How to validate changes to the knowledge bundle.
---

# Documentation checks

- Check the root agent instructions, bundle index, project overview, current state, log, and the four topic indexes.
- Parse each concept's YAML frontmatter and check its nonempty `type`. Check additional standard metadata against the [OKF v0.2 specification](https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md).
- Check that topic indexes list their concepts, internal links resolve, and log entries use valid dates in newest-first order.
- Review the Git diff for credentials, sensitive content, contradictory claims, and unrelated changes. Check substantive claims against their sources.
