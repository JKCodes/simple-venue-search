import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'

const app = (
	<Provider store={store.configure(null)}>
		<Intro />
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))