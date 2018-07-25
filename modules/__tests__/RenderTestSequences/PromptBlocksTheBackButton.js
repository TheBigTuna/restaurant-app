import React from 'react'
import expect from 'expect'
import { Push, Back } from '../../Actions'
import Prompt from '../../Prompt'
import createRenderProp from './createRenderProp'

export default (done) => {
  const steps = [
    ({ action, location }) => {
      expect(action).toBe('POP')
      expect(location).toMatch({
        pathname: '/'
      })

      return <Push path="/hello"/>
    },
    ({ action, location }) => {
      expect(action).toBe('PUSH')
      expect(location).toMatch({
        pathname: '/hello'
      })

      return (
        <div>
          <Prompt message="Are you sure?"/>
          <Back/>
        </div>
      )
    },
    ({ action, location }) => {
      expect(action).toBe('PUSH')
      expect(location).toMatch({
        pathname: '/hello'
      })

      return null
    }
  ]

  return createRenderProp(steps, done)
}
