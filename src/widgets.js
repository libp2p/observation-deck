import * as connectionsTable from '@nearform/observer-connections-table'
import * as eventsTable from '@nearform/observer-events-table'
import * as streamsTable from '@nearform/observer-streams-table'

const widgetPackageNames = [
  /observer-connections-table/,
  /observer-streams-table/,
  /observer-events-table/,
]

export default [connectionsTable, eventsTable, streamsTable]
export { widgetPackageNames }
