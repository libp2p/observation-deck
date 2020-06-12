import * as connectionsTable from '@libp2p/observer-connections-table'
import * as eventsTable from '@libp2p/observer-events-table'
import * as streamsTable from '@libp2p/observer-streams-table'

const widgetPackageNames = [
  /observer-connections-table/,
  /observer-streams-table/,
  /observer-events-table/,
]

export default [connectionsTable, eventsTable, streamsTable]
export { widgetPackageNames }
