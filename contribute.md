# Contribute

<!-- MarkdownTOC -->

- [Community Guidelines](#community-guidelines)
- [Scope and purpose](#scope-and-purpose)
- [Contributing a widget](#contributing-a-widget)
- [Contributions for this repo itself](#contributions-for-this-repo-itself)

<!-- /MarkdownTOC -->

Got an idea for a widget that is broadly useful to the libp2p community and could be published publicly as part of the libp2p Observation Deck? This is the place to come.

<a id="community-guidelines"></a>
## Community Guidelines

As part of the libp2p project, our community guidelines echo [those of the libp2p project](https://github.com/libp2p/community/blob/master/CONTRIBUTE.md#community-guidelines).

<a id="scope-and-purpose"></a>
## Scope and purpose

The libp2p Observtion Deck is provides a catalogue of widgets, built on [libp2p Observer](https://github.com/libp2p/observer-toolkit) toolkits. Consult and [contribute to libp2p Observer](https://github.com/libp2p/observer-toolkit/blob/master/docs/contribute.md) repo instead for anything to do with the following:

 1. The UI of the libp2p Observeration Deck site, for selecting and browsing widgets, which is built using the [libp2p observer Catalogue](https://github.com/libp2p/observer-toolkit/tree/master/packages/catalogue) package.
 2. The control panel UI used for controlling data, including the timeline and controls such as Export Data, which comes from the [libp2p Observer Shell](https://github.com/libp2p/observer-toolkit/tree/master/packages/shell)
 3. The underlying data management model behind widgets in the libp2p Observation Deck, which comes from the [libp2p Observer SDK](https://github.com/libp2p/observer-toolkit/tree/master/packages/sdk)
 4. The data format and protobuf schema used for the libp2p Introspection data consumed by the libp2p Observation Deck widgets, which comes from the [libp2p Observer proto](https://github.com/libp2p/observer-toolkit/tree/master/packages/proto) package and follows a schema shared with the libp2p Introspection module.
 5. Mock data samples included as "Samples" in the libp2p Observation Deck, which come from the [libp2p Observer Samples](https://github.com/libp2p/observer-toolkit/tree/master/packages/samples) package.

This repository is primarily intended for:

 1. Discussion and community co-ordination around creating libp2p Observer widgets that could be included in the libp2p Observation Deck
 2. Reviewing, improving and approving widgets submitted for inclusion in the libp2p Observation Deck catalogue

<a id="contributing-a-widget"></a>
## Contributing a widget

We recommend the following workflow:

 1. **Research and discussion.** Before starting work, it's a good idea to check that your efforts won't be wasted duplicating an existing project or following an unworkable path. We recommend searching existing discussions and, if something similar to your idea isn't already under discussion, posting an issue describing what you intend to do.
 2. **Creating a widget.** Use the [libp2p Observer create-widget](https://github.com/libp2p/observer-toolkit/tree/master/packages/create-widget) script to get started, following the linked documentation. This sets up a libp2p Observer widget and configures developer tools and environments allowing you to immediately start coding and connect to libp2p Introspection data in a browser.
 3. **Building a widget.** Documentation for building the widget is provided on the [libp2p Observer repo](https://github.com/libp2p/observer-toolkit), particularly, the [developer guide](https://github.com/libp2p/observer-toolkit/blob/master/docs/developer-guide.md) and documentation for individual [packages](https://github.com/libp2p/observer-toolkit/tree/master/packages).
 4. **Post it to GitHub and NPM.** The GitHub repository should be on your own account (or, company account), and it should be published to NPM as a public package.
 5. **(Optional) Post an issue here requesting community feedback.** This is a good way to get visibility for your work, early feedback and assistance, and reduce the likelihood of effort being duplicated or wasted.
 6. **When ready, post a PR adding it to the catalogue**. The body of the PR should link to your GitHub repository and published NPM package, and the PR should do the following:
  - Add your widget as a dependency to this project's `package.json`, as an exact version (e.g. `1.2.3` not `^1.2.3`)
  - Edit the file [`src/widgets`](src/widgets):
    - Adding an `import` line for your package (`import * as yourWidgetName from 'your-widget-npm-name'`)
    - Add the widget name as published on NPM to the `widgetPackageNames` array
    - Add the name of the import to the `export default` array
  7. **Await review.** To ensure quality standards and safeguard security when connecting to user's local ports using websockets, all submitted widgets are reviewed by a member of the core project team. This may take some time, so please be patient. In the mean time, we encourage contributors who have developed widgets to actively promote and encourage feedback and contributions to their work from libp2p community members, and to share links to their own personal deployments of their widgets using the [libp2p Observer Catalogue](https://github.com/libp2p/observer-toolkit/tree/master/packages/catalogue).

  If all is well, the widget will be included in the libp2p Observation Deck for all libp2p users and contributors to easily discover and use.

<a id="contributions-for-this-repo-itself"></a>
## Contributions for this repo itself

There is very little code to this repository beyond build configuration, but if you have a code contribution that is specific to this repository and does not belong on [libp2p Observer](https://github.com/libp2p/observer-toolkit), issues and PRs are welcome.
