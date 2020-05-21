import React from 'react'

import { fireEvent, act, render } from '@testing-library/react'
import Catalogue from '@nearform/observer-catalogue'

import widgets from './widgets'

describe('App', () => {
  it('can click through to a widget with sample data applied', async () => {
    const { getByText, findByText, findByRole } = render(
      <Catalogue widgets={widgets} />
    )

    const samples = getByText(/^Sample data/i)
    await act(async () => {
      await fireEvent.click(samples)
    })

    const minute = getByText(/^1 minute/i)
    await act(async () => {
      await fireEvent.click(minute)
    })

    const widgetDesc = await findByText(/^Connections table/i)
    await act(async () => {
      await fireEvent.click(widgetDesc)
    })

    const connectionsTable = await findByRole('table')
    expect(connectionsTable).toBeInTheDocument()
  })
})
