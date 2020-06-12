# observation-deck

**[Deployed here][1]**

This page hosts a catalogue of widgets for visualising libp2p introspection data, built on the [libp2p observer-toolkit](https://github.com/libp2p/observer-toolkit).

<!-- MarkdownTOC -->

- [Usage](#usage)
  - [1. Connecting to libp2p Introspection data](#1-connecting-to-libp2p-introspection-data)
    - [1.1 Try it out without your own data](#11-try-it-out-without-your-own-data)
    - [1.2 Connect to a libp2p Introspection node](#12-connect-to-a-libp2p-introspection-node)
    - [1.3 Upload a file](#13-upload-a-file)
  - [2. Choosing a widget](#2-choosing-a-widget)
    - [2.1 Closing a widget](#21-closing-a-widget)
    - [2.2 Using widget data filters](#22-using-widget-data-filters)
    - [2.3 About the current widget](#23-about-the-current-widget)
  - [3. Using the timeline](#3-using-the-timeline)
    - [3.1 Selecting a point in time](#31-selecting-a-point-in-time)
    - [3.2 Resetting to the latest point in time](#32-resetting-to-the-latest-point-in-time)
    - [3.3 Showing incoming live data](#33-showing-incoming-live-data)
    - [3.4 Pausing live data](#34-pausing-live-data)
    - [3.5 Timeline traffic visualisation](#35-timeline-traffic-visualisation)
  - [4. Changing a data source](#4-changing-a-data-source)
  - [5. Global data filters](#5-global-data-filters)
    - [5.1 Active filters](#51-active-filters)
    - [5.2 Disabling filters](#52-disabling-filters)
    - [5.3 Reseting filters](#53-reseting-filters)
  - [6. Exporting data](#6-exporting-data)
  - [7. Peer Ids](#7-peer-ids)
    - [7.1. Peer Id avatar image](#71-peer-id-avatar-image)
    - [7.2. Peer Id snippet](#72-peer-id-snippet)
    - [7.3. Full Peer ID in tooltip](#73-full-peer-id-in-tooltip)
  - [7.4. Info and Settings](#74-info-and-settings)
    - [7.4.1. Implementation](#741-implementation)
    - [7.4.2. Version](#742-version)
    - [7.4.3. Platform](#743-platform)
    - [7.4.4. "State messages every:"](#744-state-messages-every)
    - [7.4.5. "Discard data after:"](#745-discard-data-after)
- [Contribute a widget](#contribute-a-widget)

<!-- /MarkdownTOC -->


<a id="usage"></a>
## Usage

<a id="1-connecting-to-libp2p-introspection-data"></a>
### 1. Connecting to libp2p Introspection data

<a id="11-try-it-out-without-your-own-data"></a>
#### 1.1 Try it out without your own data

To simply explore what the libp2p Observation Deck has to offer, visit the [deployed page][1] and select "Samples", then choose one of the pre-made sample files. This allows you explore the libp2p Observation Deck catalogue and try out widgets using mock libp2p data samples.

<a id="12-connect-to-a-libp2p-introspection-node"></a>
#### 1.2 Connect to a libp2p Introspection node

First, run libp2p using the Introspection module, and get the port number and URI of the libp2p Introspection endpoint. In the libp2p Observation Deck UI, open "Live Connection" and enter this as a websocket URL: for example, if the introspection module endpoint is `introspect` on port `12345`, enter `ws://localhost:12345/introspect`.

If this works, a "loading" message should display and then the page will navigate to the libp2p Observation Deck catalogue.

<a id="13-upload-a-file"></a>
#### 1.3 Upload a file

The libp2p Observation Deck uses the [libp2p Observer Shell](https://github.com/libp2p/observer-toolkit/tree/master/packages/shell) which can export libp2p Introspection data as a binary file.

If you have such a file, you can import it using the "Upload a file" option, by either dragging the file into the opened "Upload a file" button or clicking again to use your operating system's usual file browser.

<a id="2-choosing-a-widget"></a>
### 2. Choosing a widget

After selecting a data source, the libp2p Observation Deck catalogue is shown. This displays all widgets currently approved for inclusion. Each displays a screenshot and a short description.

Click on one to open it and use it to visualize the currently loaded libp2p Introspection data.

<a id="21-closing-a-widget"></a>
#### 2.1 Closing a widget

To close a widget and return to the catalogue, click the close "x" icon in the top right of the widget's header.

<a id="22-using-widget-data-filters"></a>
#### 2.2 Using widget data filters

Most widgets have optional data filters. These can be set and unset by opening the "active filters" button on the right of the widget's header. While any widget-level filters are active, this button is highlighted and displays the number of currently active filters.

Unlike the ["global" data filters set in the control panel](#5-global-data-filters), these filters only apply within the scope of the current widget and do not affect the data shown in the [timeline]() or data exported using the [Export data](#6-exporting-data) button. Their usage is the same in other ways, including having options to both [disable](#52-disabling-filters) and [reset](#53-reseting-filters) the filters.

<a id="23-about-the-current-widget"></a>
#### 2.3 About the current widget

The same widget description shown in the catalogue view may be accessed for the currently selected widget by opening the "About" button on the left side of the widget's header.

<a id="3-using-the-timeline"></a>
### 3. Using the timeline

When data is available, the main part of the control panel along the bottom of the screen is an interactive timeline. Each libp2p Introspection data set includes a series of "state" messages giving metrics of libp2p subsystems at a moment in time, and the timeline allows users to scroll back through these state messages to inspect a particular moment.

To help the user spot interesting activity, an area chart visualisation of data traffic inbound and outbound data traffic is shown.

<a id="31-selecting-a-point-in-time"></a>
#### 3.1 Selecting a point in time

Clicking anywhere on the timeline selects that point in time. The magenta bar indicating the selected state jumps, and the area coverred by the bar indicates the selected time span, giving an indication of the resolution of the temporal resolution of the selected data as well as its position.

The bar may also be dragged, which will update visualisations as the bar moves, and may be nudged one message forward or backward using the keyboard left and right arrow keys.

Data after the currently selected time point is shaded to indicate that it is excluded from any visualisation in the currently selected widget.

<a id="32-resetting-to-the-latest-point-in-time"></a>
#### 3.2 Resetting to the latest point in time

When a point in time other than the latest is selected, an "x" icon is shown next to the current time label. Clicking this resets the timeline to the latest state message, allowing all available data to be included in the currently selected widget.

<a id="33-showing-incoming-live-data"></a>
#### 3.3 Showing incoming live data

By default, as new data is received by a live websocket connection, it is immediately shown and the timeline bar stays at the rightmost point in the timeline.

When a point earlier than the latest has been selected, this selection persists and new data is appended to the timeline after the current selection, not updating the current widget.

Clicking the "x" to [reset the timeline](#32-resetting-to-the-latest-point-in-time) reverts to the default behaviour and resumes live updates of the widget.

<a id="34-pausing-live-data"></a>
#### 3.4 Pausing live data

When the data source is a websocket connection, the icon on the left of the control panel indicating the data source acts as a "play/pause" button. Clicking on it sends a "pause" or "start" signal to the libp2p Introspection server, instructing the server to queue new data instead of sending it.

Note that because the libp2p Introspection server may have already dispatched or queued messages, there may be a small amount of data received after "pausing".

<a id="35-timeline-traffic-visualisation"></a>
#### 3.5 Timeline traffic visualisation

To guide users towards interesting points in a libp2p Introspection data set, the timeline displays a visualisation of traffic over time. The yellow upper area indicates how much new inbound data was receieved during a time interval, and the blue lower area indicates how much outbound data was sent out during that time interval. Bands on these areas indicate particular connections.

Mouseover of a particular band in this visualisation highlights that connection's inbound and outbound data activity across the timeline. These user selections are shared with widgets allowing widgets to highlight items with the same Peer ID as the highlighted connections.

<a id="4-changing-a-data-source"></a>
### 4. Changing a data source

The current data source may be changed at any time by clicking the topmost button in the left side of the control panel. This opens the same interface for choosing a data source as on the home page: see [section 1.1]() for details.

<a id="5-global-data-filters"></a>
### 5. Global data filters

Filters may be applied to centrally held data by clicking the "filter" button on the left side of the control panel. Any data removed by these filters is removed from every widget, from the timeline, and also excluded from data file exports.

When connected to a live websocket, filters are applied to all new incoming data as well as old data stored in memory.

<a id="51-active-filters"></a>
#### 5.1 Active filters

While filters are active, this button is highlighted and indicates the number of currently active filters.

<a id="52-disabling-filters"></a>
#### 5.2 Disabling filters

When selections have been made for a filter, a checkbox is shown to the left of the filter name allowing users to disable the filter without clearing the current selection. This can be useful for quickly toggling a filter on and off to see what data changes.

<a id="53-reseting-filters"></a>
#### 5.3 Reseting filters

Filter controls can be reset, clearing all selections to the default state, using the "x" icon to the right of the filter name.

<a id="6-exporting-data"></a>
### 6. Exporting data

The current loaded data, after applying [global filters](#5-global-data-filters), may be exported as a binary file that can be loaded into the libp2p Observation Deck (or other tools built on [libp2p Observer Catalogue](https://github.com/libp2p/observer-toolkit/tree/master/packages/catalogue)). The file format used for these files is described in the [libp2p Observer file format docs](https://github.com/libp2p/observer-toolkit/blob/master/docs/file-format.md), and matches the format of binary sent and recieved over websockets.

Clicking the Export Button prepares data for export and displays the current file size of the binary to be exported. Clicking this button downloads this binary file, with a datestamped filename.

<a id="7-peer-ids"></a>
### 7. Peer Ids

The Peer Id of the libp2p node acting as data source is displayed in the control panel for reference. It is displayed as a "PeerId Avatar" from the libp2p Observer SDK, and this same presentation may be used in widgets.

<a id="71-peer-id-avatar-image"></a>
#### 7.1. Peer Id avatar image

Each Peer ID displayed using this avatar format shows an automatically-generated hexagonal image with coloured segments. These colours are generated from the hash of the full Peer ID, and will be the same any time this Peer ID appears. In visualisations that include many Peer IDs, this may help users to spot frequently-appearing Peer Ids and help users follow peer ids that move as data changes.

<a id="72-peer-id-snippet"></a>
#### 7.2. Peer Id snippet

The last 5 characters of the Peer ID are shown. This can help users locate occurences of a particular Peer ID using tools such as "find".

<a id="73-full-peer-id-in-tooltip"></a>
#### 7.3. Full Peer ID in tooltip

On mouseover of a Peer ID avatar, the full Peer ID string is shown, along with a button that immediately copies the full Peer ID to the clipboard.

<a id="74-info-and-settings"></a>
### 7.4. Info and Settings

The last button in the left side of the control panel opens a window that displays information about the libp2p node providing the data, its environment, and the settings of the libp2p Introspection server.

<a id="741-implementation"></a>
#### 7.4.1. Implementation

This refers to the implementation of the P2P engine being used. For example, an entry `go-libp2p` indicates that the data is coming from a node using [`go-libp2p`](https://github.com/libp2p/go-libp2p), the [golang](https://golang.org/) implementation of [libp2p](https://github.com/libp2p).

<a id="742-version"></a>
#### 7.4.2. Version

This gives the version number of the P2P implementation described above.

<a id="743-platform"></a>
#### 7.4.3. Platform

This gives the operating system on which the given P2P implemenation is running.

<a id="744-state-messages-every"></a>
#### 7.4.4. "State messages every:"

This indicates the frequency at which state messages are being generated by the libp2p Introspection server, and therefore indicates the granularity of data on the timeline.

On live websocket connections, this is edittable: a new interval duration may be set and a signal will be sent to the libp2p Introspection server to start generating and sending state messages at this new frequency.

<a id="745-discard-data-after"></a>
#### 7.4.5. "Discard data after:"

This indicates the maximum amount of time old messages will be kept for before being discarded to potentially free memory.

On live websocket connections, this is edittable: a new cutoff time may be set and a signal will be sent to the libp2p Introspection server allowing it to update its settings, and the app's own datastore will start discarding data older than this given time.

If memory issues are found using the libp2p Observation Deck on a system with limited memory or in a context where a very large amount of data is being sent, lowering this setting may improve performance.

<a id="contribute-a-widget"></a>
## Contribute a widget

This project is open to community-created widgets, and will include high quality, useful widgets that have been approved by the core team.

To contribute a widget:

 - See if any project to create a widget similar to your idea already exists. It is advisable to post a discussion issue on this repo discussing your idea before starting work.

 - Create a [libp2p Observer](https://github.com/libp2p/observer-toolkit) widget
   - Run the [libp2p Observer create widget](https://github.com/libp2p/observer-toolkit/tree/master/packages/create-widget) script (no prior installation or local setup needed)
   - Follow the [libp2p Observer developer guide](https://github.com/libp2p/observer-toolkit/blob/master/docs/file-format.md) and other documentation on the [libp2p Observer](https://github.com/libp2p/observer-toolkit) project.
 - Post the widget to GitHub and publish it to NPM
 - Post a PR to this repo following the [Contribution Guidelines](./contribute.md)

[1]: https://libp2p.github.io/observation-deck/
[2]: https://github.com/libp2p/go-libp2p/issues/775
