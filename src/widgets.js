import * as connectionsTable from '@libp2p/observer-connections-table'
import * as eventsTable from '@libp2p/observer-events-table'
import * as streamsTable from '@libp2p/observer-streams-table'
import * as dhtBuckets from '@libp2p/observer-dht-buckets'

const widgetPackageNames = [
  /observer-connections-table/,
  /observer-streams-table/,
  /observer-events-table/,
  /observer-dht-buckets/,
]

export default [connectionsTable, eventsTable, streamsTable, dhtBuckets]
export { widgetPackageNames }
